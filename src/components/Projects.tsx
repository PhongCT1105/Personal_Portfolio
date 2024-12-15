import React, { useState, useRef, useEffect } from 'react';
import Cards from './Cards';
import Portfolio from '../assets/Portfolio.png';
import SpicyBites from '../assets/SpicyBites.png';
import Youtube from '../assets/Youtube.png';

// Define the type for categories and projects
interface Project {
  title: string;
  desc: string;
  image: string;
  live: string;
  github: string;
}

interface Category {
  name: string;
  projects: Project[];
}

const categories: Category[] = [
  {
    name: 'Machine Learning',
    projects: [
      {
        title: 'AI-powered research synthesis tool',
        desc: 'An advanced AI project that leverages deep learning models.',
        image: Portfolio,
        live: '#',
        github: '#',
      },
      {
        title: 'Cancer detection with Gene Expression',
        desc: 'A machine learning model that predicts user behavior.',
        image: SpicyBites,
        live: '#',
        github: '#',
      },
      {
        title: 'S&P 500 stock prediction',
        desc: 'An NLP-driven chatbot for customer service automation.',
        image: Youtube,
        live: '#',
        github: '#',
      },
    ],
  },
  {
    name: 'Large Language Model',
    projects: [
      {
        title: 'AI-powered research synthesis tool',
        desc: 'An advanced AI project that leverages deep learning models.',
        image: Portfolio,
        live: '#',
        github: '#',
      },
    ],
  },
  {
    name: 'Computer Vision',
    projects: [
      {
        title: 'Urban Traffic Monitoring System',
        desc: 'An advanced AI project that leverages deep learning models.',
        image: Portfolio,
        live: '#',
        github: '#',
      },
      {
        title: 'Clinical decision support system using CNN',
        desc: 'A machine learning model that predicts user behavior.',
        image: SpicyBites,
        live: '#',
        github: '#',
      },
    ],
  },
  {
    name: 'Web Development',
    projects: [
      {
        title: 'Portfolio Website',
        desc: 'A personal portfolio website showcasing web dev skills.',
        image: Portfolio,
        live: 'https://rohitsingh93300-portfolio.vercel.app/',
        github: 'https://github.com/rohitsingh93300/portfolio',
      },
      {
        title: 'Web application for Mass General Brigham Hospital',
        desc: 'A responsive restaurant website with integrated ordering system.',
        image: SpicyBites,
        live: 'https://spicybites.netlify.app/',
        github: 'https://github.com/rohitsingh93300/YtSpicyBites',
      },
      {
        title: 'TPC-H Bechmark analyzed research',
        desc: 'A responsive restaurant website with integrated ordering system.',
        image: SpicyBites,
        live: 'https://spicybites.netlify.app/',
        github: 'https://github.com/rohitsingh93300/YtSpicyBites',
      },
    ],
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToNext = () => {
    setActiveCategory((prev) =>
      prev === categories.length - 1 ? 0 : prev + 1
    );
  };

  const goToPrevious = () => {
    setActiveCategory((prev) =>
      prev === 0 ? categories.length - 1 : prev - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const swipeDistance = touchStartX.current - touchEndX.current;

      if (swipeDistance > 50) {
        goToNext();
      } else if (swipeDistance < -50) {
        goToPrevious();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(autoSlide);
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="relative bg-gray-700 py-20 px-4 overflow-hidden"
    >
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-600 w-max pb-4 mx-auto">
          My Projects
        </h2>

        <div className="flex justify-center space-x-4 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === index
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-300 text-gray-800'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div
          className="relative overflow-hidden w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex w-full transition-transform duration-500"
            style={{
              transform: `translateX(-${activeCategory * 100}%)`,
            }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0"
                style={{
                  flex: '0 0 100%',
                  maxWidth: '100vw',
                  overflow: 'hidden',
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                  {category.projects.map((item, idx) => (
                    <Cards key={idx} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center mt-6 space-x-4 z-10 relative">
          <button
            onClick={goToPrevious}
            aria-label="Previous Category"
            className="w-10 h-10 border border-red-600 text-white flex justify-center items-center rounded-full hover:bg-red-500 focus:ring-2 focus:ring-red-500 shadow-md transition-all"
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            aria-label="Next Category"
            className="w-10 h-10 border border-red-600 text-white flex justify-center items-center rounded-full hover:bg-red-500 focus:ring-2 focus:ring-red-500 shadow-md transition-all"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
