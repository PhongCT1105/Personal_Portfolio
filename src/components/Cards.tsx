import React from 'react';

const Cards = ({ item }) => {
  return (
    <div className="bg-gray-800 text-gray-300 rounded-lg overflow-hidden transition duration-300 hover:bg-red-100 hover:text-red-600">
      {/* Image Section */}
      <div className="h-32 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate mb-2">{item.title}</h3>
        <p className="text-sm line-clamp-2 mb-4">{item.desc}</p>

        {/* Action Buttons */}
        <div className="flex justify-between items-center">
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:underline"
          >
            Live
          </a>
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
