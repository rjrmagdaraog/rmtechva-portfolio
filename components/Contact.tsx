import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Mail, Phone, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-[#050505] relative overflow-hidden transition-colors duration-300">
        {/* Background gradient for section */}
      <div className="absolute inset-0 bg-gradient-to-t from-white to-gray-50 dark:from-[#0f0f0f] dark:to-[#050505]"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">CONTACT ME</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white dark:bg-[#0f0f0f] rounded-3xl border border-gray-200 dark:border-white/5 overflow-hidden shadow-2xl">
          
          {/* Contact Info */}
          <div className="p-10 bg-gray-900 dark:bg-[#111] text-white flex flex-col justify-between relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>

            <div>
              <h3 className="text-2xl font-bold mb-2">Get In Touch</h3>
              <p className="text-slate-400 mb-10 text-sm leading-relaxed">
                I partner with businesses that want more than just tasks automated — they want transformation. My systems streamline operations, sharpen execution, and give you the freedom to operate at a higher level.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mr-4 border border-orange-500/20 shrink-0">
                    <Mail className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Email Address</p>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-white hover:text-primary transition-colors font-medium">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center mr-4 border border-orange-500/20 shrink-0">
                    <Phone className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Phone</p>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-white hover:text-primary transition-colors font-medium">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5">
              <p className="text-sm text-slate-500 italic">"Ready to Automate Your Operations?"</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 bg-white dark:bg-[#0f0f0f]">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Your Details</h3>
            
            {submitted ? (
              <div className="h-64 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-4 border border-green-500/30">
                  <Send size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                    <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-[#050505] border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm"
                        placeholder="John Doe"
                    />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-[#050505] border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all text-sm"
                        placeholder="john@example.com"
                    />
                    </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase mb-2">Subject / Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-[#050505] border border-gray-200 dark:border-white/10 rounded-lg text-gray-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:ring-1 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all resize-none text-sm"
                    placeholder="How can I help you automate?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-4 border border-transparent text-sm font-bold uppercase tracking-wider rounded-lg text-white dark:text-black bg-gradient-to-r from-orange-600 to-orange-500 hover:shadow-[0_4px_14px_0_rgba(237,192,1,0.39)] focus:outline-none transition-all duration-300 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:-translate-y-0.5'}`}
                >
                  {isSubmitting ? 'Sending...' : (
                      <>Contact Me <ArrowRight className="ml-2 h-4 w-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;