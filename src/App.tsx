import { useState, useEffect } from 'react';
import Particle from './components/Particle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import ProjectShowcase from './components/ProjectShowcase';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Particle />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <ProjectShowcase />
      <Contact />
    </>
  );
}
