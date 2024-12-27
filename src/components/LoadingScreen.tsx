import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { updateVisitorCount } from '../utils/firebaseutils';

/**
 * Displays a loading screen with a counting animation for the visitor count.
 */
const LoadingScreen = () => {
  const [visitorCount, setVisitorCount] = useState<number | null>(null); // Final count
  const [currentCount, setCurrentCount] = useState<number | null>(null); // Intermediate count
  const [loading, setLoading] = useState(true);
  const [showIncrement, setShowIncrement] = useState(false); // Control the +1 animation

  useEffect(() => {
    let isMounted = true;

    const fetchVisitorCount = async () => {
      try {
        if (isMounted) {
          const newCount = await updateVisitorCount(); // Fetch and update count
          setCurrentCount(newCount - 1); // Start at the current count - 1
          setVisitorCount(newCount); // Set the final count
          setLoading(false);
        }
      } catch (error) {
        console.error('Error updating visitor count:', error);
        if (isMounted) setLoading(false);
      }
    };

    fetchVisitorCount();

    return () => {
      isMounted = false; // Prevent updates if unmounted
    };
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-white text-black">
      {loading ? (
        <h1 className="text-4xl font-bold text-red-500">Loading...</h1>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to <span className="text-red-500">My Portfolio</span>
          </h1>
          <div className="relative text-5xl font-extrabold mt-4">
            {/* First animation: Count from 1 to current count - 1 */}
            {visitorCount !== null && (
              <CountUp
                start={1}
                end={currentCount!} // Animate to current count - 1
                duration={2}
                onEnd={() => {
                  // After first animation ends, show +1 animation
                  setShowIncrement(true);
                  setTimeout(() => {
                    setCurrentCount(visitorCount); // Update to final count
                    setShowIncrement(false); // Hide +1 animation
                  }, 800); // 800ms delay for +1 animation
                }}
              />
            )}

            {/* Overlay +1 Animation */}
            {showIncrement && (
              <span
                className="absolute top-0 right-0 text-red-500 text-3xl animate-bounce"
                style={{ transform: 'translate(50%, -50%)' }}
              >
                +1
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
