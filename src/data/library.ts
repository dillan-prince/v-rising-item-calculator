import { DataType } from "data";

export const paperPressRecipes: DataType = {
  Paper: {
    source: "Library > Paper Press",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Plant Fibre": 4,
        Sawdust: 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Plant Fibre": 3,
        Sawdust: 9,
      },
    ],
  },
  Scroll: {
    source: "Library > Paper Press",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Gem dust": 12,
        Paper: 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Gem dust": 9,
        Paper: 3,
      },
    ],
  },
  Schematic: {
    source: "Library > Paper Press",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Silver Ore": 24,
        "Spectral Dust": 4,
        Scroll: 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Silver Ore": 18,
        "Spectral Dust": 3,
        Scroll: 6,
      },
    ],
  },
};

export const libraryRecipes: DataType = {
  ...paperPressRecipes,
};
