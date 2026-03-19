import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../utils/data';
import { FiArrowDown } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Hero = () => {
  // Staggered text animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100, damping: 20 }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background aesthetic blobs with continuous idle animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] bg-indigo-500/20 dark:bg-indigo-600/10 rounded-full mix-blend-multiply filter blur-[100px]"
        ></motion.div>

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] right-[10%] w-[30rem] h-[30rem] bg-purple-500/20 dark:bg-purple-600/10 rounded-full mix-blend-multiply filter blur-[100px]"
        ></motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-center max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block py-1.5 px-5 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md text-indigo-700 dark:text-indigo-300 font-semibold text-sm mb-6 border border-zinc-200 dark:border-zinc-800 shadow-sm"
          >
            Welcome to my digital space
          </motion.span>

          <div className="overflow-hidden">
            <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-zinc-900 dark:text-zinc-50">
              Hi, I'm <span className="text-gradient hover:scale-[1.02] transition-transform inline-block cursor-default select-none group">
                {personalInfo.name}
              </span>
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-600 dark:text-zinc-300 mb-6">
              {personalInfo.role}
            </motion.h2>
          </div>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto md:mx-0 mb-10 leading-relaxed font-medium">
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5"
          >
            <Link
              to="projects" smooth={true} duration={500} offset={-80}
              className="group relative px-8 py-3.5 rounded-full bg-indigo-600 text-white font-medium overflow-hidden cursor-pointer shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 w-full sm:w-auto text-center"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 w-full h-full transform scale-0 rounded-full bg-white/20 group-hover:scale-150 transition-transform duration-500 ease-out" />
              <span className="relative z-10 flex items-center justify-center">View My Work</span>
            </Link>

            <Link
              to="contact" smooth={true} duration={500} offset={-80}
              className="group px-8 py-3.5 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-zinc-100 font-medium hover:border-indigo-500 dark:hover:border-indigo-500 transition-all cursor-pointer glow-effect w-full sm:w-auto text-center hover:shadow-xl"
            >
              <span className="relative z-10 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">Contact Me</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator down */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.5, duration: 1 }, y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" } }}
      >
        <Link to="about" smooth={true} duration={500} offset={-80}>
          <div className="w-12 h-12 rounded-full bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-indigo-500 transition-colors shadow-lg hover:shadow-indigo-500/20">
            <FiArrowDown className="w-5 h-5" />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
