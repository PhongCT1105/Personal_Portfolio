import React, { useState, useRef, useEffect } from 'react';
import Cards from './Cards';
import Modal from './Modal';
import { categories, Project } from '../data/categoriesData';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const isDragging = useRef<boolean>(false);
  const mouseStartX = useRef<number | null>(null);
  const mouseEndX = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

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

  const handleInteraction = () => {
    setIsPaused(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsPaused(false), 5000); // Resume after 5s
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    handleInteraction();
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const swipeDistance = touchStartX.current - touchEndX.current;

      if (swipeDistance > 50) goToNext();
      if (swipeDistance < -50) goToPrevious();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    handleInteraction();
    isDragging.current = true;
    mouseStartX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    mouseEndX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (
      isDragging.current &&
      mouseStartX.current !== null &&
      mouseEndX.current !== null
    ) {
      const swipeDistance = mouseStartX.current - mouseEndX.current;

      if (swipeDistance > 50) goToNext();
      if (swipeDistance < -50) goToPrevious();
    }
    isDragging.current = false;
    mouseStartX.current = null;
    mouseEndX.current = null;
  };

  useEffect(() => {
    if (selectedProject || isPaused) return;

    const autoSlide = setInterval(goToNext, 5000);
    return () => clearInterval(autoSlide);
  }, [selectedProject, isPaused]);

  return (
    <section
      id="projects"
      className="relative bg-gray-700 py-20 px-4"
      onMouseEnter={handleInteraction}
      onMouseLeave={handleInteraction}
    >
      <div className="mb-16 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-8 text-white border-b border-red-600 w-max mx-auto">
          My Projects
        </h3>
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(index);
                handleInteraction();
              }}
              className={`w-40 h-12 flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === index
                  ? 'bg-red-600 text-white shadow-md'
                  : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
              }`}
              aria-label={`View ${category.name} projects`}
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
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div
            className="flex w-full transition-transform duration-500"
            style={{ transform: `translateX(-${activeCategory * 100}%)` }}
          >
            {categories.map((category, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.projects.map((project, idx) => (
                    <Cards
                      key={idx}
                      item={project}
                      onClick={() => {
                        setSelectedProject(project);
                        handleInteraction();
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={() => {
              goToPrevious();
              handleInteraction();
            }}
            aria-label="Previous Category"
            className="w-10 h-10 flex items-center justify-center border border-red-600 text-white rounded-full hover:bg-red-500 focus:ring-2 focus:ring-red-500"
          >
            &lt;
          </button>
          <button
            onClick={() => {
              goToNext();
              handleInteraction();
            }}
            aria-label="Next Category"
            className="w-10 h-10 flex items-center justify-center border border-red-600 text-white rounded-full hover:bg-red-500 focus:ring-2 focus:ring-red-500"
          >
            &gt;
          </button>
        </div>
      </div>

      {selectedProject && (
        <Modal
          images={selectedProject.images}
          title={selectedProject.title}
          description={selectedProject.modalDesc} // Pass detailed description
          method={selectedProject.method}
          keyFeatures={selectedProject.keyFeatures}
          technologies={selectedProject.technologies}
          duration={selectedProject.duration}
          role={selectedProject.role}
          demoVideo={selectedProject.demoVideo}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
