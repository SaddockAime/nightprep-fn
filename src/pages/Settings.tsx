import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Navigation } from '../components/common/Navigation';
import { settingsAPI } from '../services/api';
import type { Settings as UserSettings } from '../services/api';
import { 
  ClockIcon, 
  BellIcon, 
  MoonIcon,
  UserIcon,
  CheckIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

export const Settings = () => {
  const { user, logout } = useAuth();
  const [settings, setSettings] = useState<UserSettings>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    loadSettings();
  }, []);

  const loadSettings = async () => {
    try {
      const userSettings = await settingsAPI.getSettings();
      setSettings(userSettings);
    } catch (error) {
      console.error('Failed to load settings:', error);
      toast.error('Failed to load settings');
    } finally {
      setLoading(false);
    }
  };

  const updateSetting = async (key: keyof UserSettings, value: any) => {
    setSaving(true);
    try {
      const updatedSettings = await settingsAPI.updateSettings({ [key]: value });
      setSettings(updatedSettings);
      toast.success('Settings updated successfully!');
    } catch (error) {
      console.error('Failed to update settings:', error);
      toast.error('Failed to update settings');
    } finally {
      setSaving(false);
    }
  };

  const formatTime = (timeString?: string) => {
    if (!timeString) return '';
    const [hours, minutes] = timeString.split(':');
    const time = new Date();
    time.setHours(parseInt(hours), parseInt(minutes));
    return format(time, 'h:mm a');
  };

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
              Settings ⚙️
            </h1>
            <p className="mt-2 text-slate-300">
              Customize your evening routine preferences
            </p>
          </div>

          <div className="space-y-6">
            {/* Profile Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center mb-6">
                <UserIcon className="h-6 w-6 text-amber-400 mr-3" />
                <h3 className="text-lg font-semibold text-amber-100">Profile</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Name
                  </label>
                  <p className="text-amber-100 font-medium">{user?.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-1">
                    Email
                  </label>
                  <p className="text-amber-100 font-medium">{user?.email}</p>
                </div>
              </div>
            </div>

            {/* Bedtime Settings */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center mb-6">
                <MoonIcon className="h-6 w-6 text-amber-400 mr-3" />
                <h3 className="text-lg font-semibold text-amber-100">Bedtime</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="bedtime" className="block text-sm font-medium text-slate-300 mb-2">
                    Target Bedtime
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="time"
                      id="bedtime"
                      value={settings.bedtime || ''}
                      onChange={(e) => updateSetting('bedtime', e.target.value)}
                      disabled={saving}
                      className="px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-md shadow-sm text-slate-200 focus:ring-amber-500 focus:border-amber-500 disabled:bg-slate-800 disabled:cursor-not-allowed"
                    />
                    {settings.bedtime && (
                      <div className="flex items-center text-sm text-slate-300">
                        <CheckIcon className="h-4 w-4 text-green-400 mr-1" />
                        Set for {formatTime(settings.bedtime)}
                      </div>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-slate-400">
                    When do you want to be in bed and ready to sleep?
                  </p>
                </div>
              </div>
            </div>

            {/* Reminder Settings */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center mb-6">
                <BellIcon className="h-6 w-6 text-amber-400 mr-3" />
                <h3 className="text-lg font-semibold text-amber-100">Evening Reminder</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="reminderTime" className="block text-sm font-medium text-slate-300 mb-2">
                    Reminder Time
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="time"
                      id="reminderTime"
                      value={settings.reminderTime || ''}
                      onChange={(e) => updateSetting('reminderTime', e.target.value)}
                      disabled={saving}
                      className="px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-md shadow-sm text-slate-200 focus:ring-amber-500 focus:border-amber-500 disabled:bg-slate-800 disabled:cursor-not-allowed"
                    />
                    {settings.reminderTime && (
                      <div className="flex items-center text-sm text-slate-300">
                        <CheckIcon className="h-4 w-4 text-green-400 mr-1" />
                        Set for {formatTime(settings.reminderTime)}
                      </div>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-slate-400">
                    When should we remind you to start your evening routine?
                  </p>
                </div>
              </div>
            </div>

            {/* Timer Settings */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-center mb-6">
                <ClockIcon className="h-6 w-6 text-amber-400 mr-3" />
                <h3 className="text-lg font-semibold text-amber-100">Phone-Free Timer</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="timerDuration" className="block text-sm font-medium text-slate-300 mb-2">
                    Default Duration (minutes)
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      id="timerDuration"
                      min="1"
                      max="180"
                      value={settings.timerDuration || 30}
                      onChange={(e) => updateSetting('timerDuration', parseInt(e.target.value) || 30)}
                      disabled={saving}
                      className="w-24 px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-md shadow-sm text-slate-200 focus:ring-amber-500 focus:border-amber-500 disabled:bg-slate-800 disabled:cursor-not-allowed"
                    />
                    <span className="text-sm text-slate-300">minutes</span>
                  </div>
                  <p className="mt-1 text-sm text-slate-400">
                    How long should the phone-free timer run by default?
                  </p>
                </div>

                <div className="grid grid-cols-4 gap-2 mt-4">
                  {[15, 30, 45, 60].map((duration) => (
                    <button
                      key={duration}
                      onClick={() => updateSetting('timerDuration', duration)}
                      disabled={saving}
                      className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        settings.timerDuration === duration
                          ? 'bg-amber-500 text-slate-900'
                          : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                      } disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {duration}m
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Account Actions */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-100 mb-6">Account</h3>
              
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
                <div>
                  <p className="text-sm text-slate-300">
                    Need to sign out? You can always log back in with your credentials.
                  </p>
                </div>
                <button
                  onClick={logout}
                  className="inline-flex items-center px-4 py-2 border border-slate-600 text-sm font-medium rounded-md text-slate-300 bg-slate-700/50 hover:bg-slate-600/50 hover:border-amber-500/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
