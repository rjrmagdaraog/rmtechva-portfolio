import React, { useEffect, useRef, useState } from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 } // Increased threshold slightly for better trigger point
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 bg-gray-50 dark:bg-[#050505] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          className={`flex items-center justify-center space-x-4 mb-16 transition-all duration-700 ease-out transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="p-3 rounded-lg bg-orange-500/10 text-orange-500">
             <Briefcase size={24} />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Main Highlight Card (First Item) */}
          <div 
            className={`lg:col-span-1 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl p-8 text-white relative overflow-hidden group transition-all duration-700 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="text-sm font-bold bg-white/20 inline-block px-3 py-1 rounded-full mb-6 backdrop-blur-sm">
                   {EXPERIENCE[0].period}
                </div>
                <h3 className="text-2xl font-bold leading-tight mb-4 uppercase tracking-tight">
                  {EXPERIENCE[0].role}
                </h3>
                <div className="w-10 h-1 bg-white/30 mb-6"></div>
                <ul className="space-y-2 text-sm text-orange-50 mb-8">
                    {EXPERIENCE[0].description.slice(0, 3).map((item, i) => (
                        <li key={i} className="flex items-start">
                            <span className="mr-2">•</span> {item}
                        </li>
                    ))}
                </ul>
              </div>
              <div className="text-xs uppercase tracking-widest font-bold opacity-75">{EXPERIENCE[0].company}</div>
            </div>
          </div>

          {/* Other Items */}
          {EXPERIENCE.slice(1).map((job, index) => (
            <div 
              key={job.id} 
              className={`bg-white dark:bg-[#111] rounded-2xl p-8 border border-gray-200 dark:border-white/5 hover:border-orange-500/30 transition-all duration-700 ease-out transform flex flex-col justify-between group hover:-translate-y-2 shadow-sm dark:shadow-none ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 150 + 100}ms` }} // Adjusted delay logic for smooth stagger
            >
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                   {job.role}
                </h3>
                <p className="text-slate-500 text-sm mb-6 uppercase tracking-wider">{job.company}</p>
                
                <div className="h-px w-full bg-gray-100 dark:bg-white/10 mb-6 group-hover:bg-orange-500/30 transition-colors"></div>
                
                <ul className="space-y-3">
                  {job.description.map((desc, i) => (
                    <li key={i} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-100 dark:border-white/5">
                 <div className="text-orange-500 dark:text-orange-400 font-mono text-sm">{job.period}</div>
                 <div className="text-slate-500 dark:text-slate-600 text-xs mt-1">{job.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;