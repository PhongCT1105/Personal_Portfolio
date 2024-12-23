import React, { useState, useRef, useEffect } from 'react';
import Cards from './Cards';
import Modal from './Modal';
import {
  categories as originalCategories,
  Project,
} from '../data/categoriesData';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const allProjects = originalCategories.flatMap(
    (category) => category.projects
  );
  const categories = [
    { name: 'All', projects: allProjects },
    ...originalCategories,
  ];

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>

        {/* Category Bar */}
        <div className="flex justify-center gap-4 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === index
                  ? 'bg-gradient-to-r from-pink-500 to-red-500 shadow-lg'
                  : 'bg-gray-700 hover:bg-gray-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories[activeCategory].projects.map((project, idx) => (
            <Cards
              key={idx}
              item={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal {...selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};

export default Projects;
