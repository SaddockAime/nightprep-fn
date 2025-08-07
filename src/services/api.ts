const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// Get token from localStorage
const getToken = (): string | null => localStorage.getItem('token');

// API call helper
const apiCall = async (endpoint: string, options: RequestInit = {}): Promise<any> => {
  const token = getToken();
  const config: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'x-auth-token': token }),
    },
    ...options,
  };

  const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.msg || 'Something went wrong');
  }
  
  return response.json();
};

// Types
export interface User {
  _id: string;
  name: string;
  email: string;
  bedtime?: string;
  reminderTime?: string;
  timerDuration?: number;
  checklist: ChecklistItem[];
  createdAt: string;
  updatedAt: string;
}

export interface ChecklistItem {
  _id: string;
  task: string;
  completed: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface Settings {
  bedtime?: string;
  reminderTime?: string;
  timerDuration?: number;
}

// Authentication API
export const authAPI = {
  register: (userData: RegisterData) => apiCall('/auth/register', {
    method: 'POST',
    body: JSON.stringify(userData),
  }),
  
  login: (credentials: LoginCredentials) => apiCall('/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  }),
  
  getMe: (): Promise<User> => apiCall('/auth/me'),
};

// Checklist API
export const checklistAPI = {
  getItems: (): Promise<ChecklistItem[]> => apiCall('/checklist'),
  
  addItem: (task: string): Promise<ChecklistItem[]> => apiCall('/checklist', {
    method: 'POST',
    body: JSON.stringify({ task }),
  }),
  
  toggleItem: (id: string): Promise<ChecklistItem[]> => apiCall(`/checklist/${id}`, { 
    method: 'PUT' 
  }),
  
  deleteItem: (id: string): Promise<ChecklistItem[]> => apiCall(`/checklist/${id}`, { 
    method: 'DELETE' 
  }),
};

// Settings API
export const settingsAPI = {
  getSettings: (): Promise<Settings> => apiCall('/settings'),
  
  updateSettings: (settings: Partial<Settings>): Promise<Settings> => apiCall('/settings', {
    method: 'PUT',
    body: JSON.stringify(settings),
  }),
};

// Bedtime API
export const bedtimeAPI = {
  getBedtime: (): Promise<{ bedtime: string }> => apiCall('/bedtime'),
  
  setBedtime: (bedtime: string): Promise<{ bedtime: string }> => apiCall('/bedtime', {
    method: 'POST',
    body: JSON.stringify({ bedtime }),
  }),
};

// Reminder API
export const reminderAPI = {
  getReminder: (): Promise<{ reminderTime: string }> => apiCall('/reminder'),
  
  setReminder: (reminderTime: string): Promise<{ reminderTime: string }> => apiCall('/reminder', {
    method: 'POST',
    body: JSON.stringify({ reminderTime }),
  }),
};

// Timer API
export const timerAPI = {
  getTimerSettings: (): Promise<{ timerDuration: number }> => apiCall('/timer-settings'),
  
  updateTimerSettings: (timerDuration: number): Promise<{ timerDuration: number }> => apiCall('/timer-settings', {
    method: 'POST',
    body: JSON.stringify({ timerDuration }),
  }),
};
