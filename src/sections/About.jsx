import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../utils/data';

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-100/50 dark:bg-zinc-950 transition-colors relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="md:text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full md:block hidden"></div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full md:hidden"></div>
        </motion.div>

        <div className="glass p-10 md:p-14 rounded-3xl shadow-xl relative overflow-hidden group border border-white/40 dark:border-zinc-800">
          {/* Decorative subtle background circle */}
          <motion.div
            animate={{
              rotate: [0, 90, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -top-32 -right-32 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-400/5 rounded-full blur-3xl"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 space-y-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium"
          >
            <p>
              I am a passionate <strong className="text-indigo-600 dark:text-indigo-400">Front End Developer</strong> with {personalInfo.experience} years of professional experience, currently shaping modern web experiences at <strong className="text-zinc-900 dark:text-zinc-100">Innocito</strong>.
            </p>
            <p>
              My expertise lies in building scalable, consumer-facing web platforms utilizing <strong className="text-zinc-900 dark:text-zinc-100">React.js</strong> and state management libraries like <strong className="text-zinc-900 dark:text-zinc-100">Redux Toolkit</strong>. I have a strong track record of crafting sophisticated features—from comprehensive booking workflows to deep integrations with Google Maps APIs.
            </p>
            <p>
              Beyond just writing code, I focus heavily on delivering seamless, cross-browser compatible, and perfectly responsive user interfaces. My goal is always to merge technical excellence with an intuitive and visually stunning user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-4 relative z-10 justify-center md:justify-start"
          >
            {['React Framework', 'State Management', 'UI/UX Polish', 'API Integrations'].map((trait, i) => (
              <span key={i} className="px-5 py-2 rounded-full border border-indigo-200 dark:border-indigo-900/40 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 font-semibold text-sm shadow-sm cursor-default hover:bg-indigo-100 dark:hover:bg-indigo-900/40 transition-colors">
                {trait}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
