'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PopInProps {
  children: ReactNode;
  delay?: number;
}

export const PopIn = ({ children, delay = 0 }: PopInProps) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ 
        scale: 1, 
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
          delay: delay * 0.1
        }
      }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {children}
    </motion.div>
  );
};
