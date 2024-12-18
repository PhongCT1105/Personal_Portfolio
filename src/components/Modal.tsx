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
      onClick={onClose} // Close modal when clicking outside the content
    >
      <div
        className="bg-gray-800 text-gray-300 rounded-lg shadow-lg max-w-4xl w-full p-6 relative overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} // Prevent bubbling to the outer container
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-300 bg-red-500 hover:bg-red-600 rounded-full p-2 transition-transform duration-300 hover:scale-110"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="flex items-center justify-center text-3xl font-bold text-white mb-6 text-center">
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
            <h3 className="border-b border-red-600 text-lg font-semibold mb-2">
              Overview
            </h3>
            <p className="text-gray-400 leading-relaxed">{description}</p>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="border-b border-red-600 text-lg font-semibold mb-2">
              Project Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent bubbling to modal close
                      setCurrentImageIndex(index);
                      setIsGalleryOpen(true);
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fullscreen Gallery */}
        {isGalleryOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-60"
            onClick={() => setIsGalleryOpen(false)} // Close gallery when clicking outside
          >
            <div
              className="relative w-full h-full flex justify-center items-center"
              onClick={(e) => e.stopPropagation()} // Prevent bubbling to close the gallery
            >
              {/* Close Button */}
              <button
                onClick={() => setIsGalleryOpen(false)}
                className="absolute top-4 right-4 text-gray-300 bg-red-500 hover:bg-red-600 rounded-full p-2"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>

              {/* Left Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent bubbling
                  handlePrevImage();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-full p-3"
              >
                &larr;
              </button>

              {/* Displayed Image */}
              <img
                src={images[currentImageIndex]}
                alt={`Gallery Image ${currentImageIndex + 1}`}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {/* Right Arrow */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent bubbling
                  handleNextImage();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 bg-gray-700 hover:bg-gray-600 rounded-full p-3"
              >
                &rarr;
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
