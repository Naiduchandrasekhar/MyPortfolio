import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../utils/data';

const WhatsAppButton = () => {
  // Extract strictly numbers from the whatsapp string
  const phone = personalInfo.whatsapp.replace(/[^0-9]/g, '');
  const message = encodeURIComponent("Hello Chandra Sekhar! I checked out your portfolio and would like to connect.");
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-[90] flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#1ebd5a] hover:shadow-[#25D366]/40 transition-colors focus:outline-none group"
      initial={{ scale: 0, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.5 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Contact Me on WhatsApp"
    >
      {/* Subtle ping animation for attention */}
      <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-[#25D366]"></div>

      {/* Tooltip on hover (desktop only) */}
      <div className="absolute right-full mr-4 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-sm font-bold py-2 px-4 rounded-xl shadow-xl opacity-0 invisible md:group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap pointer-events-none transform translate-x-4 md:group-hover:translate-x-0">
        Chat with me!
        {/* Triangle pointer */}
        <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 border-8 border-transparent border-l-white dark:border-l-zinc-800"></div>
      </div>

      <FaWhatsapp className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
    </motion.a>
  );
};

export default WhatsAppButton;
