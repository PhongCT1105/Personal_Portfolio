import { useState, useEffect } from 'react';
import Particle from './components/Particle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectShowcase from './components/ProjectShowcase';
import HeroInstruction from './components/InstructionOverlay';
import LoadingScreen from './components/LoadingScreen'; // Import LoadingScreen

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for testing purposes (or remove for actual implementation)
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
          <HeroInstruction />
        </>
      )}
    </>
  );
}
