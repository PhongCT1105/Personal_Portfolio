// ViewProject.tsx
import React from 'react';
import { motion } from 'framer-motion';

type ViewProjectProps = {
  project: {
    title: string;
    description: string;
    role: string;
    duration: string;
    images: string[];
  };
  onBack: () => void;
};

const ViewProject: React.FC<ViewProjectProps> = ({ project, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="p-6 bg-white shadow-lg rounded-lg"
    >
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <p className="text-gray-600 mb-4">{project.description}</p>
      <div className="mb-4">
        <p>
          <strong>Role:</strong> {project.role}
        </p>
        <p>
          <strong>Duration:</strong> {project.duration}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-40 object-cover rounded-md shadow-md"
          />
        ))}
      </div>
      <button
        onClick={onBack}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Back to Projects
      </button>
    </motion.div>
  );
};

export default ViewProject;
