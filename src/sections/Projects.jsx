import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../utils/data';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full md:block hidden"></div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full md:hidden"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -10 }}
              className="glass rounded-3xl overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300 border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-900 flex flex-col h-full"
            >
              {/* Project Image Container */}
              <div className="relative overflow-hidden h-72">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Image Scale on Hover with Native Lazy Loading */}
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transform origin-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Floating overlay chip on hover */}
                <div className="absolute top-4 right-4 z-20 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="bg-white/90 dark:bg-zinc-900/90 backdrop-blur text-indigo-600 dark:text-indigo-400 font-bold px-3 py-1 rounded-full text-xs shadow-md">
                    Featured
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow relative z-20 bg-white dark:bg-zinc-900">
                <h3 className="text-2xl font-extrabold mb-3 text-zinc-900 dark:text-zinc-50 group-hover:text-indigo-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-8 flex-grow leading-relaxed font-medium">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-bold px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-lg border border-zinc-200 dark:border-zinc-700 transition-colors cursor-default select-none shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-5 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <motion.a 
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                  >
                    <FiExternalLink className="w-5 h-5 stroke-[2.5]" /> Live Demo
                  </motion.a>
                  
                  <motion.a 
                    whileHover={{ scale: 1.05, x: 2 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/Naiduchandrasekhar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-bold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <FiGithub className="w-5 h-5 stroke-[2.5]" /> Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Projects);
