import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, skills } from '../utils/data';

const About = () => {
  return (
    <section id="about" className="py-24 bg-zinc-100/50 dark:bg-zinc-900/50 transition-colors relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full md:block hidden"></div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full md:hidden"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Summary Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 dark:text-zinc-100">Professional Summary</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                {personalInfo.summary}
              </p>
            </div>
            
            <div className="glass p-8 rounded-2xl border-l-4 border-l-indigo-500 hover:shadow-xl hover:shadow-indigo-500/10 transition-shadow">
              <h4 className="font-bold text-xl mb-4 dark:text-zinc-100">Key Contributions at Innocito</h4>
              <ul className="space-y-3">
                {[
                  "Developed reusable React components.",
                  "Managed global state with Redux Toolkit.",
                  "Integrated UI features (booking, filters, maps, auth).",
                  "Ensured responsive design and optimized performance."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-indigo-500 mr-2 font-bold">•</span>
                    <span className="text-zinc-600 dark:text-zinc-400 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Skills Grid Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 dark:text-zinc-100">Core Technologies</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
              {skills.map((skill, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-5 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-700 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all cursor-default group"
                >
                  <skill.icon className={`text-4xl mb-3 ${skill.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 text-center">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
