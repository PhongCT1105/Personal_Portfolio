import React from 'react';

interface CardItem {
  image: string;
  title: string;
  desc: string;
  live: string;
  github: string;
}

const Cards: React.FC<{ item: CardItem }> = ({ item }) => {
  return (
    <div className="bg-gray-800 text-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:scale-105">
      {/* Default square design for phone view */}
      <div className="h-24 w-full sm:h-48 lg:h-56 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2 sm:p-4">
        {/* Smaller title for phone view */}
        <h3 className="text-xs font-semibold truncate mb-1 sm:text-base lg:text-lg sm:mb-2">
          {item.title}
        </h3>
        {/* Hide description by default and show on larger screens */}
        <p className="hidden sm:block text-sm lg:text-base line-clamp-2 mb-2 sm:mb-4">
          {item.desc}
        </p>
        <div className="flex justify-between items-center">
          {/* Smaller link text for phones */}
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 text-xs hover:underline sm:text-sm"
          >
            Live
          </a>
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 text-xs hover:underline sm:text-sm"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
