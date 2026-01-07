import React from 'react';
import { SKILLS } from '../constants';
import { Check, Zap, Database, Layout } from 'lucide-react';

const Skills: React.FC = () => {
  const getIcon = (index: number) => {
    switch(index) {
      case 0: return <Zap className="h-6 w-6 text-orange-500" />;
      case 1: return <Database className="h-6 w-6 text-orange-500" />;
      case 2: return <Layout className="h-6 w-6 text-orange-500" />;
      default: return <Check className="h-6 w-6 text-orange-500" />;
    }
  }

  return (
    <section id="skills" className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Services <span className="text-slate-500 dark:text-slate-600">Offer</span></h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Explore some of the automation solutions and technical skills I bring to the table.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILLS.map((category, idx) => (
            <div 
              key={idx} 
              className="group bg-gray-50 dark:bg-[#111] rounded-xl p-8 border border-gray-100 dark:border-white/5 hover:border-orange-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(237,192,1,0.1)] dark:hover:shadow-[0_0_30px_rgba(237,192,1,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-center justify-between mb-8">
                 <div className="w-12 h-12 rounded-lg bg-white dark:bg-white/5 shadow-sm dark:shadow-none flex items-center justify-center group-hover:bg-orange-500/10 transition-colors">
                    {getIcon(idx)}
                 </div>
                 <div className="text-xs font-mono text-slate-400 dark:text-slate-500 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors">0{idx + 1}</div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 group-hover:text-orange-600 dark:group-hover:text-orange-50 transition-colors">
                {category.title}
              </h3>
              
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-300 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mr-3 opacity-50 group-hover:opacity-100"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;