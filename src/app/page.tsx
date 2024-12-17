'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProfileSelector } from '../components/ProfileSelector';
import { Navbar } from '../components/Navbar';
import { profiles } from '../data/profiles';
import { themes } from '../styles/theme';
import { UserCircleIcon, AcademicCapIcon, BriefcaseIcon, EnvelopeIcon, InformationCircleIcon } from '@heroicons/react/24/outline';

export default function Home() {
  const [currentProfile, setCurrentProfile] = useState(profiles[0].id);
  const profile = profiles.find(p => p.id === currentProfile)!;
  const theme = themes[currentProfile as keyof typeof themes];

  return (
    <main className="min-h-screen">
      <Navbar currentProfile={currentProfile} />
      <ProfileSelector 
        currentProfile={currentProfile} 
        onProfileChange={setCurrentProfile} 
      />
      
      {/* Hero Section */}
      <section 
        id="hero"
        className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      >
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${theme.heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          animate={{
            y: [-20, 20],
          }}
          transition={{
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.4)', 
              backdropFilter: 'blur(2px)', 
            }}
          />
        </motion.div>

        {/* Content with Parallax */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-16 text-center relative z-10"
          style={{
            transform: "translateZ(0)",
          }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white"
            animate={{ y: [-5, 5] }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 5,
                ease: "easeInOut",
              },
            }}
          >
            {profile.name}
          </motion.h1>
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 text-gray-200"
            animate={{ y: [-4, 4] }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 6,
                ease: "easeInOut",
              },
            }}
          >
            {profile.title}
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-gray-100"
            animate={{ y: [-3, 3] }}
            transition={{
              y: {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 7,
                ease: "easeInOut",
              },
            }}
          >
            {profile.description}
          </motion.p>
        </motion.div>
      </section>

      {/* About Section */}
      <section 
        id="about"
        className="py-20"
        style={{ backgroundColor: theme.sectionBg.about }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center mb-12">
              <InformationCircleIcon className="w-8 h-8 mr-3" style={{ color: theme.primary }} />
              <h2 className="text-3xl font-bold" style={{ color: theme.primary }}>
                À propos
              </h2>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
              <p className="text-lg leading-relaxed" style={{ color: theme.text }}>
                {profile.description}
              </p>
              {profile.education && (
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4" style={{ color: theme.secondary }}>
                    Formation
                  </h3>
                  {profile.education.map((edu, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="font-medium" style={{ color: theme.primary }}>
                        {edu.institution}
                      </h4>
                      <p className="text-gray-600">{edu.degree}</p>
                      <p className="text-sm text-gray-500">{edu.period}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills"
        className="py-20"
        style={{ backgroundColor: theme.sectionBg.skills }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-center mb-12">
              <AcademicCapIcon className="w-8 h-8 mr-3" style={{ color: theme.primary }} />
              <h2 className="text-3xl font-bold" style={{ color: theme.primary }}>
                Compétences
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {profile.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl shadow-lg bg-white/90 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
                  style={{ borderLeft: `4px solid ${theme.accent}` }}
                >
                  <h3 className="font-semibold text-lg mb-2" style={{ color: theme.secondary }}>
                    {skill}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        id="experience"
        className="py-20"
        style={{ backgroundColor: theme.sectionBg.experience }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-12">
              <BriefcaseIcon className="w-8 h-8 mr-3" style={{ color: theme.primary }} />
              <h2 className="text-3xl font-bold" style={{ color: theme.primary }}>
                Expérience
              </h2>
            </div>
            <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
              {profile.experience.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-xl shadow-lg bg-white/90 backdrop-blur-sm transform transition-all duration-300 hover:shadow-xl"
                >
                  <h3 className="text-2xl font-bold mb-2" style={{ color: theme.secondary }}>
                    {exp.position}
                  </h3>
                  <h4 className="text-xl mb-4" style={{ color: theme.primary }}>
                    {exp.company}
                  </h4>
                  <p className="text-gray-600 mb-4">{exp.period}</p>
                  <p className="leading-relaxed" style={{ color: theme.text }}>
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section 
        id="contact"
        className="py-20"
        style={{ backgroundColor: theme.sectionBg.contact }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-12">
              <EnvelopeIcon className="w-8 h-8 mr-3" style={{ color: theme.primary }} />
              <h2 className="text-3xl font-bold" style={{ color: theme.primary }}>
                Contact
              </h2>
            </div>
            <div className="max-w-2xl mx-auto bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-8">
              <div className="space-y-4">
                <p className="text-lg" style={{ color: theme.text }}>
                  <span className="font-semibold">Email:</span> {profile.contact.email}
                </p>
                {profile.contact.phone && (
                  <p className="text-lg" style={{ color: theme.text }}>
                    <span className="font-semibold">Téléphone:</span> {profile.contact.phone}
                  </p>
                )}
                {profile.contact.linkedin && (
                  <p className="text-lg" style={{ color: theme.text }}>
                    <span className="font-semibold">LinkedIn:</span>{' '}
                    <a 
                      href={`https://${profile.contact.linkedin}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-blue-600 transition-colors duration-200"
                    >
                      {profile.contact.linkedin}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
