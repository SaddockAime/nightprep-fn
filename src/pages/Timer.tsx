import { useState, useEffect, useRef } from 'react';
import { Navigation } from '../components/common/Navigation';
import { settingsAPI } from '../services/api';
import { 
  PlayIcon, 
  PauseIcon, 
  StopIcon,
  PhoneIcon,
  BellIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

export const Timer = () => {
  const [duration, setDuration] = useState(30); // minutes
  const [timeLeft, setTimeLeft] = useState(0); // seconds
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    loadSettings();
    
    // Create audio element for timer completion sound
    audioRef.current = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmAaYjBuGHLsRQALWJ/h47yWrQ1m5DGM5xdp9e1rA');
  }, []);

  useEffect(() => {
    if (isRunning && !isPaused && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setIsRunning(false);
            setIsPaused(false);
            playNotificationSound();
            toast.success('Phone-free time completed! 🎉');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, isPaused, timeLeft]);

  const loadSettings = async () => {
    try {
      const settings = await settingsAPI.getSettings();
      if (settings.timerDuration) {
        setDuration(settings.timerDuration);
      }
    } catch (error) {
      console.error('Failed to load settings:', error);
    }
  };

  const playNotificationSound = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(console.error);
    }
  };

  const startTimer = () => {
    if (!isRunning) {
      setTimeLeft(duration * 60); // Convert minutes to seconds
    }
    setIsRunning(true);
    setIsPaused(false);
    toast.success('Phone-free timer started! 📱🚫');
  };

  const pauseTimer = () => {
    setIsPaused(true);
    toast('Timer paused');
  };

  const resumeTimer = () => {
    setIsPaused(false);
    toast('Timer resumed');
  };

  const stopTimer = () => {
    setIsRunning(false);
    setIsPaused(false);
    setTimeLeft(0);
    toast('Timer stopped');
  };

  const updateDuration = async (newDuration: number) => {
    setDuration(newDuration);
    try {
      await settingsAPI.updateSettings({ timerDuration: newDuration });
      toast.success('Timer duration updated');
    } catch (error) {
      console.error('Failed to update duration:', error);
      toast.error('Failed to update duration');
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgress = () => {
    if (duration === 0) return 0;
    const totalSeconds = duration * 60;
    const elapsed = totalSeconds - timeLeft;
    return (elapsed / totalSeconds) * 100;
  };

  const presetDurations = [15, 30, 45, 60, 90, 120];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <Navigation />
      
      <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-amber-100">
              Phone-Free Timer ⏰
            </h1>
            <p className="mt-2 text-slate-300">
              Set a timer to stay away from your phone before bedtime
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Timer Display */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="text-center">
                <div className="mb-6">
                  <PhoneIcon className="mx-auto h-16 w-16 text-amber-400 mb-4" />
                  <h3 className="text-2xl font-bold text-amber-100 mb-2">
                    {isRunning ? 'Phone-Free Time' : 'Ready to Start?'}
                  </h3>
                  <p className="text-slate-300">
                    {isRunning 
                      ? isPaused 
                        ? 'Timer is paused' 
                        : 'Stay strong! Keep your phone away'
                      : 'Set your phone aside and focus on relaxation'
                    }
                  </p>
                </div>

                <div className="mb-8">
                  <div className="text-6xl font-bold text-amber-400 mb-4">
                    {isRunning ? formatTime(timeLeft) : formatTime(duration * 60)}
                  </div>
                  
                  {isRunning && (
                    <div className="w-full bg-slate-700 rounded-full h-3 mb-4">
                      <div 
                        className="bg-amber-500 h-3 rounded-full transition-all duration-1000 ease-linear"
                        style={{ width: `${getProgress()}%` }}
                      ></div>
                    </div>
                  )}
                </div>

                <div className="flex justify-center space-x-4">
                  {!isRunning ? (
                    <button
                      onClick={startTimer}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-slate-900 bg-amber-500 hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
                    >
                      <PlayIcon className="w-5 h-5 mr-2" />
                      Start Timer
                    </button>
                  ) : (
                    <>
                      {isPaused ? (
                        <button
                          onClick={resumeTimer}
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
                        >
                          <PlayIcon className="w-5 h-5 mr-2" />
                          Resume
                        </button>
                      ) : (
                        <button
                          onClick={pauseTimer}
                          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-slate-900 bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
                        >
                          <PauseIcon className="w-5 h-5 mr-2" />
                          Pause
                        </button>
                      )}
                      
                      <button
                        onClick={stopTimer}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                      >
                        <StopIcon className="w-5 h-5 mr-2" />
                        Stop
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Duration Settings */}
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-amber-100 mb-4">
                  Timer Duration
                </h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Custom Duration (minutes)
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="180"
                    value={duration}
                    onChange={(e) => updateDuration(parseInt(e.target.value) || 30)}
                    disabled={isRunning}
                    className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-md shadow-sm text-slate-200 focus:ring-amber-500 focus:border-amber-500 disabled:bg-slate-800 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    Quick Presets
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {presetDurations.map((preset) => (
                      <button
                        key={preset}
                        onClick={() => updateDuration(preset)}
                        disabled={isRunning}
                        className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          duration === preset
                            ? 'bg-amber-500 text-slate-900'
                            : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                        } disabled:opacity-50 disabled:cursor-not-allowed`}
                      >
                        {preset}m
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-amber-100 mb-4">
                  Tips for Success
                </h3>
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-start space-x-2">
                    <BellIcon className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Put your phone in another room or use airplane mode</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <ClockIcon className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Start 30-60 minutes before your bedtime</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <PhoneIcon className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span>Use this time for reading, meditation, or journaling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
