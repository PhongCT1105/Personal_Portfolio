import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}) => {
  const messages = ['Welcome', 'to', 'my', 'Personal Portfolio', 'Enjoy!'];
  const [currentMessage, setCurrentMessage] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => {
        if (prev >= messages.length - 1) {
          clearInterval(messageInterval);
          setIsExiting(true);
          setTimeout(onLoadingComplete, 1000); // Align with animation duration
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(messageInterval);
  }, [messages.length, onLoadingComplete]);

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center h-screen px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ff7eb3, #ff758c, #fd5e53)',
      }}
      initial={{ y: 0 }}
      animate={isExiting ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {/* Morphing Background */}
      <motion.div
        className="absolute inset-0 w-full h-full z-[-1]"
        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
        animate={{ clipPath: 'circle(150% at 50% 50%)' }}
        transition={{
          duration: 5,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        style={{
          background: 'linear-gradient(135deg, #ff7eb3, #ff758c, #fd5e53)',
        }}
      ></motion.div>

      {/* Particle Animation */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            y: [0, -20, 0],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <motion.h1
        className="text-white font-extrabold tracking-wide text-center"
        style={{
          fontFamily: 'Roboto, sans-serif',
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          lineHeight: '1.2',
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'mirror',
        }}
        key={currentMessage}
      >
        {messages[currentMessage]}
      </motion.h1>
    </motion.div>
  );
};

export default LoadingScreen;
