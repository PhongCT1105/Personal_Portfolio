import { useState, useEffect } from 'react';
import Particle from './components/Particle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectShowcase from './components/ProjectShowcase';
import HeroInstruction from './components/InstructionOverlay';
import LoadingScreen from './components/LoadingScreen';
import { trackDurationViewTime } from './utils/firebaseUtils'; // Import duration tracking
import Visualize from './components/Visualize';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [startTime, setStartTime] = useState<number>(0);

  useEffect(() => {
    // Record the start time when the app is mounted
    const start = Date.now();
    setStartTime(start);

    // Track duration when the user navigates away or closes the tab
    const handleUnload = () => {
      const end = Date.now();
      const duration = Math.floor((end - start) / 1000); // Convert milliseconds to seconds
      if (duration > 0) {
        trackDurationViewTime('TotalWebsite', duration);
        console.log(`Total time spent on website: ${duration}s`);
      }
    };

    // Attach unload event listeners
    window.addEventListener('beforeunload', handleUnload);
    window.addEventListener('unload', handleUnload);

    return () => {
      // Cleanup event listeners on component unmount
      window.removeEventListener('beforeunload', handleUnload);
      window.removeEventListener('unload', handleUnload);
    };
  }, []);

  useEffect(() => {
    // Simulate a delay for loading screen (or remove for actual implementation)
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen /> // Display LoadingScreen while loading is true
      ) : (
        <>
          <Particle />
          <Navbar />
          <section id="home">
            <Hero />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="projects">
            <ProjectShowcase />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <Visualize />
          <HeroInstruction />
        </>
      )}
    </>
  );
}
