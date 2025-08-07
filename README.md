# 🌙 NightPrep Frontend

A beautiful React TypeScript frontend for the NightPrep evening routine application, built with Vite and Tailwind CSS. Features a stunning dark theme with slate/blue gradients and amber accents, designed specifically for evening use.

## ✨ Features

- **🔐 Authentication** - Secure login/register with JWT tokens and proper navigation
- **🏠 Landing Page** - Beautiful marketing page with hero section, features, and testimonials
- **� About Page** - Comprehensive about page with creator information and tech stack
- **�📊 Dashboard** - Overview of evening routine progress with real-time stats
- **✅ Checklist** - Add, complete, and manage bedtime tasks with progress tracking
- **⏰ Timer** - Phone-free focus timer with customizable duration and presets
- **🛏️ Bedtime Settings** - Set and track sleep schedule with time picker
- **🔔 Reminder System** - Configure evening routine reminders
- **⚙️ Settings** - Comprehensive settings page for all preferences
- **🌙 Dark Theme** - Evening-friendly design with consistent branding
- **📱 Responsive Design** - Mobile-first design that works on all devices

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- NightPrep backend server running on port 5000

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   ```
   http://localhost:5173
   ```

## 🏗️ Project Structure

```
src/
├── components/
│   ├── auth/
│   │   └── ProtectedRoute.tsx    # Route protection component
│   ├── common/
│   │   └── Navigation.tsx        # Dashboard navigation bar
│   ├── Header.tsx               # Public pages header with navigation
│   └── Footer.tsx               # Consistent footer for all pages
├── contexts/
│   └── AuthContext.tsx          # Authentication state management
├── pages/
│   ├── Landing.tsx             # Landing page with hero and features
│   ├── About.tsx               # About page with creator info
│   ├── Login.tsx               # Login page with header/footer
│   ├── Register.tsx            # Registration page with header/footer
│   ├── Dashboard.tsx           # Main dashboard with stats
│   ├── Checklist.tsx           # Task management interface
│   ├── Timer.tsx               # Phone-free countdown timer
│   └── Settings.tsx            # User preferences and settings
├── services/
│   └── api.ts                  # API service functions
├── App.tsx                     # Main app component with routing
├── main.tsx                    # Entry point
└── index.css                   # Tailwind CSS and custom styles
```

## 🔌 API Integration

- **Base URL**: `http://localhost:5000/api`
- **Authentication**: JWT tokens in `x-auth-token` header
- **Token Storage**: localStorage
- **Auto Redirect**: 401 responses automatically redirect to login
- **Error Handling**: Toast notifications for user feedback

## 🎨 Design System

- **Color Scheme**: Dark slate/blue gradients with amber accents
- **Typography**: Clean, readable fonts optimized for evening use
- **Components**: Glassmorphism effects with backdrop blur
- **Responsive**: Mobile-first design with breakpoint optimization
- **Accessibility**: Proper contrast ratios and keyboard navigation

## 🛠️ Development

```bash
npm run dev      # Start development server
npm run build    # Build for production  
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📱 Completed Features

✅ **Authentication System** - Complete login/register with JWT handling and navigation  
✅ **Landing Page** - Professional marketing page with hero, features, and testimonials  
✅ **About Page** - Comprehensive about page with creator bio and contact info  
✅ **Protected Routes** - Automatic redirect if not authenticated  
✅ **Dashboard** - User overview with real-time stats and progress tracking  
✅ **Checklist Management** - Full CRUD operations for bedtime tasks  
✅ **Timer Functionality** - Phone-free countdown timer with presets and audio  
✅ **Settings Management** - Complete user preferences with real-time updates  
✅ **Navigation System** - Responsive navigation with mobile support  
✅ **Dark Theme** - Consistent evening-friendly design throughout  
✅ **API Integration** - Complete backend integration with error handling  
✅ **Responsive Design** - Mobile-first approach with touch-friendly interfaces

## 🚀 Key Features in Detail

### 🏠 Landing & Marketing
- Hero section with compelling call-to-action
- Feature showcase with icons and descriptions
- User testimonials and social proof
- Smooth navigation between public pages

### 🔐 Authentication Flow
- Secure JWT-based authentication
- Form validation and error handling
- Automatic session management
- Seamless redirect after login/register

### � Dashboard Intelligence
- Real-time progress tracking
- Visual completion percentages
- Quick access to all features
- Evening routine summary

### ✅ Smart Checklist
- Add/edit/delete tasks
- Mark tasks as complete
- Progress visualization
- Persistent task storage

### ⏰ Focus Timer
- Customizable duration settings
- Phone-free focus sessions
- Audio notifications
- Multiple preset options

### ⚙️ Comprehensive Settings
- Bedtime schedule configuration
- Evening reminder setup
- Timer duration preferences
- Real-time setting updates

## 🎯 Technical Highlights

- **React 19** with TypeScript for type safety
- **Vite** for fast development and building
- **Tailwind CSS v3.3.3** for styling
- **React Router** for navigation
- **React Context** for state management
- **React Hot Toast** for notifications
- **Heroicons** for consistent iconography
- **date-fns** for time formatting

---

## 🌟 Creator

**Created by Saddock**  
📧 Contact: [aimegetz@gmail.com](mailto:aimegetz@gmail.com)

**NightPrep - Build better nights. Wake up ready! �✨**
