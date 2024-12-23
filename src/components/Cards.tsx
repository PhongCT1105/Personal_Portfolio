import React from 'react';
import Tilt from 'react-parallax-tilt';

interface CardItem {
  banner: string;
  title: string;
  desc: string;
  live: string;
  github: string;
  onClick?: () => void;
}

const Cards: React.FC<{ item: CardItem; onClick?: () => void }> = ({
  item,
  onClick,
}) => (
  <div
    className="cursor-pointer"
    onClick={() => onClick?.()} // Add the click handler here
  >
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1.05}
      transitionSpeed={450}
      glareEnable
      glareMaxOpacity={0.1}
      className="relative bg-gray-800 text-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-transform"
    >
      {/* Banner */}
      <div className="relative w-full h-48 overflow-hidden rounded-t-lg">
        <img
          src={item.banner}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col">
        <h3 className="text-lg font-semibold mb-2 truncate">{item.title}</h3>
        <p className="text-sm text-gray-400 mb-4 truncate">{item.desc}</p>
        <div className="flex justify-between">
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:underline"
          >
            Live
          </a>
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-400 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </Tilt>
  </div>
);

export default Cards;
