import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';

import Navbar from './components/Navbar';
import { ReactLenis } from 'lenis/react';
import { Suspense, lazy } from 'react';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor';
import WhatsAppButton from './components/WhatsAppButton';
import Hero from './sections/Hero';
import About from './sections/About';

// Lazy-loaded routes for performance (below-the-fold content)
const Experience = lazy(() => import('./sections/Experience'));
const Skills = lazy(() => import('./sections/Skills'));
const Achievements = lazy(() => import('./sections/Achievements'));
const Projects = lazy(() => import('./sections/Projects'));
const Contact = lazy(() => import('./sections/Contact'));

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider>
      <CustomCursor />
      <AnimatePresence>
        {loading && <Preloader finishLoading={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothTouch: true }}>
          <div className="font-sans antialiased text-zinc-900 dark:text-zinc-50 min-h-screen flex flex-col selection:bg-indigo-500/30">
            <Navbar />
            <WhatsAppButton />
            <main className="flex-grow flex flex-col w-full overflow-hidden">
              <Hero />
              <About />

              {/* Suspense boundary defers rendering, drastically cutting initial JS bundle size */}
              <Suspense fallback={<div className="py-24 text-center text-zinc-400 dark:text-zinc-600 animate-pulse font-medium tracking-widest text-sm uppercase">Loading Content...</div>}>
                <Experience />
                <Skills />
                <Achievements />
                <Projects />
                <Contact />
              </Suspense>
            </main>

            <footer className="py-8 text-center border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                © {new Date().getFullYear()} Chandra Sekhar.
              </p>
            </footer>
          </div>
        </ReactLenis>
      )}
    </ThemeProvider>
  );
}

export default App;
