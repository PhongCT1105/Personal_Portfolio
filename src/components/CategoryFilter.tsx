// CategoryFilter.tsx
import React from 'react';

type CategoryFilterProps = {
  categories: string[];
  activeCategory: string;
  onCategorySelect: (category: string) => void;
};

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategorySelect,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-8">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-3 py-1 rounded-lg ${
            activeCategory === category
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          } hover:bg-blue-400 hover:text-white transition`}
          onClick={() => onCategorySelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
