import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white dark:bg-[#050505]">
      
      {/* Tech-Savvy Background */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none select-none">
        
        {/* Base Gradient - Deep tech dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-white dark:from-[#020202] dark:via-[#050505] dark:to-[#0a0a0a]"></div>
        
        {/* Digital Grid Layer */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_40%,transparent_100%)]"></div>
        
        {/* Circuit / Data Lines */}
        <div className="absolute inset-0 overflow-hidden opacity-30 dark:opacity-40">
            {/* Horizontal data stream */}
            <div className="absolute top-[15%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent blur-[1px]"></div>
            <div className="absolute top-[85%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent blur-[1px]"></div>
            
            {/* Vertical data stream */}
            <div className="absolute top-0 right-[15%] w-[1px] h-full bg-gradient-to-b from-transparent via-orange-500/20 to-transparent blur-[1px]"></div>
            <div className="absolute top-0 left-[10%] w-[1px] h-full bg-gradient-to-b from-transparent via-slate-500/10 to-transparent"></div>
        </div>

        {/* Floating 'Data' Nodes */}
        <div className="absolute top-1/3 left-[10%] w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse shadow-[0_0_8px_#edc001]"></div>
        <div className="absolute bottom-1/4 right-[15%] w-2 h-2 bg-blue-500/50 rounded-full animate-pulse shadow-[0_0_10px_#3b82f6]" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[15%] right-[25%] w-1 h-1 bg-white/50 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>

        {/* Ambient Glows - Tech Colors */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-600/10 dark:bg-orange-500/5 rounded-full blur-[100px] mix-blend-screen"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/5 dark:bg-blue-600/5 rounded-full blur-[100px] mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-16 md:gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left animate-fade-in-up">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 py-1.5 px-4 rounded-full bg-orange-50 dark:bg-orange-500/5 border border-orange-100 dark:border-orange-500/10 text-orange-700 dark:text-orange-400 text-xs font-semibold tracking-wide uppercase mb-8 shadow-sm backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span>Available for Projects</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.1] mb-6 tracking-tight">
              AI Automation Specialist <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">
                & Technical VA
              </span>
            </h1>
            
            <h2 className="text-xl text-slate-600 dark:text-slate-400 font-medium mb-8 max-w-xl mx-auto md:mx-0">
               {PERSONAL_INFO.title}
            </h2>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed pl-4 border-l-2 border-orange-500/30">
              {PERSONAL_INFO.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-base font-bold rounded-lg hover:bg-orange-600 dark:hover:bg-orange-500 dark:hover:text-black transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(237,192,1,0.25)] transform hover:-translate-y-0.5"
              >
                Let's Automate that! <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-3.5 bg-white dark:bg-[#111] border border-gray-200 dark:border-white/10 text-gray-800 dark:text-white text-base font-medium rounded-lg hover:border-gray-300 dark:hover:border-white/20 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300 group"
              >
                <Download className="mr-2 h-5 w-5 text-slate-400 group-hover:text-orange-500 transition-colors" /> Download Resume
              </a>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="flex-1 relative flex justify-center items-center w-full">
            {/* Tech Ring Visual Effect Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] group select-none">
                
                {/* 1. Spinning Outer Ring (Dashed) */}
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange-500/30 animate-[spin_20s_linear_infinite]"></div>
                
                {/* 2. Reverse Spinning Inner Ring (Light) */}
                <div className="absolute inset-3 rounded-full border border-dashed border-orange-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>

                {/* 3. Orbiting Planet Effect */}
                <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
                    <div className="h-4 w-4 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(237,192,1,0.8)] absolute -top-2 left-1/2 -translate-x-1/2"></div>
                </div>

                {/* 4. Static Glow Background */}
                <div className="absolute inset-4 bg-orange-500/5 rounded-full blur-2xl"></div>

                {/* 5. Main Image Container */}
                <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-white dark:border-[#1a1a1a] shadow-2xl shadow-orange-500/10 z-10 bg-orange-500/10 backdrop-blur-sm"> 
                    <img 
                    src="/profile.png" 
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Overlay gradient for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* 6. Floating 'Online' Badge (positioned relative to container) */}
                <div className="absolute bottom-10 right-0 z-20 animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="bg-white dark:bg-[#151515] border border-gray-100 dark:border-white/10 py-2 px-4 rounded-xl shadow-lg flex items-center gap-2">
                        <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </div>
                        <span className="text-xs font-bold text-gray-800 dark:text-white uppercase tracking-wider">Online</span>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;