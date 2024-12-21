import React from 'react';

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
  return (
    <div
      className="bg-gray-800 text-gray-300 rounded-md overflow-hidden shadow-sm hover:shadow-md transition-transform transform hover:scale-102 cursor-pointer relative group"
      onClick={onClick}
    >
      <div className="h-20 w-full sm:h-36 lg:h-40 overflow-hidden relative">
        <img
          src={item.banner}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2 sm:p-3">
        <h3 className="text-sm font-semibold truncate mb-1 sm:text-base lg:text-sm">
          {item.title}
        </h3>
        <p className="hidden sm:block text-xs lg:text-sm line-clamp-2 mb-2">
          {item.desc}
        </p>
        <p className="text-gray-400 text-xs sm:text-xs italic mb-1">
          <strong>Method:</strong> {item.method}
        </p>
        <div className="flex justify-between items-center">
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 text-xs hover:underline sm:text-xs"
            onClick={(e) => e.stopPropagation()}
          >
            Live
          </a>
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 text-xs hover:underline sm:text-xs"
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
