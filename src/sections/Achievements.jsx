import React from 'react';
import { motion } from 'framer-motion';
import { achievements } from '../utils/data';
import { FiAward, FiCalendar, FiStar, FiCheckCircle } from 'react-icons/fi';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-zinc-100/50 dark:bg-zinc-900/50 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Certifications & <span className="text-gradient">Achievements</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full md:block hidden"></div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full md:hidden"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass p-8 rounded-3xl relative overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex flex-col h-full"
            >
              {/* Background Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl transition-colors duration-500 ${item.isCertificate ? 'bg-indigo-400/20 dark:bg-indigo-500/10 group-hover:bg-indigo-400/30' : 'bg-yellow-400/20 dark:bg-yellow-500/10 group-hover:bg-yellow-400/30'}`}></div>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 relative z-10">
                <div className={`w-20 h-20 rounded-2xl text-white flex items-center justify-center flex-shrink-0 shadow-xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ${item.isCertificate ? 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-indigo-500/30' : 'bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 shadow-yellow-500/30'}`}>
                  {item.isCertificate ? <FiCheckCircle className="w-10 h-10" /> : <FiAward className="w-10 h-10" />}
                </div>
                
                <div className="pt-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-zinc-800 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex flex-wrap items-center justify-center sm:justify-start text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-4 gap-4">
                    <span className="flex items-center gap-1.5"><FiStar className={item.isCertificate ? "text-indigo-400" : "text-yellow-500"} /> {item.organization}</span>
                    <span className="flex items-center gap-1.5"><FiCalendar className="text-indigo-400" /> {item.date}</span>
                  </div>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
