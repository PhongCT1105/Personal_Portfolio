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
    const fetchVisitorCount = async () => {
      try {
        const newCount = await updateVisitorCount(); // Fetch and update count
        setCurrentCount(newCount - 1); // Start at the current count - 1
        setVisitorCount(newCount); // Set the final count
        setLoading(false); // End loading
      } catch (error) {
        console.error('Error updating visitor count:', error);
        setLoading(false);
      }
    };

    fetchVisitorCount();
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
      {loading ? (
        <h1 className="text-4xl font-bold">Loading...</h1>
      ) : (
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
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
                  setTimeout(() => setCurrentCount(visitorCount), 800); // Update to final count
                }}
              />
            )}

            {/* Overlay +1 Animation */}
            {showIncrement && (
              <span
                className="absolute top-0 right-0 text-green-500 text-3xl animate-bounce"
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
