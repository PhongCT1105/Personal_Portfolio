// Cards.js
const Cards = ({ item }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition-transform hover:scale-105 hover:shadow-lg">
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-32 object-cover rounded-t-md"
      />
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {item.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">{item.desc}</p>
        <div className="mt-3 flex justify-between items-center">
          <a
            href={item.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-sm hover:underline"
          >
            Live
          </a>
          <a
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 text-sm hover:text-gray-900"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;
