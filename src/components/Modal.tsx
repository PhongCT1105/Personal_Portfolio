import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

interface ModalProps {
  images: string[];
  title: string;
  description: string;
  method: string;
  keyFeatures: string[];
  technologies: string[];
  duration: string;
  role: string;
  demoVideo?: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  images,
  title,
  description,
  method,
  keyFeatures,
  technologies,
  duration,
  role,
  demoVideo,
  onClose,
}) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      {/* Modal Container */}
      <div
        className="bg-gray-800 text-gray-300 rounded-lg shadow-lg max-w-4xl w-full p-6 relative overflow-y-auto max-h-[90vh] animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 text-gray-300 bg-red-500 hover:bg-red-600 rounded-full p-2 transition-transform duration-300 hover:scale-110"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="flex items-center justify-center md:text-5x text-3xl font-bold text-white mb-6 text-center">
          <MagnifyingGlassIcon className="w-8 h-8 mr-3 text-blue-400" />
          {title}
        </h2>

        {/* Conditional Demo Video */}
        {demoVideo && (
          <div className="w-full aspect-video mb-8 rounded-lg overflow-hidden shadow-md">
            <iframe
              src={demoVideo}
              title="Project Demo"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Description */}
          <div>
            <h3 className="border-b border-red-600 text-lg font-semibold text-white-300 mb-2">
              Overview
            </h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
          </div>

          {/* Method */}
          <div>
            <h3 className="border-b border-red-600 text-lg font-semibold text-white-300 mb-2">
              Methodology
            </h3>
            <p className="text-gray-400">{method}</p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="border-b border-red-600 text-lg font-semibold text-white-300 mb-2">
              Key Features
            </h3>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              {keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="border-b border-red-600 text-lg font-semibold text-white-300 mb-2">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs shadow-sm transform transition-transform duration-300 hover:bg-red-600 hover:text-red-100 hover:scale-105 hover:shadow-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Duration and Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h3 className="border-b border-red-600 text-lg font-semibold text-white-300 mb-2">
                Project Duration
              </h3>
              <p className="text-gray-400">{duration}</p>
            </div>
            <div>
              <h3 className="border-b border-red-600 text-lg font-semibold text-white-300 mb-2">
                Your Role
              </h3>
              <p className="text-gray-400">{role}</p>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="border-b border-red-600 text-lg font-semibold text-white-300 mb-2">
              Project Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg group"
                >
                  <img
                    src={image}
                    alt={`${title} - ${index + 1}`}
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsGalleryOpen(true);
              }}
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            >
              View All Images
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Gallery */}
      {isGalleryOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          <button
            onClick={() => setIsGalleryOpen(false)}
            className="absolute top-4 right-4 text-gray-300 bg-red-500 hover:bg-red-600 rounded-full p-2"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-full p-3"
            >
              &larr;
            </button>
            <img
              src={images[currentImageIndex]}
              alt={`Gallery Image ${currentImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-full p-3"
            >
              &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
