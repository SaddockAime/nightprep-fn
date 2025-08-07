import { useAuth } from '../contexts/AuthContext';
import { Navigation } from '../components/common/Navigation';
import { settingsAPI } from '../services/api';
import type { Settings } from '../services/api';
import { useState, useEffect } from 'react';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  MoonIcon,
  BellIcon
} from '@heroicons/react/24/outline';
import { format } from 'date-fns';

export const Dashboard = () => {
  const { user } = useAuth();
  const [settings, setSettings] = useState<Settings>({});

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const userSettings = await settingsAPI.getSettings();
        setSettings(userSettings);
      } catch (error) {
        console.error('Failed to load settings:', error);
      }
    };

    if (user) {
      loadSettings();
    }
  }, [user]);

  const formatTime = (timeString?: string) => {
    if (!timeString) return 'Not set';
    const [hours, minutes] = timeString.split(':');
    const time = new Date();
    time.setHours(parseInt(hours), parseInt(minutes));
    return format(time, 'h:mm a');
  };

  const completedTasks = user?.checklist?.filter(item => item.completed).length || 0;
  const totalTasks = user?.checklist?.length || 0;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-amber-100">
              Good evening, {user?.name}! 🌙
            </h1>
            <p className="mt-2 text-slate-300">
              Ready to wind down and prepare for a restful night?
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-200">
              <div className="flex items-center">
                <div className="p-2 bg-amber-500/20 rounded-lg">
                  <CheckCircleIcon className="h-6 w-6 text-amber-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-400">Tasks Complete</p>
                  <p className="text-2xl font-bold text-amber-100">
                    {completedTasks}/{totalTasks}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-200">
              <div className="flex items-center">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <MoonIcon className="h-6 w-6 text-blue-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-400">Bedtime</p>
                  <p className="text-2xl font-bold text-amber-100">
                    {formatTime(settings.bedtime)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-200">
              <div className="flex items-center">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <ClockIcon className="h-6 w-6 text-green-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-400">Timer</p>
                  <p className="text-2xl font-bold text-amber-100">
                    {settings.timerDuration || 30} min
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-200">
              <div className="flex items-center">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <BellIcon className="h-6 w-6 text-orange-400" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-slate-400">Reminder</p>
                  <p className="text-2xl font-bold text-amber-100">
                    {formatTime(settings.reminderTime)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-100 mb-4">
                Today's Progress
              </h3>
              <div className="mb-4">
                <div className="flex justify-between text-sm text-slate-400 mb-1">
                  <span>Checklist Completion</span>
                  <span>{completionRate}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div 
                    className="bg-amber-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${completionRate}%` }}
                  ></div>
                </div>
              </div>
              
              {totalTasks === 0 ? (
                <p className="text-slate-400 text-center py-4">
                  No tasks in your checklist yet. Add some to get started!
                </p>
              ) : (
                <div className="space-y-2">
                  {user?.checklist?.slice(0, 3).map((item) => (
                    <div key={item._id} className="flex items-center space-x-2">
                      <CheckCircleIcon 
                        className={`h-4 w-4 ${
                          item.completed ? 'text-green-400' : 'text-slate-500'
                        }`} 
                      />
                      <span 
                        className={`text-sm ${
                          item.completed ? 'text-slate-400 line-through' : 'text-slate-300'
                        }`}
                      >
                        {item.task}
                      </span>
                    </div>
                  ))}
                  {totalTasks > 3 && (
                    <p className="text-xs text-slate-400 mt-2">
                      +{totalTasks - 3} more tasks
                    </p>
                  )}
                </div>
              )}
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-100 mb-4">
                Evening Summary
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                  <span className="text-sm text-slate-400">Next bedtime in</span>
                  <span className="font-medium text-amber-100">
                    {settings.bedtime ? formatTime(settings.bedtime) : 'Set bedtime first'}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                  <span className="text-sm text-slate-400">Reminder set for</span>
                  <span className="font-medium text-amber-100">
                    {formatTime(settings.reminderTime)}
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                  <span className="text-sm text-slate-400">Phone-free time</span>
                  <span className="font-medium text-amber-100">
                    {settings.timerDuration || 30} minutes
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
