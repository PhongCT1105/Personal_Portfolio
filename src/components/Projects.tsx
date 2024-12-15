import React, { useState, useRef } from 'react';
import Cards from './Cards';
import Portfolio from '../assets/Portfolio.png';
import SpicyBites from '../assets/SpicyBites.png';
import Youtube from '../assets/Youtube.png';
import Webelite from '../assets/Webelite.png';
import Supercar from '../assets/Supercar.png';

const categories = [
  {
    name: 'Machine Learning & ',
    projects: [
      {
        title: 'AI Project 1',
        desc: 'An advanced AI project that leverages deep learning models.',
        image: Portfolio,
        live: '#',
        github: '#',
      },
      {
        title: 'AI Project 2',
        desc: 'A machine learning model that predicts user behavior.',
        image: SpicyBites,
        live: '#',
        github: '#',
      },
      {
        title: 'AI Project 3',
        desc: 'An NLP-driven chatbot for customer service automation.',
        image: Youtube,
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
        title: 'Spicy Bites',
        desc: 'A responsive restaurant website with integrated ordering system.',
        image: SpicyBites,
        live: 'https://spicybites.netlify.app/',
        github: 'https://github.com/rohitsingh93300/YtSpicyBites',
      },
      {
        title: 'YouTube Clone',
        desc: 'A YouTube UI clone built with React and Tailwind.',
        image: Youtube,
        live: 'https://youtube-clone-93300.netlify.app/',
        github: 'https://github.com/rohitsingh93300/YouTube-clone',
      },
    ],
  },
  {
    name: 'Data Science',
    projects: [
      {
        title: 'Data Science Project 1',
        desc: 'Data visualization dashboards built with D3.js.',
        image: Webelite,
        live: 'https://www.webelitebuilders.com/',
        github: '#',
      },
      {
        title: 'Data Science Project 2',
        desc: 'Predictive modeling for sales forecasting.',
        image: Supercar,
        live: 'https://supercar123.netlify.app/',
        github: 'https://github.com/rohitsingh93300/supercars',
      },
      {
        title: 'Data Science Project 3',
        desc: 'Clustering algorithms for customer segmentation.',
        image: Portfolio,
        live: '#',
        github: '#',
      },
    ],
  },
];

const Projects = () => {
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

  return (
    <section
      id="projects"
      className="relative bg-gray-700 py-10 px-4 overflow-hidden"
    >
      <div className="mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4 mx-auto">
          My Projects
        </h2>
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
                <h2 className="text-2xl font-semibold text-center mb-8 text-white">
                  {category.name}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6">
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
            className="p-3 sm:p-4 bg-red-100 text-red-600 border border-red-400 rounded-full hover:bg-red-200 shadow-md transition-all"
          >
            &lt;
          </button>
          <div className="flex space-x-2">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                aria-label={`Go to ${categories[index].name} category`}
                className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-transform ${
                  index === activeCategory
                    ? 'bg-blue-500 scale-125'
                    : 'bg-gray-300 scale-100'
                }`}
              ></button>
            ))}
          </div>
          <button
            onClick={goToNext}
            aria-label="Next Category"
            className="p-3 sm:p-4 bg-red-100 text-red-600 border border-red-400 rounded-full hover:bg-red-200 shadow-md transition-all"
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
