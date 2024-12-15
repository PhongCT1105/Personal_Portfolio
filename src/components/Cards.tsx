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
      <div className="h-32 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate mb-2">{item.title}</h3>
        <p className="text-sm line-clamp-2 mb-4">{item.desc}</p>
        <div className="flex justify-between items-center">
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:underline"
          >
            Live
          </a>
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
