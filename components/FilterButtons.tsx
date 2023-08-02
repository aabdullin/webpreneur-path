import React from "react";
import { Button, ButtonGroup } from "@mui/material";

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
    <ButtonGroup
      variant="contained"
      color="primary"
      aria-label="filter buttons"
    >
      {categories.map((category) => (
        <Button
          key={category}
          variant={category === activeCategory ? "contained" : "outlined"}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default FilterButtons;
