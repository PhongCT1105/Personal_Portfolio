import React from 'react';

interface CardItem {
  banner: string; // New field for the banner image
  images: string[]; // Existing gallery images
  title: string;
  desc: string;
  method: string;
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
        {/* Display the banner image */}
        <img
          src={item.banner} // Use the banner image
          alt={item.title}
          className="w-full h-full object-cover"
        />

        {/* Hover label for desktops */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 justify-center items-center transition-opacity duration-300 hidden sm:flex">
          <span className="text-white text-sm font-semibold">
            Click to Expand
          </span>
        </div>
        {/* Permanent label for phones */}
        <div className="absolute bottom-2 left-2 flex items-center space-x-1 bg-black/70 text-white text-[10px] px-2 py-1 rounded-full sm:hidden shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l4.94 4.94m0 0a7.5 7.5 0 11-10.606-10.606 7.5 7.5 0 0110.606 10.606z"
            />
          </svg>
          <span>Tap to Expand</span>
        </div>
      </div>
      <div className="p-2 sm:p-4">
        <h3 className="text-xs font-semibold truncate mb-1 sm:text-base lg:text-lg sm:mb-2">
          {item.title}
        </h3>
        <p className="hidden sm:block text-sm lg:text-base line-clamp-2 mb-2 sm:mb-4">
          {item.desc}
        </p>
        <p className="text-gray-400 text-xs sm:text-sm italic mb-2">
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
