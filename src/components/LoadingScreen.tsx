import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import Confetti from 'react-confetti';
import { updateVisitorCount } from '../utils/firebaseUtils';

// Container variants for the entire screen
const containerVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

// Reusable text variants for smooth text transitions
const textVariants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.4 } },
};

interface LoadingScreenProps {
  onDone: () => void; // Callback to inform the parent when done
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onDone }) => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  // 1) "Welcome to My Website" → 2) "Loading" → 3) "Total Visitors" → 4) Slide up & done
  const [stage, setStage] = useState<1 | 2 | 3 | 4>(1);

  // Flags for +1 and confetti
  const [showPlusOne, setShowPlusOne] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  // Timers for staged flow
  useEffect(() => {
    let isMounted = true;

    // Show "Welcome" for ~1.5s, then move to "Loading"
    const welcomeTimer = setTimeout(() => {
      if (isMounted) setStage(2);
    }, 1500);

    // While on stage 2, show spinner for a short time, then fetch count
    // After we fetch, we go to stage 3
    const fetchTimer = setTimeout(async () => {
      if (isMounted) {
        try {
          const newCount = await updateVisitorCount();
          setVisitorCount(newCount);
        } catch (error) {
          console.error('Error updating visitor count:', error);
        } finally {
          setStage(3);
        }
      }
    }, 3000);

    return () => {
      isMounted = false;
      clearTimeout(welcomeTimer);
      clearTimeout(fetchTimer);
    };
  }, []);

  // Once stage=3 (we have a visitor count), show +1, confetti, etc.
  useEffect(() => {
    if (stage === 3 && visitorCount !== null) {
      // 1) Show +1 for ~1.5s
      setShowPlusOne(true);
      setTimeout(() => setShowPlusOne(false), 1500);

      // 2) Show confetti for ~3s
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);

      // 3) Slide up after ~3.5s
      setTimeout(() => {
        setStage(4);
      }, 3500);
    }
  }, [stage, visitorCount]);

  // Wait until exit animation finishes to call onDone()
  const handleExitComplete = () => {
    if (stage === 4) {
      onDone();
    }
  };

  // Style your text in black & red
  const getStyledText = (s: number) => {
    if (s === 1) {
      return (
        <>
          <span className="text-black">Welcome to </span>
          <span className="text-red-500">My Website</span>
        </>
      );
    }
    if (s === 2) {
      // "Loading" in black, "..." in red
      return (
        <>
          <span className="text-black">Loading</span>{' '}
          <span className="text-red-500">...</span>
        </>
      );
    }
    // Stage 3
    return (
      <>
        <span className="text-black">Total </span>
        <span className="text-red-500">Visitors</span>
      </>
    );
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {stage !== 4 && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 flex flex-col justify-center items-center bg-white text-black z-50"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Confetti */}
          {showConfetti && <Confetti />}

          {/* Smooth Text Transitions */}
          <div
            style={{
              marginBottom: '1rem',
              fontSize: '2rem',
              fontWeight: 'bold',
            }}
          >
            <motion.span
              key={stage}
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{ display: 'inline-block' }}
            >
              {getStyledText(stage)}
            </motion.span>
          </div>

          {/* Stage 2: Circular rotating spinner */}
          {stage === 2 && (
            <motion.div
              className="loader-circle my-4"
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              style={{
                width: '64px',
                height: '64px',
                border: '8px solid #f3f3f3',
                borderTop: '8px solid #EF4444', // Tailwind's red-500
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }}
            />
          )}

          {/* Stage 3: Show the count-up animation */}
          {stage === 3 && (
            <motion.div
              variants={textVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-5xl font-extrabold mt-4 relative inline-block"
            >
              {visitorCount !== null && (
                <CountUp
                  start={0}
                  end={visitorCount}
                  duration={1.5}
                  separator=","
                />
              )}

              {/* +1 indicator (conditionally shown) */}
              <AnimatePresence>
                {showPlusOne && (
                  <motion.div
                    key="+1"
                    className="absolute top-0 right-[-2.5rem] text-green-500 text-3xl font-bold"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -20 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 1 }}
                  >
                    +1
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
