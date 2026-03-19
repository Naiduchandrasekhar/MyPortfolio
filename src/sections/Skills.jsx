import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { skills } from '../utils/data';

const Skills = () => {
  // We can show circular progress for variety as requested by prompt
  const skillLevels = {
    "HTML": 95,
    "CSS": 90,
    "JavaScript": 85,
    "React.js": 90,
    "Redux Toolkit": 85,
    "Tailwind CSS": 95,
    "Bootstrap": 80,
    "Git/GitHub": 85,
    "Jira/Monday.com": 80,
    "Jenkins": 75,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  // Memoize the mapped elements to prevent recalculating math operations on re-renders
  const renderedSkills = useMemo(() => {
    return skills.map((skill, index) => {
      const level = skillLevels[skill.name] || 80;
      const strokeDashoffset = 283 - (283 * level) / 100; // 2 * pi * r = 2 * 3.14 * 45 = ~283

      return (
        <motion.div 
          key={index}
          variants={itemVariants}
          whileHover={{ y: -5, scale: 1.05 }}
          className="flex flex-col items-center justify-center p-6 bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-700/50 group hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition-all cursor-default"
        >
          <div className="relative w-24 h-24 mb-4 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90 pointer-events-none" viewBox="0 0 100 100">
              {/* Background circle */}
              <circle 
                cx="50" cy="50" r="45" fill="none" 
                className="stroke-zinc-100 dark:stroke-zinc-700" strokeWidth="8" 
              />
              {/* Progress circle */}
              <motion.circle 
                cx="50" cy="50" r="45" fill="none" 
                className="stroke-indigo-500 drop-shadow-md" 
                strokeWidth="8" strokeLinecap="round"
                initial={{ strokeDashoffset: 283 }}
                whileInView={{ strokeDashoffset }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                style={{ strokeDasharray: 283 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <skill.icon className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
            </div>
          </div>
          <h3 className="text-zinc-800 dark:text-zinc-200 font-bold text-center mb-1">{skill.name}</h3>
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">{level}%</span>
        </motion.div>
      );
    });
  }, [skills]); // Only recompute if the skills array payload changes

  return (
    <section id="skills" className="py-24 bg-zinc-100/50 dark:bg-zinc-900/50 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-gradient">Skills</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full md:block hidden"></div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full md:hidden"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {renderedSkills}
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Skills);
