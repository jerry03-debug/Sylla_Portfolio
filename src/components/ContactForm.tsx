'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email';

gsap.registerPlugin(TextPlugin);

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const formRef = useRef<HTMLFormElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const texts = [
    'Contactez moi...',
    'Travaillons ensemble...',
    'Discutons de votre projet...'
  ];

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1
    });

    texts.forEach((text) => {
      tl.to(title, {
        duration: 1,
        text: text,
        ease: "none",
      });
      tl.to({}, { duration: 1 }); // Pause
    });

    return () => {
      tl.kill();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: '' });

    try {
      if (!formRef.current) return;

      const result = await emailjs.sendForm(
        emailConfig.serviceId,
        emailConfig.templateId,
        formRef.current,
        emailConfig.publicKey
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: 'Message envoyé avec succès !'
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue lors de l\'envoi du message.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const inputClasses = `
    w-full px-6 py-4 text-lg 
    bg-white 
    border-2 border-gray-300 
    rounded-lg 
    focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
    focus:outline-none 
    transition-colors 
    text-gray-800 
    placeholder-gray-500
  `;

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold mb-4 min-h-[60px] text-gray-800"
        />
        <p className="text-xl text-gray-600 mt-4">
          N&apos;hésitez pas à me contacter pour toute opportunité ou collaboration
        </p>

        <div className="flex justify-center items-center gap-8 mt-8">
          <motion.a
            href="mailto:syllamouhamed@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <MdEmail className="w-8 h-8" />
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/mouhamed-moustapha-sylla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin className="w-8 h-8" />
          </motion.a>

          <motion.a
            href="https://github.com/mouhamed1996"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="w-8 h-8" />
          </motion.a>
        </div>
      </div>

      <motion.form
        ref={formRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <input
              type="text"
              name="from_name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className={inputClasses}
              required
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <input
              type="email"
              name="reply_to"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              className={inputClasses}
              required
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Objet"
            className={inputClasses}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Votre message"
            rows={6}
            className={`${inputClasses} resize-none`}
            required
          />
        </motion.div>

        {status.message && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center p-4 rounded-lg ${
              status.type === 'success' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}
          >
            {status.message}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center"
        >
          <button
            type="submit"
            disabled={isLoading}
            className={`
              px-12 py-4 text-xl font-semibold 
              text-white 
              bg-gradient-to-r from-blue-600 to-blue-800 
              rounded-lg 
              hover:from-blue-700 hover:to-blue-900 
              transition-all duration-300 
              transform hover:scale-105 
              shadow-lg hover:shadow-xl
              disabled:opacity-50 disabled:cursor-not-allowed
              flex items-center gap-2
            `}
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </>
            ) : (
              'Envoyer'
            )}
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
};
