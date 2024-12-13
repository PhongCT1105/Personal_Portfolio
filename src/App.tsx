import About from './components/About';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Particle from './components/Particle';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Particle />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
