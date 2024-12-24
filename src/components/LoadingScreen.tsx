import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb } from 'react-icons/fa'; // Light bulb icon
import { FaBatteryEmpty, FaBatteryQuarter, FaBatteryHalf, FaBatteryThreeQuarters, FaBatteryFull } from 'react-icons/fa'; // Battery icons

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
    setTimeout(onLoadingComplete, 1000); // Delay before transitioning to the main page
  };

  // Function to determine which battery icon to display based on progress
  const getBatteryIcon = () => {
    if (progress < 25) return <FaBatteryEmpty className="text-gray-500 text-6xl" />;
    if (progress < 50) return <FaBatteryQuarter className="text-yellow-500 text-6xl" />;
    if (progress < 75) return <FaBatteryHalf className="text-yellow-400 text-6xl" />;
    if (progress < 100) return <FaBatteryThreeQuarters className="text-green-400 text-6xl" />;
    return <FaBatteryFull className="text-green-500 text-6xl" />;
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
      {/* Light Bulb */}
      <motion.div
        className="flex flex-col items-center justify-center mb-8"
        style={{
          position: 'relative',
          fontSize: '100px', // Adjust size of the light bulb
          color: progress === 100 ? '#FFD700' : '#444', // Glow when full
          textShadow: progress === 100 ? '0 0 20px #FFD700, 0 0 40px #FFD700' : 'none', // Correct glow effect
          transition: 'color 0.5s ease-in-out, text-shadow 0.5s ease-in-out',
        }}
      >
        <FaLightbulb />
      </motion.div>

      {/* Battery Progress */}
      <div className="flex items-center justify-center mt-4">
        {getBatteryIcon()}
      </div>

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
            className={`w-20 h-10 rounded-full flex items-center p-2 shadow-md ${
              isDayMode ? 'bg-yellow-500' : 'bg-gray-700'
            }`}
            initial={{ backgroundColor: 'gray' }}
            animate={{
              backgroundColor: isDayMode ? '#FFD700' : '#374151',
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="w-8 h-8 bg-white rounded-full shadow"
              layout
              transition={{
                type: 'spring',
                stiffness: 700,
                damping: 30,
              }}
              style={{
                transform: isDayMode ? 'translateX(36px)' : 'translateX(0)',
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
