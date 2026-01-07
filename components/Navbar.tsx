import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Sun, Moon, Home, User, Zap, Briefcase, Mail, Workflow } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('');
  
  // Refs for sliding indicator
  const navRef = useRef<HTMLDivElement>(null);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 });

  const navLinks = [
    { name: 'Home', href: '#home', icon: <Home size={20} /> },
    { name: 'About', href: '#about', icon: <User size={20} /> },
    { name: 'Projects', href: '#projects', icon: <Workflow size={20} /> },
    { name: 'Skills', href: '#skills', icon: <Zap size={20} /> },
    { name: 'Experience', href: '#experience', icon: <Briefcase size={20} /> },
    { name: 'Contact', href: '#contact', icon: <Mail size={20} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Scroll Spy Logic
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200; // Offset for better triggering

      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          current = section;
          break;
        }
      }
      setActiveSection(current || 'home');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Initialize theme based on document class or local storage
    if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
       if (document.documentElement.classList.contains('dark')) {
         document.documentElement.classList.remove('dark');
       }
       setIsDark(false);
    } else {
       if (!document.documentElement.classList.contains('dark')) {
         document.documentElement.classList.add('dark');
       }
       setIsDark(true);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update sliding indicator position
  useEffect(() => {
    if (activeSection && navRef.current) {
        const activeLink = navRef.current.querySelector(`[data-section="${activeSection}"]`) as HTMLElement;
        if (activeLink) {
            setIndicatorStyle({
                left: activeLink.offsetLeft,
                width: activeLink.offsetWidth,
                opacity: 1
            });
        }
    }
  }, [activeSection, isOpen]); // Update when active section changes

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-gray-200 dark:border-white/5 py-3 shadow-sm dark:shadow-none' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center w-full">
          
          {/* MOBILE ONLY: Logo */}
          <a href="#" className="md:hidden font-bold text-lg tracking-tight text-gray-900 dark:text-white group uppercase">
            {PERSONAL_INFO.name}
          </a>

          {/* DESKTOP: Left Side - Icon Navigation with Sliding Indicator */}
          <div className="hidden md:flex items-center">
            <div className="relative flex items-center bg-gray-100/50 dark:bg-white/5 p-1 rounded-full border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm" ref={navRef}>
                {/* Sliding Indicator */}
                <div 
                    className="absolute h-[calc(100%-8px)] top-1 bg-white dark:bg-white/10 rounded-full shadow-sm transition-all duration-300 ease-out z-0"
                    style={{ 
                        left: indicatorStyle.left, 
                        width: indicatorStyle.width,
                        opacity: indicatorStyle.opacity 
                    }}
                />

                {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    data-section={link.href.substring(1)}
                    className={`relative z-10 p-3 rounded-full transition-colors duration-300 flex items-center justify-center group ${
                        activeSection === link.href.substring(1) 
                            ? 'text-orange-600 dark:text-white' 
                            : 'text-slate-500 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white'
                    }`}
                    onClick={() => setActiveSection(link.href.substring(1))}
                    title={link.name} // Tooltip on hover
                >
                    {link.icon}
                    {/* Tooltip */}
                    <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-black text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        {link.name}
                    </span>
                </a>
                ))}
            </div>
          </div>

          {/* DESKTOP: Right Side - Name, Theme Toggle, CTA */}
          <div className="hidden md:flex items-center">
             <div className="flex items-center gap-4 bg-gray-100/50 dark:bg-white/5 p-1.5 pr-2 pl-6 rounded-full border border-gray-200 dark:border-white/10 backdrop-blur-sm shadow-sm hover:border-orange-500/30 transition-colors">
                 <span className="font-bold text-sm tracking-tight text-gray-900 dark:text-white uppercase">
                    {PERSONAL_INFO.name}
                 </span>
                 
                 <div className="h-5 w-px bg-gray-300 dark:bg-white/10"></div>

                 <button 
                    onClick={toggleTheme}
                    className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-white/10 hover:text-orange-500 dark:hover:text-white transition-all"
                    aria-label="Toggle Theme"
                 >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                 </button>

                 <a 
                    href="#contact"
                    className="bg-gradient-to-r from-orange-600 to-orange-500 text-white dark:text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:shadow-[0_0_15px_rgba(237,192,1,0.4)] transition-all duration-300"
                 >
                    Let's Talk
                 </a>
             </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button 
                onClick={toggleTheme}
                className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 dark:text-white hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#0a0a0a] border-b border-gray-200 dark:border-white/10 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 text-base font-medium rounded-lg ${
                    activeSection === link.href.substring(1)
                    ? 'text-primary bg-orange-50 dark:bg-orange-500/10'
                    : 'text-slate-600 dark:text-slate-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-white/5'
                }`}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100 dark:border-white/5">
                <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-orange-600 to-orange-500 text-white dark:text-black px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider"
                >
                Let's Talk
                </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;