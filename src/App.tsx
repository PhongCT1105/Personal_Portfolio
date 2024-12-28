import React, { useState } from 'react';
import Particle from './components/Particle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectShowcase from './components/ProjectShowcase';
import HeroInstruction from './components/InstructionOverlay';
import LoadingScreen from './components/LoadingScreen';
import Visualize from './components/Visualize';

export default function App() {
  // Instead of "loading", we'll track if the user has completed the loading screen
  const [showMainApp, setShowMainApp] = useState(false);

  // Handler for when the LoadingScreen finishes
  const handleLoadingDone = () => {
    setShowMainApp(true);
  };

  return (
    <>
      {!showMainApp && <LoadingScreen onDone={handleLoadingDone} />}

      {showMainApp && (
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
          <section id="visualize">
            <Visualize />
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
