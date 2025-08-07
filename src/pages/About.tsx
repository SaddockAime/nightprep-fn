import { Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  CheckCircleIcon, 
  ClockIcon, 
  BellIcon,
  MoonIcon,
  CogIcon,
  LockClosedIcon,
  ArrowRightIcon,
  CodeBracketIcon,
  UserGroupIcon,
  EnvelopeIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

export const About = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const features = [
    {
      icon: CheckCircleIcon,
      title: "Evening Checklist",
      description: "Create and manage your personalized bedtime routine with customizable tasks that help you stay organized and prepared for the next day."
    },
    {
      icon: ClockIcon,
      title: "Phone-Free Timer",
      description: "Set focused time periods to disconnect from devices and distractions, promoting better sleep hygiene and mental relaxation."
    },
    {
      icon: BellIcon,
      title: "Smart Reminders",
      description: "Gentle notifications that prompt you to start your evening routine at the optimal time for your sleep schedule."
    },
    {
      icon: MoonIcon,
      title: "Bedtime Settings",
      description: "Maintain consistency with personalized sleep schedules that adapt to your lifestyle and help regulate your circadian rhythm."
    },
    {
      icon: CogIcon,
      title: "Customizable Settings",
      description: "Tailor every aspect of the app to fit your unique needs and preferences for the perfect evening routine experience."
    },
    {
      icon: LockClosedIcon,
      title: "Privacy & Security",
      description: "Your personal data is protected with industry-standard encryption and secure authentication protocols."
    }
  ];

  const techStack = [
    { name: "React 19", description: "Modern frontend framework" },
    { name: "TypeScript", description: "Type-safe development" },
    { name: "Tailwind CSS", description: "Beautiful, responsive design" },
    { name: "Node.js", description: "Server-side runtime" },
    { name: "Express", description: "Web application framework" },
    { name: "MongoDB", description: "NoSQL database" },
    { name: "JWT", description: "Secure authentication" },
    { name: "Vite", description: "Lightning-fast build tool" }
  ];

  const targetUsers = [
    {
      icon: UserGroupIcon,
      title: "Students",
      description: "Manage evening study routines and prepare for consistent sleep schedules during busy academic periods."
    },
    {
      icon: CodeBracketIcon,
      title: "Professionals",
      description: "Disconnect from work stress and create healthy boundaries between professional and personal time."
    },
    {
      icon: MoonIcon,
      title: "Anyone Seeking Better Sleep",
      description: "Individuals looking to improve their sleep quality and establish healthier nighttime habits."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <img 
                src="/ChatGPT Image Aug 7, 2025, 12_30_58 PM.png" 
                alt="NightPrep Logo" 
                className="h-10 w-10 mr-3"
              />
              <span className="text-2xl font-bold text-amber-100">NightPrep</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                to="/" 
                className="text-slate-300 hover:text-amber-200 transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/login" 
                className="text-slate-300 hover:text-amber-200 transition-colors"
              >
                Sign In
              </Link>
              <Link 
                to="/register" 
                className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-4 py-2 rounded-lg font-medium transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-300 hover:text-amber-200 transition-colors"
              >
                {mobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-700/50">
              <div className="flex flex-col space-y-3">
                <Link 
                  to="/" 
                  className="text-slate-300 hover:text-amber-200 transition-colors px-3 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/login" 
                  className="text-slate-300 hover:text-amber-200 transition-colors px-3 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link 
                  to="/register" 
                  className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-3 py-2 rounded-lg font-medium transition-colors mx-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="/ChatGPT Image Aug 7, 2025, 12_30_58 PM.png" 
            alt="NightPrep" 
            className="h-20 w-20 mx-auto mb-8 drop-shadow-2xl"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-amber-100 mb-6">
            About NightPrep
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            A simple evening routine tracker built to help people wind down, disconnect, and sleep better.
          </p>
        </div>
      </section>

      {/* What is NightPrep */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-100 mb-6">What is NightPrep?</h2>
              <div className="space-y-4 text-lg text-slate-300">
                <p>
                  NightPrep is more than just another productivity app—it's your personal evening routine companion 
                  designed to transform chaotic nights into peaceful, purposeful wind-down experiences.
                </p>
                <p>
                  In our hyperconnected world, many of us struggle to disconnect from the day's stress and 
                  distractions. We go to bed with racing minds, scrolling through phones, or feeling unprepared 
                  for tomorrow. NightPrep addresses these challenges by providing structure, gentle guidance, and 
                  tools to help you reclaim your evenings.
                </p>
                <p>
                  With just a few minutes each night, users feel more prepared for tomorrow, sleep better, 
                  and wake up refreshed and ready to tackle the day ahead.
                </p>
              </div>
            </div>
            <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-amber-100 mb-6">Our Mission</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                "We built NightPrep to fight evening chaos, distractions, and poor sleep routines. 
                Our goal is to help people create meaningful boundaries between their busy days and 
                restorative nights, fostering better sleep and improved well-being."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Detailed */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-100 mb-4">Features That Make a Difference</h2>
            <p className="text-xl text-slate-300">Every feature is designed with your well-being in mind</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-200">
                <feature.icon className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-amber-100 mb-3">{feature.title}</h3>
                <p className="text-slate-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-100 mb-4">Who is NightPrep For?</h2>
            <p className="text-xl text-slate-300">Built for anyone who wants to improve their evenings</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetUsers.map((user, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <user.icon className="h-8 w-8 text-slate-900" />
                </div>
                <h3 className="text-2xl font-semibold text-amber-100 mb-4">{user.title}</h3>
                <p className="text-slate-300 leading-relaxed">{user.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-100 mb-4">Built with Modern Technology</h2>
            <p className="text-xl text-slate-300">Reliable, fast, and secure</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 text-center hover:border-amber-500/50 transition-all duration-200">
                <h4 className="text-amber-100 font-semibold mb-2">{tech.name}</h4>
                <p className="text-slate-400 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Creator Bio */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h2 className="text-4xl font-bold text-amber-100 mb-6">From the Creator</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Hi! I'm Saddock, a developer who cares deeply about healthy routines and the impact of technology on our daily lives. 
              After struggling with my own evening chaos and poor sleep habits, I realized that small, consistent changes 
              could make a huge difference.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              NightPrep was born from this personal experience and the belief that technology should help us live better, 
              not just stay more connected. I hope this app helps you create the peaceful evenings you deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Contact & Feedback */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-amber-100 mb-6">Get in Touch</h2>
          <p className="text-xl text-slate-300 mb-8">
            Have feedback, questions, or suggestions? We'd love to hear from you!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="mailto:aimegetz@gmail.com"
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover:border-amber-500/50 px-8 py-4 rounded-lg transition-all duration-200 flex items-center"
            >
              <EnvelopeIcon className="h-6 w-6 text-amber-400 mr-3" />
              <span className="text-amber-100 font-medium">aimegetz@gmail.com</span>
            </a>
            <Link 
              to="/register"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 flex items-center"
            >
              Try NightPrep Free
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link to="/" className="flex items-center mb-4">
                <img 
                  src="/ChatGPT Image Aug 7, 2025, 12_30_58 PM.png" 
                  alt="NightPrep" 
                  className="h-8 w-8 mr-3"
                />
                <span className="text-xl font-bold text-amber-100">NightPrep</span>
              </Link>
              <p className="text-slate-400 mb-4">
                Build better nights. Wake up ready.
              </p>
            </div>
            <div>
              <h4 className="text-amber-100 font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-slate-400 hover:text-amber-200 transition-colors">Home</Link></li>
                <li><Link to="/register" className="text-slate-400 hover:text-amber-200 transition-colors">Sign Up</Link></li>
                <li><Link to="/login" className="text-slate-400 hover:text-amber-200 transition-colors">Sign In</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-amber-100 font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-slate-400 hover:text-amber-200 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-slate-400 hover:text-amber-200 transition-colors">Terms of Use</a></li>
                <li><a href="mailto:aimegetz@gmail.com" className="text-slate-400 hover:text-amber-200 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center">
            <p className="text-slate-400">
              © 2025 NightPrep. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
