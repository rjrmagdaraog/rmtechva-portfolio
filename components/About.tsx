import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  // Function to highlight keywords (simple implementation)
  const highlightText = (text: string) => {
    // Just a visual approximation to split text for styling
    return (
      <>
        Technical Virtual Assistant and Automation Specialist with a strong focus on streamlining business operations through <span className="text-primary font-semibold">intelligent workflows</span> and automation systems. Skilled in <span className="text-gray-900 dark:text-white font-semibold">Zapier, Make.com, n8n</span>, CRM management, workflow design, and process optimization.
        <br/><br/>
        I help businesses eliminate repetitive tasks, improve efficiency, and <span className="text-primary font-semibold">scale with reliable solutions</span>. I care deeply about your success, treating your business goals as if they were my own. With proactive communication and a results‑driven mindset, I build systems that not only work — <span className="text-gray-900 dark:text-white italic">they make work better.</span>
      </>
    );
  };

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-[#050505] relative overflow-hidden transition-colors duration-300">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 dark:bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-10">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 leading-relaxed font-light max-w-5xl mx-auto">
          <p>
            {highlightText(PERSONAL_INFO.about)}
          </p>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-8 rounded-2xl bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-gray-200/50 dark:shadow-none">
              <div className="text-5xl font-bold text-gray-900 dark:text-white mb-3">12+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Tools Integrated</div>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-gray-200/50 dark:shadow-none">
              <div className="text-5xl font-bold text-gray-900 dark:text-white mb-3">200+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Hours Saved</div>
            </div>
            <div className="p-8 rounded-2xl bg-white dark:bg-[#0f0f0f] border border-gray-200 dark:border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-gray-200/50 dark:shadow-none">
              <div className="text-5xl font-bold text-gray-900 dark:text-white mb-3">24+</div>
              <div className="text-sm text-slate-500 uppercase tracking-widest font-bold">Projects Completed</div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default About;