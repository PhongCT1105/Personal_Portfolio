import React, { useEffect, useState, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import CategoryFilter from './CategoryFilter';
import ProjectCard from './ProjectCard';
import ViewProject from './ViewProject';
import { projects, categories, Project } from '../data/projectData';
import {
  trackDurationViewTime,
  trackProjectInteraction,
  trackCategoryInteraction,
} from '../utils/firebaseUtils';

const ProjectShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  const startTime = useRef<number>(0);

  // Track duration
  useEffect(() => {
    startTime.current = Date.now();

    return () => {
      const endTime = Date.now();
      const duration = Math.floor((endTime - startTime.current) / 1000); // Convert to seconds
      if (duration > 0) {
        trackDurationViewTime('ProjectShowcase', duration);
      }
    };
  }, []);

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 640); // Tailwind `sm` breakpoint
  };

  useEffect(() => {
    handleResize(); // Set initial view mode
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    trackCategoryInteraction(category); // Track category interactions
  };

  const handleProjectInteraction = (projectName: string) => {
    trackProjectInteraction(projectName);
  };

  // Filter projects based on active category
  const filteredProjects = projects.filter((project) =>
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  const maxProjects = isMobileView ? 4 : 6; // Show 4 projects on mobile, 6 on larger screens
  const displayedProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, maxProjects);

  return (
    <div
      id="projects"
      className="py-20 min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300"
    >
      <AnimatePresence mode="wait">
        {selectedProject ? (
          <ViewProject
            key={selectedProject.id}
            project={selectedProject}
            onBack={() => {
              setSelectedProject(null);
            }}
          />
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Project Showcase
            </h1>
            <div className="mb-6">
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategorySelect={handleCategoryChange} // Track category interactions
              />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  imageUrl={project.imageUrl}
                  link={project.link}
                  index={index}
                  onViewDetails={() => {
                    setSelectedProject(project);
                  }}
                  onInteraction={(projectName) => {
                    handleProjectInteraction(projectName);
                  }}
                />
              ))}
            </div>
            {filteredProjects.length > maxProjects && (
              <div className="text-center mt-6">
                <button
                  onClick={() => {
                    setShowAllProjects(!showAllProjects);
                  }}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition"
                >
                  {showAllProjects ? 'Show Less' : 'View More Projects'}
                </button>
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectShowcase;
