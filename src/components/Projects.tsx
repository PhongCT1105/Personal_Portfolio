import React, { useState, useRef } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  link: string;
};

type Category = {
  name: string;
  projects: Project[];
};

const categories: Category[] = [
  {
    name: 'AI',
    projects: [
      {
        id: 1,
        title: 'AI Project 1',
        description: 'Description for AI Project 1',
        link: '#',
      },
      {
        id: 2,
        title: 'AI Project 2',
        description: 'Description for AI Project 2',
        link: '#',
      },
      {
        id: 3,
        title: 'AI Project 3',
        description: 'Description for AI Project 3',
        link: '#',
      },
    ],
  },
  {
    name: 'Web Development',
    projects: [
      {
        id: 4,
        title: 'Web Project 1',
        description: 'Description for Web Project 1',
        link: '#',
      },
      {
        id: 5,
        title: 'Web Project 2',
        description: 'Description for Web Project 2',
        link: '#',
      },
      {
        id: 6,
        title: 'Web Project 3',
        description: 'Description for Web Project 3',
        link: '#',
      },
    ],
  },
  {
    name: 'Data Science',
    projects: [
      {
        id: 7,
        title: 'Data Science Project 1',
        description: 'Description for DS Project 1',
        link: '#',
      },
      {
        id: 8,
        title: 'Data Science Project 2',
        description: 'Description for DS Project 2',
        link: '#',
      },
      {
        id: 9,
        title: 'Data Science Project 3',
        description: 'Description for DS Project 3',
        link: '#',
      },
    ],
  },
];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [transition, setTransition] = useState(true); // Controls smooth animation

  // Refs to track touch positions
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToNext = () => {
    if (activeCategory === categories.length - 1) {
      // Move to the first slide
      setTransition(true);
      setActiveCategory(0);
    } else {
      setActiveCategory((prev) => prev + 1);
    }
  };

  const goToPrevious = () => {
    if (activeCategory === 0) {
      // Move to the last slide
      setTransition(true);
      setActiveCategory(categories.length - 1);
    } else {
      setActiveCategory((prev) => prev - 1);
    }
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
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">Projects</h1>
      <div
        className="relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 z-10"
        >
          &lt;
        </button>
        <div
          className={`flex transition-transform ${transition ? 'duration-500' : ''}`}
          style={{
            transform: `translateX(-${activeCategory * 100}%)`,
          }}
        >
          {categories.map((category, index) => (
            <div key={index} className="min-w-full flex-shrink-0">
              <h2 className="text-2xl font-semibold text-center mb-4">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.projects.map((project) => (
                  <div
                    key={project.id}
                    className="p-4 bg-white shadow-lg rounded-lg border border-gray-200"
                  >
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                    <a
                      href={project.link}
                      className="text-blue-500 hover:underline mt-2 block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-200 rounded-full hover:bg-gray-300 z-10"
        >
          &gt;
        </button>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {categories.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveCategory(index)}
            className={`w-3 h-3 rounded-full ${
              index === activeCategory ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Projects;
