import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700/50 py-12 mt-auto">
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
  );
};
