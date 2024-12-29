import React, { useState } from 'react';
import { motion } from 'framer-motion';

type ViewProjectProps = {
  project: {
    title: string;
    description: string;
    role: string;
    duration: string;
    images: string[];
    liveDemo?: string;
    technologies: string[]; // Include technologies
  };
  onBack: () => void;
};

const ViewProject: React.FC<ViewProjectProps> = ({ project, onBack }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="p-16 bg-white shadow-lg rounded-lg"
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
        <p>
          <strong>Technology used:</strong> {project.technologies.join(', ')}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {project.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-40 object-cover rounded-md shadow-md cursor-pointer"
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition"
        >
          Back to Projects
        </button>
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition"
          >
            View Live Demo
          </a>
        )}
      </div>

      {/* Full Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative max-w-3xl w-full p-4">
            <img
              src={selectedImage}
              alt="Full view"
              className="w-full h-auto rounded-md"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-400 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ViewProject;
