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
    const [isReady, setIsReady] = useState(false);
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

    const phrases = [
      'Exploring the Universe...',
      'Traveling Beyond the Stars...',
      'Discovering New Worlds...',
      'Journey to Infinity...',
    ];

    const stars = useMemo(
      () =>
        Array.from({ length: 100 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              x: [0, Math.random() * 20 - 10],
              y: [0, Math.random() * 20 - 10],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          ></motion.div>
        )),
      []
    );

    useEffect(() => {
      const loadingTimer = setTimeout(() => {
        setShowStartButton(true);
        setIsReady(true);
      }, 5000);

      const phraseTimer = setTimeout(() => {
        setInterval(() => {
          setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 2000);
      }, 1500);

      return () => {
        clearTimeout(loadingTimer);
        clearTimeout(phraseTimer);
      };
    }, []);

    const handleStart = () => {
      onLoadingComplete();
    };

    return (
      <div className="relative h-screen w-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        {/* Static Background Stars */}
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
          className="absolute top-5 right-5 sm:top-5 sm:right-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Player
            autoplay
            loop
            src={rocketAnimation}
            style={{ width: '120px', height: '120px' }}
            className="sm:w-[180px] sm:h-[180px]"
          />
        </motion.div>

        {/* UFO Animation */}
        <motion.div
          className="absolute top-20 left-20 sm:top-20 sm:left-40"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <Player
            autoplay
            loop
            src={ufoAnimation}
            style={{ width: '100px', height: '100px' }}
            className="sm:w-[130px] sm:h-[130px]"
          />
        </motion.div>

        {/* Astronaut Animation */}
        <motion.div
          className="absolute bottom-10 right-20 sm:bottom-20 sm:right-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Player
            autoplay
            loop
            src={astronautAnimation}
            style={{ width: '120px', height: '120px' }}
            className="sm:w-[180px] sm:h-[180px]"
          />
        </motion.div>

        {/* Globe Animation */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.05, 1], opacity: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          >
            <Player
              autoplay
              loop
              src={globalAnimation}
              style={{ width: '240px', height: '240px' }}
              className="sm:w-[350px] sm:h-[350px]"
            />
          </motion.div>
        </div>

        {/* Loading Planet Animation */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 sm:bottom-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.2 }}
          >
            <Player
              autoplay
              loop
              src={planetAnimation}
              style={{ width: '130px', height: '130px' }}
              className="sm:w-[180px] sm:h-[180px]"
            />
          </motion.div>
        </div>

        {/* Dynamic Rotating Phrases */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black bg-opacity-30 rounded-md">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white animate-pulse">
              {phrases[currentPhraseIndex]}
            </h1>
            <p className="text-sm sm:text-lg md:text-xl text-gray-400 mt-4">
              {isReady ? 'Ready' : 'Loading, please wait.'}
            </p>
          </div>
        </motion.div>

        {/* Start Button */}
        {showStartButton && (
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 sm:bottom-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <motion.button
              onClick={handleStart}
              whileHover={{
                scale: 1.1,
                boxShadow: '0px 0px 10px rgba(255, 255, 255, 0.7)',
              }}
              className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg font-semibold text-white bg-blue-600 rounded-md shadow-md hover:bg-blue-500 focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300"
            >
              Start Journey
            </motion.button>
          </motion.div>
        )}
      </div>
    );
  };

  export default LoadingScreen;
