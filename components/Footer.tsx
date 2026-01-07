import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-[#050505] border-t border-gray-200 dark:border-white/5 py-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Copyright & Socials */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          
          <div className="text-slate-500 dark:text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} All rights reserved.
          </div>
          
          <div className="flex space-x-6 items-center">
             <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-[#0077b5] transition-colors transform hover:scale-110 duration-300">
                <Linkedin size={22} />
             </a>
             
             {/* Upwork Custom SVG Icon */}
             <a href="#" aria-label="Upwork" className="text-slate-400 hover:text-[#6fda44] transition-colors transform hover:scale-110 duration-300">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.138 2.542-2.544 2.544-1.406 0-2.542-1.138-2.542-2.544v-7.112H0v7.112c0 2.91 2.366 5.276 5.276 5.276S10.552 13.513 10.552 10.604v-1.196c.84 1.282 1.837 2.75 3.033 3.931l-1.352 6.33h3.231l.824-3.855c.273.109.553.167.84.167 3.003 0 5.436-2.434 5.436-5.437 0-3.004-2.433-5.436-5.436-5.436z" />
                </svg>
             </a>

             <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-[#1877F2] transition-colors transform hover:scale-110 duration-300">
                <Facebook size={22} />
             </a>
          </div>
          
        </div>
        
        {/* Bottom CTA: Centered & Animated */}
        <div className="mt-16 text-center border-t border-gray-100 dark:border-white/5 pt-12">
            <div className="animate-pulse-slow">
                <a href="#" className="inline-block px-8 py-4 border-2 border-orange-500/50 text-orange-600 dark:text-orange-500 rounded-full hover:bg-orange-500 hover:text-white dark:hover:text-black hover:border-orange-500 transition-all duration-300 text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(237,192,1,0.15)] hover:shadow-[0_0_30px_rgba(237,192,1,0.4)] transform hover:-translate-y-1">
                    Schedule a Meeting
                </a>
            </div>
            <div className="mt-6 text-sm text-slate-500 dark:text-slate-500 font-medium tracking-wide">
                Let's work together to build something great.
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;