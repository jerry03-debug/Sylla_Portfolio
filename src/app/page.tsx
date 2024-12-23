'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ProfileSelector } from '../components/ProfileSelector';
import { Navbar } from '../components/Navbar';
import { profiles } from '../data/profiles';
import { themes } from '../styles/theme';
import { 
  UserCircleIcon, 
  AcademicCapIcon, 
  BriefcaseIcon, 
  EnvelopeIcon, 
  InformationCircleIcon,
  CommandLineIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  ChatBubbleBottomCenterTextIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { PopIn } from '../components/PopIn';
import { SkillBall } from '../components/SkillBall';
import { FaReact, FaGitlab,FaNode,FaAngular  } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';
import { SiJira } from 'react-icons/si';
import { VscAzureDevops } from "react-icons/vsc";
import { CertificationBadge } from '../components/CertificationBadge';
import { EducationCard } from '../components/EducationCard';
import { ContactForm } from '../components/ContactForm';

const defaultIcon = <CodeBracketIcon />;

const skillIcons: { [key: string]: React.ReactNode } = {
  'JavaScript': <CodeBracketIcon />,
  'Node': <FaNode size={52}/>,
  'Angular': <FaAngular size={52}/>,
  'TypeScript': <CodeBracketIcon />,
  'Python': <CommandLineIcon />,
  'Documentation': <DocumentTextIcon />,
  'Communication': <ChatBubbleBottomCenterTextIcon />,
  'Problem Solving': <WrenchScrewdriverIcon />,
  'React': <FaReact size={52} />,
  'PostgreSQL': <BiLogoPostgresql size={52}/>,
  'Microsoft Azure DevOps': <VscAzureDevops size={52}/>  ,
  'Jira': <SiJira size={52}/>,
  'GitLab': <FaGitlab size={52}/>,
};

export default function Home() {
  const [currentProfile, setCurrentProfile] = useState(profiles?.[0]?.id);
  const profile = profiles?.find(p => p?.id === currentProfile);
  const theme = themes?.[currentProfile as keyof typeof themes];

  if (!profile || !theme) return null;

  return (
    <main className="min-h-screen">
      <Navbar currentProfile={currentProfile} />
      <ProfileSelector 
        profiles={profiles}
        currentProfile={currentProfile} 
        setCurrentProfile={setCurrentProfile} 
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
              <div className="mb-8">                
                {/* Certifications */}
                {profile.certifications && profile.certifications.length > 0 && (
                  <div className="">
                    <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
                      {profile.certifications.map((cert, index) => (
                        <CertificationBadge
                          key={index}
                          title={cert.title}
                          url={cert.url}
                          date={cert.date}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Formation Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Formation</h2>
                {profile.education.map((edu, index) => (
                  <EducationCard
                    key={index}
                    school={edu.school}
                    degree={edu.degree}
                    field={edu.field}
                    period={edu.period}
                    level={edu.level || ""}
                    activities={edu.activities || ""}
                    logo={edu.logo}
                  />
                ))}
              </div>
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
          >
            <div className="flex items-center justify-center mb-12">
              <AcademicCapIcon className="w-8 h-8 mr-3" style={{ color: theme.primary }} />
              <h2 className="text-3xl font-bold" style={{ color: theme.primary }}>
                Compétences
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
              {profile.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillBall
                    icon={
                      <div className="w-full h-full text-white">
                        {skillIcons[skill] || defaultIcon}
                      </div>
                    }
                    name={skill}
                    color={theme.accent}
                  />
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
            
            <VerticalTimeline animate={true} lineColor={theme.primary}>
              {profile.experience.map((exp, index) => (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{ 
                    background: 'rgba(255, 255, 255, 0.95)',
                    boxShadow: '0 3px 0 ' + theme.accent,
                    borderRadius: '15px',
                    padding: '2rem',
                    visibility: 'visible',
                    opacity: 1
                  }}
                  contentArrowStyle={{ 
                    borderRight: '7px solid rgba(255, 255, 255, 0.95)',
                    visibility: 'visible',
                    opacity: 1
                  }}
                  date={exp.period}
                  dateClassName="text-gray-600 font-medium"
                  iconStyle={{ 
                    background: theme.primary, 
                    color: '#fff',
                    visibility: 'visible',
                    opacity: 1
                  }}
                  icon={exp.logo ? (
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={24}
                        height={24}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  ) : (
                    <BriefcaseIcon className="w-5 h-5 text-white" />
                  )}
                  visible={true}
                >
                  <PopIn delay={index * 0.2}>
                    <div className="relative z-10">
                      <h3 
                        className="text-xl font-bold mb-1"
                        style={{ color: theme.secondary }}
                      >
                        {exp.position}
                      </h3>
                      <h4 
                        className="text-lg mb-2"
                        style={{ color: theme.primary }}
                      >
                        {exp.company}
                      </h4>
                      {exp.type && (
                        <p className="text-gray-600 mb-1">{exp.type}</p>
                      )}
                      {exp.location && (
                        <p className="text-gray-600 mb-2">{exp.location}</p>
                      )}
                      {exp.description && (
                        <p className="text-gray-600 leading-relaxed mt-2">
                          {exp.description}
                        </p>
                      )}
                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {exp.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-sm rounded-full"
                              style={{ 
                                backgroundColor: `${theme.accent}20`,
                                color: theme.primary
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </PopIn>
                </VerticalTimelineElement>
              ))}
            </VerticalTimeline>
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
          >
            <div className="flex items-center justify-center mb-12">
              <EnvelopeIcon className="w-8 h-8 mr-3" style={{ color: theme.primary }} />
              <h2 className="text-3xl font-bold" style={{ color: theme.primary }}>
                Contact
              </h2>
            </div>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
