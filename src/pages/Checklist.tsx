import React, { useState, useEffect } from 'react';
import { Navigation } from '../components/common/Navigation';
import { checklistAPI } from '../services/api';
import type { ChecklistItem } from '../services/api';
import { 
  PlusIcon, 
  TrashIcon, 
  CheckCircleIcon,
  CircleStackIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

export const Checklist = () => {
  const [items, setItems] = useState<ChecklistItem[]>([]);
  const [newItem, setNewItem] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadChecklist();
  }, []);

  const loadChecklist = async () => {
    try {
      const checklist = await checklistAPI.getItems();
      setItems(checklist);
    } catch (error) {
      console.error('Failed to load checklist:', error);
      toast.error('Failed to load checklist');
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItem.trim()) return;

    try {
      const updatedItems = await checklistAPI.addItem(newItem.trim());
      setItems(updatedItems);
      setNewItem('');
      toast.success('Task added!');
    } catch (error) {
      console.error('Failed to add item:', error);
      toast.error('Failed to add task');
    }
  };

  const toggleItem = async (id: string) => {
    try {
      const updatedItems = await checklistAPI.toggleItem(id);
      setItems(updatedItems);
      
      const item = updatedItems.find(i => i._id === id);
      toast.success(item?.completed ? 'Task completed!' : 'Task unchecked');
    } catch (error) {
      console.error('Failed to update item:', error);
      toast.error('Failed to update task');
    }
  };

  const deleteItem = async (id: string) => {
    try {
      const updatedItems = await checklistAPI.deleteItem(id);
      setItems(updatedItems);
      toast.success('Task deleted');
    } catch (error) {
      console.error('Failed to delete item:', error);
      toast.error('Failed to delete task');
    }
  };

  const completedCount = items.filter(item => item.completed).length;
  const totalCount = items.length;
  const completionRate = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        <Navigation />
        <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-500"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation />
      
      <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-amber-100">
              Evening Checklist 📝
            </h1>
            <p className="mt-2 text-slate-300">
              Complete your bedtime routine tasks for a better night's sleep
            </p>
          </div>

          {/* Progress Card */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-amber-100">
                Tonight's Progress
              </h3>
              <div className="flex items-center space-x-2">
                <CircleStackIcon className="h-5 w-5 text-amber-400" />
                <span className="text-sm font-medium text-slate-300">
                  {completedCount} / {totalCount} completed
                </span>
              </div>
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between text-sm text-slate-400 mb-1">
                <span>Completion Rate</span>
                <span>{completionRate}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div 
                  className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${completionRate}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Add New Item */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-amber-100 mb-4">
              Add New Task
            </h3>
            <form onSubmit={addItem} className="flex space-x-3">
              <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="e.g., Brush teeth, Read for 10 minutes..."
                className="flex-1 min-w-0 px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-md shadow-sm text-slate-200 placeholder-slate-400 focus:ring-amber-500 focus:border-amber-500"
              />
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-slate-900 bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
              >
                <PlusIcon className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Checklist Items */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-amber-100 mb-4">
              Your Tasks
            </h3>
            
            {items.length === 0 ? (
              <div className="text-center py-8">
                <CircleStackIcon className="mx-auto h-12 w-12 text-slate-500" />
                <h3 className="mt-2 text-sm font-medium text-amber-100">No tasks yet</h3>
                <p className="mt-1 text-sm text-slate-400">
                  Get started by adding your first evening routine task above.
                </p>
              </div>
            ) : (
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item._id}
                    className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${
                      item.completed
                        ? 'bg-green-500/10 border-green-500/30'
                        : 'bg-slate-700/30 border-slate-600/50 hover:bg-slate-700/50'
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(item._id)}
                      className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                        item.completed
                          ? 'bg-green-500 border-green-500 text-white'
                          : 'border-slate-500 hover:border-amber-500'
                      }`}
                    >
                      {item.completed && (
                        <CheckCircleIcon className="w-3 h-3" />
                      )}
                    </button>
                    
                    <span
                      className={`flex-1 text-sm ${
                        item.completed
                          ? 'text-green-300 line-through'
                          : 'text-slate-200'
                      }`}
                    >
                      {item.task}
                    </span>
                    
                    <button
                      onClick={() => deleteItem(item._id)}
                      className="flex-shrink-0 p-1 text-slate-500 hover:text-red-400 transition-colors"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
