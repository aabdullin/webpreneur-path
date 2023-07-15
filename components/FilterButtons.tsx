import React from "react";

interface FilterButtonsProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  categories,
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="filter-buttons">
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-buttons__button ${
            category === activeCategory ? "active" : ""
          }`}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
