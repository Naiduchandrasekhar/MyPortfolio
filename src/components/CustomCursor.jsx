import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // Smooth springs for the cursor ring
  const cursorX = useSpring(-100, { stiffness: 500, damping: 28 });
  const cursorY = useSpring(-100, { stiffness: 500, damping: 28 });

  // Slower springs for the ambient glow
  const glowX = useSpring(-500, { stiffness: 100, damping: 30 });
  const glowY = useSpring(-500, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      glowX.set(e.clientX - 192);
      glowY.set(e.clientY - 192);
    };

    const handleMouseOver = (e) => {
      // Check if we're hovering over a clickable element
      if (
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        e.target.closest('.cursor-pointer')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY, glowX, glowY]);

  // Don't render on mobile/touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) {
    return null;
  }

  return (
    <>
      {/* Outer tracking ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none rounded-full border border-indigo-500/80 z-[9999] hidden md:flex items-center justify-center mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
          borderColor: isHovering ? 'rgba(99, 102, 241, 0)' : 'rgba(99, 102, 241, 0.8)'
        }}
        transition={{ duration: 0.15 }}
      >
        <motion.div
          className="w-1.5 h-1.5 bg-indigo-400 rounded-full"
          animate={{ opacity: isHovering ? 0 : 1 }}
        />
      </motion.div>

      {/* Background ambient glow tracking cursor */}
      <motion.div
        className="fixed top-0 left-0 w-96 h-96 pointer-events-none rounded-full bg-indigo-500/10 dark:bg-indigo-500/10 filter blur-[100px] z-[0] hidden md:block mix-blend-screen"
        style={{ x: glowX, y: glowY }}
      />
    </>
  );
};

export default CustomCursor;
