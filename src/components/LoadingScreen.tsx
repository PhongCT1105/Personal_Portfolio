import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}) => {
  const [progress, setProgress] = useState(0);
  const [isDayMode, setIsDayMode] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + 10;
      });
    }, 300);

    return () => clearInterval(progressInterval);
  }, []);

  const handleToggleMode = () => {
    setIsDayMode(!isDayMode);
    setTimeout(onLoadingComplete, 500); // Trigger loading complete when toggled
  };

  return (
    <motion.div
      className="relative flex flex-col items-center justify-center h-screen w-full px-4 overflow-hidden"
      style={{
        background: isDayMode
          ? 'linear-gradient(135deg, #87CEEB, #FFD700)'
          : 'linear-gradient(135deg, #1a1a2e, #16213e)',
        color: isDayMode ? 'black' : 'white',
      }}
      initial={{ y: 0, opacity: 1 }}
      animate={{ opacity: progress === 100 && isDayMode ? 0 : 1 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {/* Progress Bar */}
      <motion.div
        className="w-full max-w-md h-4 bg-gray-700 rounded-full overflow-hidden"
        style={{
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
        }}
      >
        <motion.div
          className="h-full bg-green-500"
          style={{
            boxShadow: '0 4px 15px rgba(34, 197, 94, 0.5)',
          }}
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: 'linear' }}
        ></motion.div>
      </motion.div>

      <motion.div
        className="text-center mt-6 font-semibold"
        style={{
          fontSize: 'clamp(1rem, 2.5vw, 2rem)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: progress === 100 ? 1 : 0 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
        }}
      >
        {progress === 100 ? 'Ready!' : `${progress}% Loading...`}
      </motion.div>

      {/* Day/Night Toggle */}
      {progress === 100 && (
        <motion.div
          className="flex items-center mt-8 cursor-pointer"
          onClick={handleToggleMode}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <motion.div
            className={`w-14 h-8 rounded-full flex items-center p-1 shadow-md ${
              isDayMode ? 'bg-yellow-500' : 'bg-gray-700'
            }`}
            initial={{ backgroundColor: 'gray' }}
            animate={{
              backgroundColor: isDayMode ? '#FFD700' : '#374151',
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-6 h-6 bg-white rounded-full shadow"
              layout
              transition={{
                type: 'spring',
                stiffness: 700,
                damping: 30,
              }}
              style={{
                transform: isDayMode ? 'translateX(24px)' : 'translateX(0)',
              }}
            >
              {isDayMode ? (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  🌞
                </motion.div>
              ) : (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  🌙
                </motion.div>
              )}
            </motion.div>
          </motion.div>
          <span className="ml-4 text-lg font-semibold">
            {isDayMode ? 'Day Mode' : 'Night Mode'}
          </span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default LoadingScreen;
