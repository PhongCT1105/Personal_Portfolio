import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import planetAnimation from '../assets/LoadingScreen/planet.json';
import rocketAnimation from '../assets/LoadingScreen/rocket.json';
import astronautAnimation from '../assets/LoadingScreen/astronot.json';
import ufoAnimation from '../assets/LoadingScreen/ufo.json';
import globalAnimation from '../assets/LoadingScreen/global.json';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [showStartButton, setShowStartButton] = useState(false);
  const [isReady, setIsReady] = useState(false); // Track when loading is ready

  // Memoize the stars to prevent re-rendering
  const stars = useMemo(() => {
    return Array.from({ length: 100 }, (_, i) => (
      <div
        key={i}
        className="absolute bg-white rounded-full animate-twinkle"
        style={{
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.5 + 0.5,
        }}
      ></div>
    ));
  }, []); // Generate stars only once

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowStartButton(true); // Show the start button after animations
      setIsReady(true); // Change the loading text to "Ready"
    }, 5000); // Simulate a 5-second loading time

    return () => clearTimeout(timer);
  }, []);

  const handleStart = () => {
    onLoadingComplete(); // Trigger the callback to navigate to the website
  };

  return (
    <div className="relative h-screen w-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Stars */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {stars}
      </motion.div>

      {/* Rocket Animation */}
      <motion.div
        className="absolute top-5 right-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Player
          autoplay
          loop
          src={rocketAnimation}
          style={{ width: 150, height: 150 }}
        />
      </motion.div>

      {/* UFO Animation */}
      <motion.div
        className="absolute top-20 left-40"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <Player
          autoplay
          loop
          src={ufoAnimation}
          style={{ width: 100, height: 100 }}
        />
      </motion.div>

      {/* Astronaut Animation */}
      <motion.div
        className="absolute bottom-20 right-40"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <Player
          autoplay
          loop
          src={astronautAnimation}
          style={{ width: 150, height: 150 }}
        />
      </motion.div>

      {/* Globe Animation */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <Player
            autoplay
            loop
            src={globalAnimation}
            style={{ width: 300, height: 300 }}
          />
        </motion.div>
      </div>

      {/* Loading Planet Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          <Player
            autoplay
            loop
            src={planetAnimation}
            style={{ width: 150, height: 150 }}
          />
        </motion.div>
      </div>

      {/* Centerpiece Text */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black bg-opacity-30 rounded-md">
          <h1 className="text-4xl md:text-6xl font-bold text-white animate-pulse">
            Exploring the Universe...
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mt-4">
            {isReady ? 'Ready' : 'Loading, please wait.'}
          </p>
        </div>
      </motion.div>

      {/* Isolated Start Button */}
      {showStartButton && (
        <motion.div
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <button
            onClick={handleStart}
            className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300"
          >
            Start Journey
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default LoadingScreen;
