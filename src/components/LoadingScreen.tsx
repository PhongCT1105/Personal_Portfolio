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
  }, [messages.length, onLoadingComplete]); // Include messages.length explicitly

  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-black"
      initial={{ y: 0 }}
      animate={isExiting ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <motion.h1
        className="text-white text-5xl sm:text-7xl font-extrabold tracking-wide"
        style={{ fontFamily: 'Roboto, sans-serif' }}
        initial={{ opacity: 1 }}
        animate={isExiting ? { opacity: 0 } : { opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {messages[currentMessage]}
      </motion.h1>
    </motion.div>
  );
};

export default LoadingScreen;
