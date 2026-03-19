import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../utils/data';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full md:block hidden"></div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full md:hidden"></div>
        </motion.div>

        <div className="relative md:mx-auto md:w-[85%]">
          {/* Animated Central Vertical Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-[11px] md:left-0 top-2 w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"
          />

          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30, filter: "blur(5px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.2, type: "spring", stiffness: 100 }}
              className="mb-14 relative pl-10 md:pl-12"
            >
              {/* Animated Timeline marker */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 300 }}
                className="absolute w-6 h-6 bg-indigo-500 rounded-full -left-[1px] md:-left-[11px] top-1.5 border-4 border-zinc-100 dark:border-zinc-950 shadow-md shadow-indigo-500/50"
              />

              <motion.div 
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="glass p-8 rounded-3xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-shadow duration-300 border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-3">
                  <div>
                    <h3 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-100">{exp.role}</h3>
                    <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-bold text-lg mt-1.5">
                      <FiBriefcase className="mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col text-sm font-semibold text-zinc-500 dark:text-zinc-400 gap-2 md:items-end">
                    <div className="flex items-center bg-zinc-100 dark:bg-zinc-800 px-3.5 py-1.5 rounded-full w-fit shadow-sm border border-zinc-200 dark:border-zinc-700">
                      <FiCalendar className="mr-2 text-indigo-500" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center mt-1 text-xs">
                      <FiMapPin className="mr-1 text-purple-500" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="my-7">
                  <h4 className="font-bold text-zinc-800 dark:text-zinc-200 mb-4 uppercase tracking-wider text-sm">Key Contributions</h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                        className="flex items-start"
                      >
                        <span className="text-indigo-500 font-bold mr-3 mt-0.5 transform scale-150">•</span>
                        <span className="text-zinc-600 dark:text-zinc-400 font-medium leading-relaxed">{resp}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800/60">
                  <h4 className="font-bold text-zinc-800 dark:text-zinc-200 mb-4 uppercase tracking-wider text-sm">Technologies</h4>
                  <div className="flex flex-wrap gap-2.5">
                    {exp.techStack.map((tech, i) => (
                      <motion.span 
                        key={i} 
                        whileHover={{ scale: 1.05, backgroundColor: "#6366f1", color: "#fff" }}
                        className="px-3.5 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg text-sm font-semibold border border-zinc-200 dark:border-zinc-700 cursor-default transition-colors duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
