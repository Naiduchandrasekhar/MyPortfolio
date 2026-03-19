import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../utils/data';
import { FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background aesthetic blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] bg-indigo-500/20 dark:bg-indigo-600/10 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[30%] right-[10%] w-[30rem] h-[30rem] bg-purple-500/20 dark:bg-purple-600/10 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-[40%] w-[30rem] h-[30rem] bg-pink-500/20 dark:bg-pink-600/10 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block py-1 px-4 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold text-sm mb-6 border border-indigo-200 dark:border-indigo-800/50 shadow-sm"
          >
            Welcome to my portfolio
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
            Hi, I'm <span className="text-gradient hover:scale-[1.02] transition-transform inline-block cursor-default">{personalInfo.name}</span>
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-600 dark:text-zinc-300 mb-6">
            {personalInfo.role}
          </h2>
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed font-medium">
            {personalInfo.tagline}
          </p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
          >
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-8 py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-all transform hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/30 w-full sm:w-auto text-center cursor-pointer"
            >
              View My Work
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-8 py-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:border-indigo-500 dark:hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 text-zinc-900 dark:text-zinc-100 font-medium transition-all transform hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto text-center cursor-pointer glow-effect"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator down */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <Link to="about" smooth={true} duration={500} offset={-80}>
          <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-zinc-500 hover:text-indigo-500 hover:border-indigo-500 transition-colors shadow-md">
            <FiArrowDown className="w-5 h-5" />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
