import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface ModalProps {
  images: string[];
  title: string;
  description: string;
  method: string;
  keyFeatures: string[];
  technologies: string[];
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({
  images,
  title,
  description,
  method,
  keyFeatures,
  technologies,
  onClose,
}) => {
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4">
      <div className="bg-gray-800 text-white rounded-lg max-w-3xl w-full p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-red-600 rounded-full"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>

        {/* Image Carousel */}
        <div className="relative mb-4">
          <img
            src={images[currentImage]}
            alt={`Slide ${currentImage + 1}`}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
            <button
              onClick={() =>
                setCurrentImage((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                )
              }
              className="p-2 bg-gray-700 rounded-full"
            >
              &lt;
            </button>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
            <button
              onClick={() =>
                setCurrentImage((prev) => (prev + 1) % images.length)
              }
              className="p-2 bg-gray-700 rounded-full"
            >
              &gt;
            </button>
          </div>
        </div>

        {/* Details */}
        <p className="mb-4">{description}</p>
        <p className="mb-4 font-semibold">Method: {method}</p>

        {/* Key Features */}
        <h3 className="text-lg font-semibold mb-2">Key Features</h3>
        <ul className="list-disc pl-5 mb-4">
          {keyFeatures.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>

        {/* Technologies */}
        <h3 className="text-lg font-semibold mb-2">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <span key={idx} className="bg-gray-700 px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
