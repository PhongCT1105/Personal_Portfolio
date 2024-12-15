import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

export default function Particle() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    console.log('Initializing particles engine...');
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async () => Promise.resolve();

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            position: 'fixed', // Sticks to the viewport
            top: 0,
            left: 0,
            width: '100vw', // Full width
            height: '100vh', // Full height
            zIndex: -1, // Stays in the background
            pointerEvents: 'none', // Does not block interactions
          }}
          options={{
            background: {
              color: {
                value: '#fff', // Match your design
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#ed2218',
              },
              links: {
                color: '#f7655e',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1.2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 160,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}
