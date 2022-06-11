import { DataType } from "data";

export const bloodPressRecipes: DataType = {
  "Blood Essence": {
    source: "Alchemy Lab > Blood Press",
    fullPriceRecipes: [
      {
        amountMade: 10,
        Rat: 4,
      },
      {
        amountMade: 60,
        "Tainted Heart": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 10,
        Rat: 3,
      },
      {
        amountMade: 60,
        "Tainted Heart": 3,
      },
    ],
  },
  "Greater Blood Essence": {
    source: "Alchemy Lab > Blood Press",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Unsullied Heart": 4,
      },
      {
        amountMade: 1,
        "Blood Essence": 200,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Unsullied Heart": 3,
      },
      {
        amountMade: 1,
        "Blood Essence": 150,
      },
    ],
  },
  "Primal Blood Essence": {
    source: "Alchemy Lab > Blood Press",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Exquisite Heart": 4,
      },
      {
        amountMade: 1,
        "Greater Blood Essence": 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Exquisite Heart": 3,
      },
      {
        amountMade: 1,
        "Greater Blood Essence": 9,
      },
    ],
  },
};

export const alchemyTableRecipes: DataType = {
  "Vermin Salve": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Rat: 1,
        "Plant Fibre": 60,
        Bone: 20,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Rat: 1,
        "Plant Fibre": 45,
        Bone: 15,
      },
    ],
  },
  "Empty Canteen": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Leather: 4,
        "Plant Fibre": 20,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Leather: 3,
        "Plant Fibre": 15,
      },
    ],
  },
  "Blood Rose Brew": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Blood Rose": 40,
        "Water-filled Canteen": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Blood Rose": 30,
        "Water-filled Canteen": 1,
      },
    ],
  },
  "Fire Resistance Brew": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Fire Blossom": 40,
        "Fish Oil": 4,
        "Water-filled Canteen": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Fire Blossom": 30,
        "Fish Oil": 3,
        "Water-filled Canteen": 1,
      },
    ],
  },
  "Minor Garlic Resistance Brew": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Hell's Clarion": 40,
        Rat: 4,
        "Water-filled Canteen": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Hell's Clarion": 30,
        Rat: 3,
        "Water-filled Canteen": 1,
      },
    ],
  },
  "Minor Sun Resistance Brew": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Mourning Lily": 20,
        "Blood Rose": 20,
        "Water-filled Canteen": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Mourning Lily": 15,
        "Blood Rose": 15,
        "Water-filled Canteen": 1,
      },
    ],
  },
  "Brew of Ferocity": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Hell's Clarion": 30,
        "Fish Bone": 1,
        "Water-filled Canteen": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Hell's Clarion": 23,
        "Fish Bone": 1,
        "Water-filled Canteen": 1,
      },
    ],
  },
  "Enchanted Brew": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Snow Flower": 30,
        "Fish Bone": 1,
        "Water-filled Canteen": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Snow Flower": 23,
        "Fish Bone": 1,
        "Water-filled Canteen": 1,
      },
    ],
  },
  "Silver Resistance Brew": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Snow Flower": 20,
        "Water-filled Canteen": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Snow Flower": 15,
        "Water-filled Canteen": 1,
      },
    ],
  },
  "Minor Explosive Box": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Sulphur: 8,
        Plank: 8,
        Whetstone: 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Sulphur: 6,
        Plank: 6,
        Whetstone: 3,
      },
    ],
  },
  "Empty Glass Bottle": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Glass: 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Glass: 3,
      },
    ],
  },
  "Blood Rose Potion": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Blood Rose": 80,
        "Water-filled Bottle": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Blood Rose": 60,
        "Water-filled Bottle": 1,
      },
    ],
  },
  "Holy Resistance Potion": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Mourning Lily": 60,
        Scourgestone: 2,
        "Water-filled Bottle": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Mourning Lily": 45,
        Scourgestone: 2,
        "Water-filled Bottle": 1,
      },
    ],
  },
  "Garlic Resistance Potion": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Hell's Clarion": 20,
        Sunflower: 20,
        Rat: 4,
        "Water-filled Bottle": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Hell's Clarion": 15,
        Sunflower: 15,
        Rat: 3,
        "Water-filled Bottle": 1,
      },
    ],
  },
  "Silver Resistance Potion": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Ghost Shroom": 32,
        "Water-filled Bottle": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Ghost Shroom": 24,
        "Water-filled Bottle": 1,
      },
    ],
  },
  "Wrangler's Potion": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Fire Blossom": 60,
        "Water-filled Bottle": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Fire Blossom": 45,
        "Water-filled Bottle": 1,
      },
    ],
  },
  "Major Explosive Box": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Sulphur: 12,
        "Reinforced Plank": 9,
        "Gem dust": 40,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Sulphur: 9,
        "Reinforced Plank": 6,
        "Gem dust": 30,
      },
    ],
  },
  "Holy Resistance Flask": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Spectral Dust": 4,
        "Holy Resistance Potion": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Spectral Dust": 3,
        "Holy Resistance Potion": 1,
      },
    ],
  },
  "Potion of Rage": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Fierce Stinger": 1,
        "Hell's Clarion": 90,
        "Water-filled Bottle": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Fierce Stinger": 1,
        "Hell's Clarion": 68,
        "Water-filled Bottle": 1,
      },
    ],
  },
  "Witch Potion": {
    source: "Alchemy Lab > Alchemy Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Swamp Dweller": 1,
        "Snow Flower": 90,
        "Water-filled Bottle": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Swamp Dweller": 1,
        "Snow Flower": 68,
        "Water-filled Bottle": 1,
      },
    ],
  },
};

export const verminNestRecipes: DataType = {
  Rat: {
    source: "Alchemy Lab > Vermin Nest",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Plant Fibre": 12,
        Bone: 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Plant Fibre": 9,
        Bone: 9,
      },
    ],
  },
  "Giant Rat": {
    source: "Alchemy Lab > Vermin Nest",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Plant Fibre": 12,
        "Fish Bone": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Plant Fibre": 9,
        "Fish Bone": 1,
      },
    ],
  },
  "Putrid Rat": {
    source: "Alchemy Lab > Vermin Nest",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Twilight Snapper": 1,
        "Fish Bone": 4,
        "Grave Dust": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Twilight Snapper": 1,
        "Fish Bone": 3,
        "Grave Dust": 6,
      },
    ],
  },
  Spiderling: {
    source: "Alchemy Lab > Vermin Nest",
    fullPriceRecipes: [
      {
        amountMade: 3,
        Scales: 20,
        "Golden River Bass": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 3,
        Scales: 15,
        "Golden River Bass": 1,
      },
    ],
  },
  Mosquito: {
    source: "Alchemy Lab > Vermin Nest",
    fullPriceRecipes: [
      {
        amountMade: 3,
        "Highland Lotus": 20,
        "Blood Snapper": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 3,
        "Highland Lotus": 15,
        "Blood Snapper": 1,
      },
    ],
  },
};

export const alchemyLabRecipes: DataType = {
  ...bloodPressRecipes,
  ...alchemyTableRecipes,
  ...verminNestRecipes,
};
