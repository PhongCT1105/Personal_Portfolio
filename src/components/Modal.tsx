import React from 'react';

interface ModalProps {
  images: string[];
  title: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ images, title, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      onClick={onClose} // Close modal when clicking outside
    >
      {/* Prevent click events inside the modal from closing it */}
      <div
        className="bg-gray-800 text-gray-300 rounded-lg shadow-lg p-4 max-w-3xl w-full relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-500 rounded-full px-2 py-1"
        >
          Close
        </button>
        <h2 className="text-lg font-bold mb-4">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${title} - ${index + 1}`}
              className="rounded-lg object-cover w-full"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
