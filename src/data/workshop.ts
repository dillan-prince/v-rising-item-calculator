import { DataType } from "data";

export const sawmillRecipes: DataType = {
  Plank: {
    source: "Workshop > Sawmill",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Lumber: 20,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Lumber: 15,
      },
    ],
  },
  Sawdust: {
    source: "Workshop > Sawmill",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Lumber: 20,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Lumber: 15,
      },
    ],
  },
  "Reinforced Plank": {
    source: "Workshop > Sawmill",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Iron Ingot": 4,
        Plank: 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Iron Ingot": 3,
        Plank: 3,
      },
    ],
  },
};

export const grinderRecipes: DataType = {
  "Stone Brick": {
    source: "Workshop > Grinder",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Stone: 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Stone: 9,
      },
    ],
  },
  "Stone Dust": {
    source: "Workshop > Grinder",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Stone: 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Stone: 9,
      },
    ],
  },
  "Stone Body": {
    source: "Workshop > Grinder",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Clay: 12,
        "Stone Brick": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Clay: 9,
        "Stone Brick": 3,
      },
    ],
  },
  "Clay Mold": {
    source: "Workshop > Grinder",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Clay: 12,
        "Water-filled Canteen": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Clay: 9,
        "Water-filled Canteen": 1,
      },
    ],
  },
  "Grave Dust": {
    source: "Workshop > Grinder",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Bone: 100,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Bone: 75,
      },
    ],
  },
  "Spectral Dust": {
    source: "Workshop > Grinder",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Gem dust": 4,
        "Ghost Crystal": 40,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Gem dust": 3,
        "Ghost Crystal": 30,
      },
    ],
  },
};

export const woodworkingBenchRecipes: DataType = {
  "Painting Frame": {
    source: "Workshop > Woodworking Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Plank: 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Plank: 3,
      },
    ],
  },
  "Sculptured Wood": {
    source: "Workshop > Woodworking Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Plank: 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Plank: 3,
      },
    ],
  },
  "Fishing Pole": {
    source: "Workshop > Woodworking Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Plank: 8,
        "Copper Ingot": 4,
        "Coarse Thread": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Plank: 6,
        "Copper Ingot": 3,
        "Coarse Thread": 3,
      },
    ],
  },
  "Hunter's Crossbow": {
    source: "Workshop > Woodworking Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Plank: 12,
        Leather: 6,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Plank: 9,
        Leather: 5,
      },
    ],
  },
  "Merciless Hunter's Crossbow": {
    source: "Workshop > Woodworking Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Hunter's Crossbow": 1,
        "Gem dust": 2,
        Whetstone: 8,
        Leather: 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Hunter's Crossbow": 1,
        "Gem dust": 2,
        Whetstone: 6,
        Leather: 3,
      },
    ],
  },
  "Iron Crossbow": {
    source: "Workshop > Woodworking Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Iron Ingot": 20,
        Plank: 16,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Iron Ingot": 15,
        Plank: 12,
      },
    ],
  },
  "Merciless Iron Crossbow": {
    source: "Workshop > Woodworking Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Iron Crossbow": 1,
        "Reinforced Plank": 8,
        "Greater Blood Essence": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Iron Crossbow": 1,
        "Reinforced Plank": 6,
        "Greater Blood Essence": 3,
      },
    ],
  },
  "Dark Silver Crossbow": {
    source: "Workshop > Woodworking Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dark Silver Ingot": 20,
        "Reinforced Plank": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dark Silver Ingot": 15,
        "Reinforced Plank": 6,
      },
    ],
  },
  "Sanguine Crossbow": {
    source: "Workshop > Woodworking Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dark Silver Crossbow": 1,
        "Imperial Thread": 16,
        "Primal Blood Essence": 4,
        "Pristine Leather": 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dark Silver Crossbow": 1,
        "Imperial Thread": 12,
        "Primal Blood Essence": 3,
        "Pristine Leather": 9,
      },
    ],
  },
};

export const workshopRecipes: DataType = {
  ...sawmillRecipes,
  ...grinderRecipes,
  ...woodworkingBenchRecipes,
};
