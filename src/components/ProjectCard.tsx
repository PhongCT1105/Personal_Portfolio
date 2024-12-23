import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

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
        className="relative group overflow-hidden bg-white shadow-sm rounded-lg h-full"
        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5, delay: index * 0.05 }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-32 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        <div className="p-2 sm:p-4 flex flex-col justify-between h-28 sm:h-48">
          <h3 className="text-sm sm:text-base font-medium mb-1 sm:mb-2">
            {title}
          </h3>
          <p className="text-gray-600 text-xs sm:text-sm mb-1 sm:mb-2 line-clamp-1">
            {description}
          </p>
          <div className="flex justify-between mt-1 sm:mt-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              View
            </a>
            <button
              onClick={onViewDetails}
              className="px-2 sm:px-4 py-1 sm:py-2 text-xs sm:text-sm bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
            >
              Details
            </button>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
