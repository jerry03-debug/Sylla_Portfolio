'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface EducationCardProps {
  school: string;
  degree: string;
  field: string;
  period: string;
  level: string;
  activities: string;
  logo?: string;
}

export const EducationCard = ({ school, degree, field, period, level, activities, logo }: EducationCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="flex gap-4 items-start mb-8"
    >
      <div className="w-16 h-16 flex-shrink-0 bg-white/10 rounded-lg overflow-hidden">
        {logo ? (
          <Image
            src={logo}
            alt={school}
            width={84}
            height={84}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-black">
            {school?.charAt(0)}
          </div>
        )}
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold">{school}</h3>
        <p className="text-lg text-blue/90">{degree}, {field}</p>
        <p className="text-sm text-blue/60 mb-2">{period}</p>
        <p className="text-sm text-blue/80 mb-1">Niveau : {level}</p>
        <p className="text-sm text-blue/80">
          <span className="font-medium">Activités et associations : </span>
          {activities}
        </p>
      </div>
    </motion.div>
  );
};
