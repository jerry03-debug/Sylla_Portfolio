'use client';

import { useState } from 'react';
import Image from 'next/image';
import { profiles } from '../data/profiles';
import { motion, AnimatePresence } from 'framer-motion';

interface ProfileSelectorProps {
  currentProfile: string;
  onProfileChange: (profileId: string) => void;
}

export const ProfileSelector = ({ currentProfile, onProfileChange }: ProfileSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentProfileData = profiles.find(p => p.id === currentProfile)!;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg focus:outline-none"
        >
          <Image
            src={currentProfileData.avatar}
            alt={currentProfileData.name}
            width={40}
            height={40}
            className="object-cover"
          />
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {profiles.map((profile) => (
                <button
                  key={profile.id}
                  onClick={() => {
                    onProfileChange(profile.id);
                    setIsOpen(false);
                  }}
                  className="flex items-center w-full px-4 py-2 hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden mr-2">
                    <Image
                      src={profile.avatar}
                      alt={profile.name}
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-sm text-gray-700">{profile.name}</span>
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
