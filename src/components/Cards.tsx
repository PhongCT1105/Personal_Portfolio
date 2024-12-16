import React from 'react';

interface CardItem {
  images: string[];
  title: string;
  desc: string;
  live: string;
  github: string;
  onClick?: () => void;
}

const Cards: React.FC<{ item: CardItem; onClick?: () => void }> = ({
  item,
  onClick,
}) => {
  return (
    <div
      className="bg-gray-800 text-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer relative group"
      onClick={onClick} // Trigger the modal when the card is clicked
    >
      <div className="h-24 w-full sm:h-48 lg:h-56 overflow-hidden relative">
        {/* Display the image */}
        <img
          src={item.images[0]}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300">
          <p className="text-white text-sm font-semibold">Click to Expand</p>
        </div>
      </div>
      <div className="p-2 sm:p-4">
        <h3 className="text-xs font-semibold truncate mb-1 sm:text-base lg:text-lg sm:mb-2">
          {item.title}
        </h3>
        <p className="hidden sm:block text-sm lg:text-base line-clamp-2 mb-2 sm:mb-4">
          {item.desc}
        </p>
        <div className="flex justify-between items-center">
          {/* Links for Live and GitHub */}
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 text-xs hover:underline sm:text-sm"
            onClick={(e) => e.stopPropagation()} // Prevent modal from opening
          >
            Live
          </a>
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 text-xs hover:underline sm:text-sm"
            onClick={(e) => e.stopPropagation()} // Prevent modal from opening
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
