'use client';

import { motion } from 'framer-motion';
import { SiScrumalliance } from 'react-icons/si';

interface CertificationBadgeProps {
  title: string;
  url: string;
  date: string;
}

export const CertificationBadge = ({ title, url, date }: CertificationBadgeProps) => {
  return (
    <motion.a
      href={url}
      target="_blank"
    
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all text-black"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <SiScrumalliance className="w-8 h-8 text-black" />
      <div>
        <h3 className="font-medium text-primary">{title}</h3>
        <p className="text-sm text-gray-600">{date}</p>
      </div>
    </motion.a>
  );
};
