import Particle from './components/Particle';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ProjectShowcase from './components/ProjectShowcase';
import HeroInstruction from './components/InstructionOverlay';

export default function App() {
  return (
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
  );
}
