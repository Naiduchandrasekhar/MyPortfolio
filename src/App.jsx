import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {loading && <Preloader finishLoading={() => setLoading(false)} />}
      </AnimatePresence>
      
      {!loading && (
        <div className="font-sans antialiased text-zinc-900 dark:text-zinc-50 min-h-screen flex flex-col selection:bg-indigo-500/30">
          <Navbar />
          <main className="flex-grow flex flex-col w-full overflow-hidden">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>
          
          <footer className="py-8 text-center border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 transition-colors">
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              © {new Date().getFullYear()} Chandra Sekhar. Crafted with React.js & Tailwind CSS.
            </p>
          </footer>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
