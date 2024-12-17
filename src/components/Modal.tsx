import React from 'react';

interface ModalProps {
  images: string[];
  title: string;
  description: string;
  method: string;
  keyFeatures: string[];
  technologies: string[];
  duration: string;
  role: string;
  demoVideo?: string; // Make demoVideo optional
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
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div
        className="bg-gray-800 text-gray-300 rounded-lg shadow-lg max-w-4xl w-full sm:w-11/12 lg:w-10/12 xl:w-9/12 p-6 relative overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-500 rounded-full px-2 py-1 hover:bg-red-600"
        >
          Close
        </button>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-white">
          {title}
        </h2>

        {/* Conditional Demo Video */}
        {demoVideo && (
          <div className="w-full h-48 sm:h-64 lg:h-72 mb-6">
            <iframe
              src={demoVideo}
              title="Project Demo"
              className="w-full h-full rounded-lg"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Content Sections */}
        <div className="space-y-6">
          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Method */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Methodology</h3>
            <p className="text-gray-400 text-sm">{method}</p>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Key Features</h3>
            <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
              {keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-gray-600 text-gray-300 px-2 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Duration and Role */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Duration</h3>
              <p className="text-gray-400 text-sm">{duration}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Your Role</h3>
              <p className="text-gray-400 text-sm">{role}</p>
            </div>
          </div>

          {/* Gallery */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Project Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${title} - ${index + 1}`}
                  className="rounded-lg object-cover w-full h-32 sm:h-48"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
