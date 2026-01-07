import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProject from './components/FeaturedProject';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Tools from './components/Tools';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-slate-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProject />
        <Skills />
        <Experience />
        <Tools />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;