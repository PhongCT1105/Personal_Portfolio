import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaGithub } from 'react-icons/fa'; // Import GitHub icon

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  index: number;
  onViewDetails: () => void;
};

const ProjectCard: React.FC<ProjectProps> = ({
  id,
  title,
  description,
  imageUrl,
  link,
  index,
  onViewDetails,
}) => {
  return (
    <Tilt
      key={id}
      className="rounded-lg"
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      scale={1.05}
      transitionSpeed={300}
    >
      <motion.div
        className="relative group overflow-hidden bg-gray-50 shadow-lg rounded-lg h-full"
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
      >
        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-32 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 flex items-center justify-center text-center text-white px-2 transition-opacity duration-300 z-10 pointer-events-none">
          <p className="text-xs sm:text-sm">{description}</p>
        </div>

        {/* Content Section */}
        <div className="relative z-20 p-2 sm:p-3 flex flex-col h-24 sm:h-28">
          <h3 className="text-sm sm:text-base font-medium mb-1 text-gray-800">
            {title}
          </h3>
          <div className="flex justify-between mt-auto">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 flex items-center gap-2 text-xs sm:text-sm bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors"
            >
              <FaGithub className="text-lg" />
              GitHub
            </a>
            <button
              onClick={onViewDetails}
              className="px-3 py-1 text-xs sm:text-sm bg-red-500 text-white rounded-md hover:bg-red-400 transition-colors"
            >
              View More
            </button>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
