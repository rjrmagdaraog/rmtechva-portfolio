import React from 'react';
import { TOOLS } from '../constants';
import { Wrench } from 'lucide-react';

const Tools: React.FC = () => {
  // Split tools into two rows for the "2 bracket" effect
  const half = Math.ceil(TOOLS.length / 2);
  const firstRow = TOOLS.slice(0, half);
  const secondRow = TOOLS.slice(half);

  // Helper to render a scrolling row
  const ScrollingRow = ({ items, reverse = false }: { items: typeof TOOLS, reverse?: boolean }) => (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] mb-8">
      <ul 
        className={`flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none ${
          reverse ? 'animate-infinite-scroll-reverse' : 'animate-infinite-scroll'
        }`}
      >
        {/* Triple concatenation to ensure smooth looping for wider screens */}
        {items.concat(items).concat(items).map((tool, index) => (
          <li key={`${tool.name}-${index}-${reverse ? 'rev' : 'fwd'}`} className="flex flex-col items-center justify-center group">
            <div className="h-24 w-24 md:h-32 md:w-32 bg-gray-50 dark:bg-[#151515] rounded-3xl border border-gray-200 dark:border-white/5 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/5 transition-all duration-300 relative shadow-lg shadow-gray-200/50 dark:shadow-none overflow-hidden">
              <div className="w-14 h-14 md:w-20 md:h-20 flex items-center justify-center transition-all duration-300 transform group-hover:scale-110">
                  <img 
                  src={tool.iconPath || `https://cdn.simpleicons.org/${tool.slug}`} 
                  alt={tool.name}
                  className="h-full w-full object-contain filter drop-shadow-lg"
                  onError={(e) => {
                      (e.target as HTMLImageElement).style.display = 'none';
                      (e.target as HTMLImageElement).parentElement!.innerText = tool.name[0];
                      (e.target as HTMLImageElement).parentElement!.className = "text-gray-900 dark:text-white font-bold text-3xl";
                  }}
                  />
              </div>
            </div>
            <span className="mt-4 text-sm font-semibold text-slate-500 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{tool.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden border-y border-gray-200 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
        <div className="inline-flex items-center space-x-3 mb-4 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20">
           <Wrench className="text-orange-500" size={20} />
           <span className="text-orange-500 font-bold uppercase tracking-wider text-sm">Tech Stack</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">My Automation Tools</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
          I leverage a powerful ecosystem of tools to build seamless, scalable automation solutions for your business.
        </p>
      </div>
      
      <div className="flex flex-col gap-8">
        <ScrollingRow items={firstRow} />
        <ScrollingRow items={secondRow} reverse={true} />
      </div>
      
    </section>
  );
};

export default Tools;