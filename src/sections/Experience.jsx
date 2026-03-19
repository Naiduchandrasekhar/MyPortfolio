import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../utils/data';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  return (
    <section id="experience" className="py-24 transition-colors">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional <span className="text-gradient">Experience</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full md:block hidden"></div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full md:hidden"></div>
        </motion.div>

        <div className="relative border-l-2 border-indigo-200 dark:border-indigo-800/50 ml-4 md:ml-0 md:mx-auto md:w-3/4">
          {experience.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 relative pl-8 md:pl-10"
            >
              {/* Timeline marker */}
              <div className="absolute w-6 h-6 bg-indigo-500 rounded-full -left-[13px] top-1 border-4 border-white dark:border-zinc-950 shadow-sm"></div>

              <div className="glass p-8 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">{exp.role}</h3>
                    <div className="flex items-center text-indigo-600 dark:text-indigo-400 font-semibold text-lg mt-1">
                      <FiBriefcase className="mr-2" />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-col text-sm font-medium text-zinc-500 dark:text-zinc-400 gap-1 md:items-end">
                    <div className="flex items-center bg-zinc-100 dark:bg-zinc-800/50 px-3 py-1 rounded-full w-fit">
                      <FiCalendar className="mr-2" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center mt-1">
                      <FiMapPin className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <div className="my-6">
                  <h4 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-indigo-500 font-bold mr-2 mt-0.5">•</span>
                        <span className="text-zinc-600 dark:text-zinc-400 leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700/50">
                  <h4 className="font-semibold text-zinc-800 dark:text-zinc-200 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 rounded-md text-sm font-medium border border-indigo-100 dark:border-indigo-800/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
