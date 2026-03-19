import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ finishLoading }) => {
  useEffect(() => {
    // Determine wait time or just simulate 2s load
    const timer = setTimeout(() => {
      finishLoading();
    }, 2000);
    return () => clearTimeout(timer);
  }, [finishLoading]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950 flex-col"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <div className="relative">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.5, 1], rotate: [360, 180, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-16 h-16 border-4 border-purple-500/30 border-b-purple-500 rounded-full absolute top-0 left-0"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 text-xl font-bold tracking-widest text-white flex items-center"
      >
        <span className="text-gradient">CHANDRA SEKHAR</span>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
