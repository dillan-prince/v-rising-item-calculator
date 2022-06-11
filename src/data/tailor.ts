import { DataType } from "data";

export const tanneryRecipes: DataType = {
  Leather: {
    source: "Tailor > Tannery",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Animal Hide": 16,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Animal Hide": 12,
      },
    ],
  },
  "Empty Canteen": {
    source: "Tailor > Tannery",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Plant Fibre": 20,
        Leather: 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Plant Fibre": 15,
        Leather: 3,
      },
    ],
  },
  "Pristine Leather": {
    source: "Tailor > Tannery",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Fish Oil": 4,
        "Pristine Hide": 20,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Fish Oil": 3,
        "Pristine Hide": 15,
      },
    ],
  },
};

export const loomRecipes: DataType = {
  Cloth: {
    source: "Tailor > Loom",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Leather: 4,
        "Plant Fibre": 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Leather: 3,
        "Plant Fibre": 9,
      },
    ],
  },
  "Cotton Yarn": {
    source: "Tailor > Loom",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Cotton: 20,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Cotton: 15,
      },
    ],
  },
  "Wool Thread": {
    source: "Tailor > Loom",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Fire Blossom": 12,
        "Coarse Thread": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Fire Blossom": 9,
        "Coarse Thread": 6,
      },
    ],
  },
  "Ghost Yarn": {
    source: "Tailor > Loom",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Ghost Shroom": 8,
        "Cotton Yarn": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Ghost Shroom": 6,
        "Cotton Yarn": 3,
      },
    ],
  },
  Silk: {
    source: "Tailor > Loom",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Highland Lotus": 8,
        Silkworm: 4,
        Cloth: 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Highland Lotus": 6,
        Silkworm: 3,
        Cloth: 3,
      },
    ],
  },
  "Imperial Thread": {
    source: "Tailor > Loom",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Snow Flower": 12,
        Sunflower: 12,
        "Wool Thread": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Snow Flower": 9,
        Sunflower: 9,
        "Wool Thread": 6,
      },
    ],
  },
};

export const tailoringBenchRecipes: DataType = {
  "Carpet Roll": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Cloth: 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Cloth: 3,
      },
    ],
  },
  "Traveller's Wrap": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Cloth: 4,
        Leather: 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Cloth: 3,
        Leather: 3,
      },
    ],
  },
  "Hunter's Cloak": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Cotton Yarn": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Cotton Yarn": 6,
      },
    ],
  },
  "Phantom's Veil": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Ghost Yarn": 8,
        "Spectral Dust": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Ghost Yarn": 6,
        "Spectral Dust": 6,
      },
    ],
  },
  "Hollowfang Chestguard": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Cotton Yarn": 8,
        Leather: 8,
        "Wool Thread": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Cotton Yarn": 6,
        Leather: 6,
        "Wool Thread": 6,
      },
    ],
  },
  "Hollowfang Leggings": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Cotton Yarn": 8,
        Leather: 8,
        "Wool Thread": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Cotton Yarn": 6,
        Leather: 6,
        "Wool Thread": 6,
      },
    ],
  },
  "Hollowfang Gloves": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Cotton Yarn": 8,
        Leather: 8,
        "Wool Thread": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Cotton Yarn": 6,
        Leather: 6,
        "Wool Thread": 6,
      },
    ],
  },
  "Hollowfang Boots": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Cotton Yarn": 8,
        Leather: 8,
        "Wool Thread": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Cotton Yarn": 6,
        Leather: 6,
        "Wool Thread": 6,
      },
    ],
  },
  "Merciless Hollowfang Chestguard": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Hollowfang Chestguard": 1,
        "Iron Ingot": 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Hollowfang Chestguard": 1,
        "Iron Ingot": 9,
      },
    ],
  },
  "Merciless Hollowfang Leggings": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Hollowfang Leggings": 1,
        "Iron Ingot": 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Hollowfang Leggings": 1,
        "Iron Ingot": 9,
      },
    ],
  },
  "Merciless Hollowfang Gloves": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Hollowfang Gloves": 1,
        "Iron Ingot": 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Hollowfang Gloves": 1,
        "Iron Ingot": 9,
      },
    ],
  },
  "Merciless Hollowfang Boots": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Hollowfang Boots": 1,
        "Iron Ingot": 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Hollowfang Boots": 1,
        "Iron Ingot": 9,
      },
    ],
  },
  "Dawnthorn Chestguard": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Scales: 160,
        "Pristine Leather": 12,
        "Ghost Yarn": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Scales: 120,
        "Pristine Leather": 9,
        "Ghost Yarn": 6,
      },
    ],
  },
  "Dawnthorn Leggings": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Scales: 160,
        "Pristine Leather": 12,
        "Ghost Yarn": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Scales: 120,
        "Pristine Leather": 9,
        "Ghost Yarn": 6,
      },
    ],
  },
  "Dawnthorn Gloves": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Scales: 160,
        "Pristine Leather": 12,
        "Ghost Yarn": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Scales: 120,
        "Pristine Leather": 9,
        "Ghost Yarn": 6,
      },
    ],
  },
  "Dawnthorn Boots": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Scales: 160,
        "Pristine Leather": 12,
        "Ghost Yarn": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Scales: 120,
        "Pristine Leather": 9,
        "Ghost Yarn": 6,
      },
    ],
  },
  "Bloodmoon Chestguard": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dawnthorn Chestguard": 1,
        "Imperial Thread": 12,
        Silk: 8,
        "Primal Blood Essence": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dawnthorn Chestguard": 1,
        "Imperial Thread": 9,
        Silk: 6,
        "Primal Blood Essence": 1,
      },
    ],
  },
  "Bloodmoon Leggings": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dawnthorn Leggings": 1,
        "Imperial Thread": 12,
        Silk: 8,
        "Primal Blood Essence": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dawnthorn Leggings": 1,
        "Imperial Thread": 9,
        Silk: 6,
        "Primal Blood Essence": 1,
      },
    ],
  },
  "Bloodmoon Gloves": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dawnthorn Gloves": 1,
        "Imperial Thread": 12,
        Silk: 8,
        "Primal Blood Essence": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dawnthorn Gloves": 1,
        "Imperial Thread": 9,
        Silk: 6,
        "Primal Blood Essence": 1,
      },
    ],
  },
  "Bloodmoon Boots": {
    source: "Tailor > Tailoring Bench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dawnthorn Boots": 1,
        "Imperial Thread": 12,
        Silk: 8,
        "Primal Blood Essence": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dawnthorn Boots": 1,
        "Imperial Thread": 9,
        Silk: 6,
        "Primal Blood Essence": 1,
      },
    ],
  },
};

export const tailorRecipes: DataType = {
  ...tanneryRecipes,
  ...loomRecipes,
  ...tailoringBenchRecipes,
};
