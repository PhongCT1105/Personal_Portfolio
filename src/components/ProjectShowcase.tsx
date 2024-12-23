// ProjectShowcase.tsx
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import CategoryFilter from './CategoryFilter';
import ProjectCard from './ProjectCard';
import ViewProject from './ViewProject';

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
  link: string;
  role: string;
  duration: string;
  images: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: 'Linear Regression Analysis',
    description:
      'Explored predictive modeling with linear regression techniques.',
    category: 'Machine Learning',
    imageUrl: 'https://via.placeholder.com/400',
    link: 'https://example.com/linear-regression',
    role: 'Data Analyst',
    duration: 'Jan 2022 - Mar 2022',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
  },
  {
    id: 2,
    title: 'Decision Tree Classifier',
    description: 'Developed a decision tree model to classify financial data.',
    category: 'Machine Learning',
    imageUrl: 'https://via.placeholder.com/400',
    link: 'https://example.com/decision-tree',
    role: 'Machine Learning Engineer',
    duration: 'Apr 2022 - Jun 2022',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
  },
  {
    id: 3,
    title: 'Clustering for Market Segmentation',
    description:
      'Implemented clustering techniques to identify market segments.',
    category: 'Machine Learning',
    imageUrl: 'https://via.placeholder.com/400',
    link: 'https://example.com/clustering',
    role: 'Data Scientist',
    duration: 'Jul 2022 - Sep 2022',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
  },
  {
    id: 4,
    title: 'GPT-4 Text Generator',
    description: 'Built a text generator application using GPT-4.',
    category: 'LLM/GenAI',
    imageUrl: 'https://via.placeholder.com/400',
    link: 'https://example.com/gpt4',
    role: 'AI Developer',
    duration: 'Oct 2022 - Dec 2022',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
  },
  {
    id: 5,
    title: 'Object Detection System',
    description: 'Implemented an object detection system using YOLO.',
    category: 'Computer Vision',
    imageUrl: 'https://via.placeholder.com/400',
    link: 'https://example.com/object-detection',
    role: 'Computer Vision Engineer',
    duration: 'Jan 2023 - Mar 2023',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
  },
  {
    id: 6,
    title: 'E-Commerce Website',
    description: 'Designed a React-based e-commerce platform.',
    category: 'Web Development',
    imageUrl: 'https://via.placeholder.com/400',
    link: 'https://example.com/e-commerce',
    role: 'Frontend Developer',
    duration: 'Apr 2023 - Jun 2023',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
  },
  {
    id: 7,
    title: 'Portfolio Website',
    description: 'Created a personal portfolio site using Next.js.',
    category: 'Web Development',
    imageUrl: 'https://via.placeholder.com/400',
    link: 'https://example.com/portfolio',
    role: 'Full Stack Developer',
    duration: 'Jul 2023 - Sep 2023',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
  },
  {
    id: 8,
    title: 'Blog Platform',
    description: 'Developed a blogging platform with user authentication.',
    category: 'Web Development',
    imageUrl: 'https://via.placeholder.com/400',
    link: 'https://example.com/blog',
    role: 'Backend Developer',
    duration: 'Oct 2023 - Dec 2023',
    images: [
      'https://via.placeholder.com/400',
      'https://via.placeholder.com/400',
    ],
  },
];

const categories = [
  'All',
  'Machine Learning',
  'LLM/GenAI',
  'Computer Vision',
  'Web Development',
];

const ProjectShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isMobileView, setIsMobileView] = useState<boolean>(false);

  const handleResize = () => {
    setIsMobileView(window.innerWidth < 640); // Tailwind `sm` breakpoint
  };

  useEffect(() => {
    handleResize(); // Set initial view mode
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const maxProjects = isMobileView ? 4 : 6; // Show 3 projects on mobile, 6 on larger screens
  const displayedProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, maxProjects);

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-20">
      <AnimatePresence mode="wait">
        {selectedProject ? (
          <ViewProject
            key={selectedProject.id}
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
          />
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
              Project Showcase
            </h1>
            <div className="mb-6">
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategorySelect={setActiveCategory}
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
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))}
            </div>
            {filteredProjects.length > maxProjects && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllProjects(!showAllProjects)}
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
