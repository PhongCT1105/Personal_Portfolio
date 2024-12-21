import React, { useState } from 'react';

interface CardItem {
  banner: string; // Banner image for the card
  images: string[]; // Gallery images for the modal
  title: string; // Project title
  desc: string; // Short description for the card
  modalDesc: string; // Detailed description for the modal
  method: string; // Method or approach used
  live: string; // Live project link
  github: string; // GitHub repository link
  onClick?: () => void; // Optional click handler
}

const Cards: React.FC<{ item: CardItem; onClick?: () => void }> = ({
  item,
  onClick,
}) => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div
      className="relative bg-gray-800 text-gray-300 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-transform transform hover:scale-103 cursor-pointer group"
      onClick={() => {
        onClick?.();
        setShowTooltip(false); // Hide tooltip after the first click
      }}
    >
      <div className="h-32 w-full sm:h-48 lg:h-64 overflow-hidden relative">
        <img
          src={item.banner}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        {showTooltip && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <p className="text-white text-sm sm:text-base lg:text-lg animate-bounce">
              Click to View More!
            </p>
          </div>
        )}
      </div>
      <div className="p-2 sm:p-3">
        <h3 className="text-sm font-semibold truncate mb-1 sm:text-base lg:text-lg">
          {item.title}
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm italic mb-1">
          <strong>Method:</strong> {item.method}
        </p>
        <div className="flex justify-between items-center">
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 text-xs hover:underline sm:text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            Live
          </a>
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 text-xs hover:underline sm:text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
