import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../utils/data';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  return (
    <section id="projects" className="py-24 transition-colors">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full md:block hidden"></div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full md:hidden"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col h-full"
            >
              {/* Project Image Container */}
              <div className="relative overflow-hidden h-64">
                <div className="absolute inset-0 bg-indigo-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Project Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-3 dark:text-zinc-100 group-hover:text-indigo-500 transition-colors">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="text-xs font-semibold px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 rounded-md border border-zinc-200 dark:border-zinc-700 hover:border-indigo-400 dark:hover:border-indigo-500 transition-colors cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 mt-auto">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                  >
                    <FiExternalLink className="w-5 h-5" /> Live Demo
                  </a>
                  {/* GitHub link placeholder if needed */}
                  <a 
                    href="https://github.com/Naiduchandrasekhar" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                  >
                    <FiGithub className="w-5 h-5" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
