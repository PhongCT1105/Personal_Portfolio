import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

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
  const [fullImageIndex, setFullImageIndex] = useState<number | null>(null);

  // Navigate to the next image
  const goToNextImage = () => {
    if (fullImageIndex !== null) {
      setFullImageIndex((prev) =>
        prev !== null ? (prev + 1) % images.length : null
      );
    }
  };

  // Navigate to the previous image
  const goToPreviousImage = () => {
    if (fullImageIndex !== null) {
      setFullImageIndex((prev) =>
        prev !== null ? (prev - 1 + images.length) % images.length : null
      );
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4"
      onClick={() => {
        if (fullImageIndex === null) {
          onClose(); // Close the entire modal when clicking outside in normal view
        } else {
          setFullImageIndex(null); // Exit gallery view back to modal content
        }
      }}
    >
      {/* Main Modal Content */}
      <div
        className={`bg-gray-800 text-gray-300 rounded-lg shadow-lg max-w-4xl w-full p-6 relative overflow-y-auto max-h-[90vh] transition-opacity duration-300 ${
          fullImageIndex !== null
            ? 'opacity-0 pointer-events-none'
            : 'opacity-100'
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent bubbling to outer container
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 bg-transparent hover:bg-red-600 rounded-full p-2 transition-transform duration-300 hover:scale-110"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="flex items-center justify-center md:text-3xl text-2xl font-bold text-white mb-6 text-center">
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
                    onClick={(e) => {
                      e.stopPropagation();
                      setFullImageIndex(index);
                    }} // Open full image on click
                  />
                </div>
              ))}
            </div>
            {/* View Full Gallery Button */}
            <div className="mt-4 flex justify-center">
              <button
                onClick={() => setFullImageIndex(0)} // Open gallery from the first image
                className="bg-transparent hover:bg-red-600 text-gray-50 px-4 py-2 rounded-md transition-transform transform hover:scale-105"
              >
                View Full Gallery
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Image View */}
      {fullImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50 p-4"
          onClick={() => setFullImageIndex(null)} // Return to modal view on outside click
        >
          <img
            src={images[fullImageIndex]}
            alt="Full View"
            className="max-w-full max-h-full object-contain rounded-lg shadow-lg"
          />
          {/* Close Full View */}
          <button
            onClick={() => setFullImageIndex(null)} // Close full view
            className="absolute top-4 right-4 text-gray-300 bg-black bg-opacity-70 hover:bg-red-600 rounded-full p-2 transition-transform duration-300 hover:scale-110"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPreviousImage();
            }}
            className="fixed left-4 bg-black bg-opacity-70 text-white rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-opacity-90"
          >
            &lt;
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNextImage();
            }}
            className="fixed right-4 bg-black bg-opacity-70 text-white rounded-full p-4 shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-opacity-90"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
