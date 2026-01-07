import React from 'react';
import { Bot, Zap, Workflow, Layers, Cpu, Database } from 'lucide-react';

const FeaturedProject: React.FC = () => {
  
  const MAIN_PROJECT = {
    title: "n8n AI Agent for FB Page Customer Support",
    subtitle: "n8n • AI Agent • RAG",
    description: "Automatically responds to customer inquiries on a Facebook page using reliable, up-to-date information. Facebook webhook messages are filtered and processed by an AI agent that retrieves answers from a connected knowledge base, applies contextual memory, and sends accurate responses back through automated HTTP requests. This delivers fast, consistent, and informed replies 24/7, reduces support workload, improves answer accuracy, and enhances overall customer experience.",
    image: "/n8n-webhook-agent.png",
    tags: ["n8n", "OpenAI", "RAG", "Meta API"],
    stats: "Active Production"
  };

  const OTHER_WORKFLOWS = [
    {
      title: "Client Onboarding System",
      tool: "Zapier",
      toolColor: "text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400",
      image: "/asana-logic-flow.png",
      description: "Complex path logic to route new clients, create Drive folders, and assign Asana tasks."
    },
    {
      title: "Apollo Lead Enrichment",
      tool: "Zapier",
      toolColor: "text-orange-600 bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400",
      image: "/apollo-enrichment-flow.png",
      description: "Automated scoring flow sending high-priority prospects directly to Slack and CRM."
    },
    {
      title: "Finance Ops: Asana to Xero",
      tool: "Make.com",
      toolColor: "text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400",
      image: "/make-finance-ops.png",
      description: "Sync project completion events in Asana to automated invoice generation."
    },
    {
      title: "Email Attachment Parser",
      tool: "Make.com",
      toolColor: "text-purple-600 bg-purple-100 dark:bg-purple-900/30 dark:text-purple-400",
      image: "/make-email-parser.png",
      description: "Extracts, renames, and archives email attachments to Drive & Sheets for analysis."
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#0a0a0a] relative overflow-hidden transition-colors duration-300 border-t border-gray-100 dark:border-white/5">
       
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
         
         {/* Section Header */}
         <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
                <div className="inline-flex items-center space-x-2 py-1 px-3 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-500 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-500/20">
                    <Workflow size={14} />
                    <span>Portfolio</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Featured <span className="text-orange-500">Projects</span></h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-md text-right md:text-right hidden md:block">
              Solving real-world business challenges with intelligent, scalable workflows.
            </p>
         </div>

         {/* Bento Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(320px,auto)] gap-6">
            
            {/* --- MAIN CARD (Spans 2x2) --- */}
            <div 
                className="group lg:col-span-2 lg:row-span-2 relative bg-gray-50 dark:bg-[#111] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-orange-500/50 transition-all duration-300 flex flex-col"
            >
                {/* Image Container */}
                <div className="h-3/5 w-full bg-gray-200 dark:bg-[#1a1a1a] relative overflow-hidden">
                     <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10"></div>
                     <img 
                        src={MAIN_PROJECT.image} 
                        alt={MAIN_PROJECT.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out object-left-top"
                     />
                     
                     {/* Floating Badge */}
                     <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 border border-black/5 dark:border-white/10 shadow-sm">
                         <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-bold text-gray-800 dark:text-white uppercase tracking-wider">{MAIN_PROJECT.stats}</span>
                     </div>
                </div>

                {/* Content Container */}
                <div className="h-2/5 p-8 flex flex-col justify-between relative bg-white dark:bg-[#111]">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent"></div>
                    
                    <div>
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-orange-600 dark:text-orange-500 mb-3">
                            <Cpu size={14} />
                            <span>{MAIN_PROJECT.subtitle}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-500 transition-colors">
                            {MAIN_PROJECT.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm line-clamp-3 md:line-clamp-6">
                            {MAIN_PROJECT.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                        {MAIN_PROJECT.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-white/5 rounded-md text-xs font-medium text-slate-500 dark:text-slate-400 border border-gray-200 dark:border-white/5">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- SMALL CARDS --- */}
            {OTHER_WORKFLOWS.map((project, idx) => (
                <div 
                    key={idx}
                    className="group relative bg-gray-50 dark:bg-[#111] rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-orange-500/30 transition-all duration-300 flex flex-col hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-black/50"
                >
                    {/* Image Area */}
                    <div className="h-48 w-full bg-gray-200 dark:bg-[#1a1a1a] relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10"></div>
                        <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover object-left-top transform group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className={`absolute top-4 left-4 z-20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${project.toolColor} shadow-sm backdrop-blur-md`}>
                            {project.tool}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-6 flex flex-col justify-between bg-white dark:bg-[#111]">
                        <div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 leading-tight group-hover:text-orange-500 transition-colors">
                                {project.title}
                            </h4>
                            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed line-clamp-3">
                                {project.description}
                            </p>
                        </div>
                    </div>
                </div>
            ))}

         </div>

       </div>
    </section>
  )
}

export default FeaturedProject;