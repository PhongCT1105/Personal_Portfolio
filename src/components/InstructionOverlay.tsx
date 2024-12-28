import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import heroIcon from '../assets/Hero.png'; // Replace with your correct path

const HeroInstruction = () => {
  const [currentSection, setCurrentSection] = useState('');
  const [showInstruction, setShowInstruction] = useState(true);

  const instructions: Record<string, string> = {
    home: '🏠 Welcome to my portfolio! Scroll to explore.',
    about: '🧙‍♂️ Who am I? Just a tech wizard trying to make magic happen.',
    skills:
      '💻 Brace yourself! These skills might blow your mind (or your browser).',
    projects: '✨ Here’s where the magic happens. My creations await your awe!',
    visualize:
      '📊 Behold my analytics! Should I sprinkle some machine learning on this?',
    contact: '📬 Want to chat? Let’s make some tech happen together.',
  };

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSection(entry.target.id);
          setShowInstruction(true);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is in view
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Hide the instruction after 5 seconds
  useEffect(() => {
    if (showInstruction) {
      const timer = setTimeout(() => setShowInstruction(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [currentSection, showInstruction]);

  return (
    <motion.div
      className="fixed bottom-20 right-10 flex items-center space-x-4 z-50"
      initial={{ x: '100%', opacity: 0 }}
      animate={
        showInstruction ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }
      }
      exit={{ x: '100%', opacity: 0 }}
      transition={{ type: 'spring', stiffness: 50, damping: 10 }}
    >
      {/* Hero Icon */}
      <motion.img
        src={heroIcon}
        alt="Hero Icon"
        className="w-16 h-16"
        initial={{ rotate: 0 }}
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{
          repeat: Infinity,
          repeatType: 'reverse',
          duration: 1.5,
        }}
      />

      {/* Speech Bubble */}
      {currentSection && (
        <div className="bg-white shadow-lg rounded-lg p-4 max-w-sm">
          <p className="text-gray-800">{instructions[currentSection]}</p>
        </div>
      )}
    </motion.div>
  );
};

export default HeroInstruction;
