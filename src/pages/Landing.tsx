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
  StarIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

export const Landing = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const features = [
    {
      icon: CheckCircleIcon,
      title: "Evening Checklist",
      description: "Track your bedtime routine with customizable tasks"
    },
    {
      icon: MoonIcon,
      title: "Bedtime Reminder",
      description: "Stay consistent with gentle sleep schedule notifications"
    },
    {
      icon: ClockIcon,
      title: "Phone-Free Timer",
      description: "Wind down without distractions using our focused timer"
    },
    {
      icon: BellIcon,
      title: "Daily Notifications",
      description: "Never miss your evening routine with smart reminders"
    },
    {
      icon: CogIcon,
      title: "Easy Settings",
      description: "Customize everything to fit your perfect night routine"
    },
    {
      icon: LockClosedIcon,
      title: "Secure Login",
      description: "Your data is safe with encrypted authentication"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Set a Bedtime",
      description: "Stay consistent with a nightly sleep schedule."
    },
    {
      number: "02",
      title: "Follow Your Evening Checklist",
      description: "Pack your bag, brush your teeth, and more."
    },
    {
      number: "03",
      title: "Go Phone-Free",
      description: "Use our timer to wind down without distractions."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager",
      content: "NightPrep transformed my chaotic evenings into peaceful wind-down time. I actually look forward to bedtime now!",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "Student",
      content: "The phone-free timer is a game changer. I sleep so much better without scrolling until midnight.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/ChatGPT Image Aug 7, 2025, 12_30_58 PM.png" 
                alt="NightPrep Logo" 
                className="h-10 w-10 mr-3"
              />
              <span className="text-2xl font-bold text-amber-100">NightPrep</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link 
                to="/about" 
                className="text-slate-300 hover:text-amber-200 transition-colors"
              >
                About
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
                  to="/about" 
                  className="text-slate-300 hover:text-amber-200 transition-colors px-3 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
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
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <img 
              src="/ChatGPT Image Aug 7, 2025, 12_30_58 PM.png" 
              alt="NightPrep" 
              className="h-24 w-24 mx-auto mb-6 drop-shadow-2xl"
            />
            <h1 className="text-5xl md:text-7xl font-bold text-amber-100 mb-6">
              NightPrep
            </h1>
            <p className="text-2xl md:text-3xl text-slate-300 mb-8 font-light">
              Build better nights. Wake up ready.
            </p>
            <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto">
              Too many of us go to bed distracted, unprepared, or stressed. NightPrep helps you take control of your evenings.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/register"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center"
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              to="/about"
              className="border border-slate-500 hover:border-amber-400 text-slate-300 hover:text-amber-200 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-pulse">
          <MoonIcon className="h-16 w-16 text-amber-400/30" />
        </div>
        <div className="absolute bottom-1/4 right-10 animate-pulse">
          <StarIcon className="h-12 w-12 text-amber-300/40" />
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-100 mb-4">How It Works</h2>
            <p className="text-xl text-slate-300">Three simple steps to better nights</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-slate-900 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                <h3 className="text-2xl font-semibold text-amber-100 mb-4">{step.title}</h3>
                <p className="text-slate-300 text-lg">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-100 mb-4">Everything You Need</h2>
            <p className="text-xl text-slate-300">Powerful features to transform your evenings</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-200 hover:transform hover:scale-105">
                <feature.icon className="h-12 w-12 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-amber-100 mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-100 mb-4">What People Say</h2>
            <p className="text-xl text-slate-300">Real stories from real users</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 text-lg mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="text-amber-100 font-semibold">{testimonial.name}</p>
                  <p className="text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-6">
            Start Your Evening Routine Today
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands who've transformed their nights with NightPrep
          </p>
          <Link 
            to="/register"
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-10 py-5 rounded-lg font-semibold text-xl transition-all duration-200 transform hover:scale-105 inline-flex items-center"
          >
            Get Started Free
            <ArrowRightIcon className="ml-3 h-6 w-6" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img 
                  src="/ChatGPT Image Aug 7, 2025, 12_30_58 PM.png" 
                  alt="NightPrep" 
                  className="h-8 w-8 mr-3"
                />
                <span className="text-xl font-bold text-amber-100">NightPrep</span>
              </div>
              <p className="text-slate-400 mb-4">
                Build better nights. Wake up ready.
              </p>
            </div>
            <div>
              <h4 className="text-amber-100 font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-slate-400 hover:text-amber-200 transition-colors">About</Link></li>
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
