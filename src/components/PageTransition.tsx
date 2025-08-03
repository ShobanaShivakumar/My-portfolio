
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      rotateX: -15,
      y: 100,
    },
    in: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      y: 0,
    },
    out: {
      opacity: 0,
      scale: 1.2,
      rotateX: 15,
      y: -100,
    }
  };

  const pageTransition = {
    type: 'tween' as const,
    ease: [0.25, 0.46, 0.45, 0.94] as const,
    duration: 0.6
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="w-full min-h-screen"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
