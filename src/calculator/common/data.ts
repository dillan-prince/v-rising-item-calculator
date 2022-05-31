export type RecipeType = {
  amountMade: number;
  [itemName: string]: number;
};

export type DataRowType = {
  source: string;
  fullPriceRecipes: RecipeType[];
  discountedRecipes?: RecipeType[];
};

export type DataType = {
  [itemName: string]: DataRowType;
};

export const simpleWorkbenchRecipes: DataType = {
  "Reinforced Bone Sword": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Bone Sword": 1,
        Plank: 4,
        Stone: 120,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Bone Sword": 1,
        Plank: 3,
        Stone: 90,
      },
    ],
  },
  "Reinforced Bone Axes": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Bone Axes": 1,
        Plank: 4,
        Stone: 120,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Bone Axes": 1,
        Plank: 3,
        Stone: 90,
      },
    ],
  },
  "Reinforced Bone Mace": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Bone Mace": 1,
        Plank: 4,
        Stone: 120,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Bone Mace": 1,
        Plank: 3,
        Stone: 90,
      },
    ],
  },
  "Reinforced Bone Spear": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Bone Spear": 1,
        Plank: 4,
        Stone: 120,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Bone Spear": 1,
        Plank: 3,
        Stone: 90,
      },
    ],
  },
  "Copper Sword": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Copper Ingot": 16,
        Plank: 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Copper Ingot": 12,
        Plank: 9,
      },
    ],
  },
  "Copper Axes": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Copper Ingot": 16,
        Plank: 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Copper Ingot": 12,
        Plank: 9,
      },
    ],
  },
  "Copper Mace": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Copper Ingot": 16,
        Plank: 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Copper Ingot": 12,
        Plank: 9,
      },
    ],
  },
  "Copper Spear": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Copper Ingot": 16,
        Plank: 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Copper Ingot": 12,
        Plank: 9,
      },
    ],
  },
  "Merciless Copper Sword": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Copper Sword": 1,
        "Crude Sapphire": 2,
        Whetstone: 8,
        Leather: 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Copper Sword": 1,
        "Crude Sapphire": 2,
        Whetstone: 6,
        Leather: 3,
      },
    ],
  },
  "Merciless Copper Axes": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Copper Axes": 1,
        "Crude Ruby": 2,
        Whetstone: 8,
        Leather: 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Copper Axes": 1,
        "Crude Ruby": 2,
        Whetstone: 6,
        Leather: 3,
      },
    ],
  },
  "Merciless Copper Mace": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Copper Mace": 1,
        "Crude Topaz": 2,
        Whetstone: 8,
        Leather: 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Copper Mace": 1,
        "Crude Topaz": 2,
        Whetstone: 6,
        Leather: 3,
      },
    ],
  },
  "Merciless Copper Spear": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Copper Spear": 1,
        "Crude Emerald": 2,
        Whetstone: 8,
        Leather: 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Copper Spear": 1,
        "Crude Emerald": 2,
        Whetstone: 6,
        Leather: 3,
      },
    ],
  },
  "Blood Rose Ring": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Plant Fibre": 80,
        "Blood Rose": 30,
        "Bone Ring": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Plant Fibre": 60,
        "Blood Rose": 23,
        "Bone Ring": 1,
      },
    ],
  },
  "Gravedigger Ring": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Grave Dust": 8,
        "Mourning Lily": 40,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Grave Dust": 6,
        "Mourning Lily": 30,
      },
    ],
  },
  "The Ember Chain": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Greater Blood Essence": 1,
        "Crude Emerald": 4,
        "Grave Dust": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Greater Blood Essence": 1,
        "Crude Emerald": 3,
        "Grave Dust": 6,
      },
    ],
  },
  "The Frozen Eye": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Greater Blood Essence": 1,
        "Crude Sapphire": 4,
        "Grave Dust": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Greater Blood Essence": 1,
        "Crude Sapphire": 3,
        "Grave Dust": 6,
      },
    ],
  },
  "Duskwatcher's Ring": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Greater Blood Essence": 1,
        "Crude Topaz": 4,
        "Grave Dust": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Greater Blood Essence": 1,
        "Crude Topaz": 3,
        "Grave Dust": 6,
      },
    ],
  },
  "Mist Signet": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Greater Blood Essence": 1,
        "Crude Miststone": 4,
        "Grave Dust": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Greater Blood Essence": 1,
        "Crude Miststone": 3,
        "Grave Dust": 6,
      },
    ],
  },
  "Plated Boneguard Chestguard": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Boneguard Chestguard": 1,
        "Animal Hide": 60,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Boneguard Chestguard": 1,
        "Animal Hide": 45,
      },
    ],
  },
  "Plated Boneguard Leggings": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Boneguard Leggings": 1,
        "Animal Hide": 60,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Boneguard Leggings": 1,
        "Animal Hide": 45,
      },
    ],
  },
  "Plated Boneguard Gloves": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Boneguard Gloves": 1,
        "Animal Hide": 60,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Boneguard Gloves": 1,
        "Animal Hide": 45,
      },
    ],
  },
  "Plated Boneguard Boots": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Boneguard Boots": 1,
        "Animal Hide": 60,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Boneguard Boots": 1,
        "Animal Hide": 45,
      },
    ],
  },
  "Nightstalker Chestguard": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Leather: 6,
        "Coarse Thread": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Leather: 5,
        "Coarse Thread": 3,
      },
    ],
  },
  "Nightstalker Leggings": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Leather: 6,
        "Coarse Thread": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Leather: 5,
        "Coarse Thread": 3,
      },
    ],
  },
  "Nightstalker Gloves": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Leather: 6,
        "Coarse Thread": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Leather: 5,
        "Coarse Thread": 3,
      },
    ],
  },
  "Nightstalker Boots": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Leather: 6,
        "Coarse Thread": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Leather: 5,
        "Coarse Thread": 3,
      },
    ],
  },
  "Merciless Nightstalker Chestguard": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Nightstalker Chestguard": 1,
        Leather: 4,
        "Coarse Thread": 4,
        "Copper Ingot": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Nightstalker Chestguard": 1,
        Leather: 3,
        "Coarse Thread": 3,
        "Copper Ingot": 6,
      },
    ],
  },
  "Merciless Nightstalker Leggings": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Nightstalker Leggings": 1,
        Leather: 4,
        "Coarse Thread": 4,
        "Copper Ingot": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Nightstalker Leggings": 1,
        Leather: 3,
        "Coarse Thread": 3,
        "Copper Ingot": 6,
      },
    ],
  },
  "Merciless Nightstalker Gloves": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Nightstalker Gloves": 1,
        Leather: 4,
        "Coarse Thread": 4,
        "Copper Ingot": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Nightstalker Gloves": 1,
        Leather: 3,
        "Coarse Thread": 3,
        "Copper Ingot": 6,
      },
    ],
  },
  "Merciless Nightstalker Boots": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Nightstalker Boots": 1,
        Leather: 4,
        "Coarse Thread": 4,
        "Copper Ingot": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Nightstalker Boots": 1,
        Leather: 3,
        "Coarse Thread": 3,
        "Copper Ingot": 6,
      },
    ],
  },
  "Traveller's Wrap": {
    source: "Forge > Simple Workbench",
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
  "Bone Castle Key": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Blood Essence": 320,
        Stone: 1200,
        "Animal Hide": 400,
        Bone: 400,
        Plank: 40,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Blood Essence": 240,
        Stone: 900,
        "Animal Hide": 300,
        Bone: 300,
        Plank: 30,
      },
    ],
  },
  "Copper Castle Key": {
    source: "Forge > Simple Workbench",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Greater Blood Essence": 4,
        "Stone Brick": 240,
        Plank: 80,
        "Copper Ingot": 80,
        Leather: 60,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Greater Blood Essence": 3,
        "Stone Brick": 180,
        Plank: 60,
        "Copper Ingot": 60,
        Leather: 45,
      },
    ],
  },
};

export const furnaceRecipes: DataType = {
  "Copper Ingot": {
    source: "Forge > Furnace",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Copper Ore": 20,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Copper Ore": 15,
      },
    ],
  },
  Whetstone: {
    source: "Forge > Furnace",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Copper Ingot": 1,
        "Stone dust": 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Copper Ingot": 1,
        "Stone dust": 9,
      },
    ],
  },
  Sulphur: {
    source: "Forge > Furnace",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Sulphur Ore": 20,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Sulphur Ore": 15,
      },
    ],
  },
  "Iron Ingot": {
    source: "Forge > Furnace",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Iron Ore": 20,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Iron Ore": 15,
      },
    ],
  },
  Glass: {
    source: "Forge > Furnace",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Quartz: 20,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Quartz: 15,
      },
    ],
  },
  Scourgestone: {
    source: "Forge > Furnace",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Whetstone: 1,
        Glass: 4,
        "Grave Dust": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Whetstone: 1,
        Glass: 3,
        "Grave Dust": 3,
      },
    ],
  },
  "Dark Silver Ingot": {
    source: "Forge > Furnace",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Scourgestone: 1,
        "Silver Ore": 20,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Scourgestone: 1,
        "Silver Ore": 15,
      },
    ],
  },
  "Gold Ingot": {
    source: "Forge > Furnace",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Sulphur: 8,
        "Golden Jewellery": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Sulphur: 6,
        "Golden Jewellery": 6,
      },
    ],
  },
};

export const smithyRecipes: DataType = {
  "Iron Body": {
    source: "Forge > Smithy",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Iron Ingot": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Iron Ingot": 3,
      },
    ],
  },
  "Iron Sword": {
    source: "Forge > Smithy",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Iron Ingot": 20,
        Plank: 18,
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
  "Iron Axes": {
    source: "Forge > Smithy",
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
  "Iron Mace": {
    source: "Forge > Smithy",
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
  "Iron Spear": {
    source: "Forge > Smithy",
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
  "Iron Reaper": {
    source: "Forge > Smithy",
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
  "Iron Slashers": {
    source: "Forge > Smithy",
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
  "Merciless Iron Sword": {
    source: "Forge > Smithy",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Iron Sword": 1,
        "Regular Sapphire": 4,
        "Greater Blood Essence": 4,
        "Reinforced Plank": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Iron Sword": 1,
        "Regular Sapphire": 3,
        "Greater Blood Essence": 3,
        "Reinforced Plank": 3,
      },
    ],
  },
  "Merciless Iron Axes": {
    source: "Forge > Smithy",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Iron Axes": 1,
        "Regular Ruby": 4,
        "Greater Blood Essence": 4,
        "Reinforced Plank": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Iron Axes": 1,
        "Regular Ruby": 3,
        "Greater Blood Essence": 3,
        "Reinforced Plank": 3,
      },
    ],
  },
  "Merciless Iron Mace": {
    source: "Forge > Smithy",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Iron Mace": 1,
        "Regular Topaz": 4,
        "Greater Blood Essence": 4,
        "Reinforced Plank": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Iron Mace": 1,
        "Regular Topaz": 3,
        "Greater Blood Essence": 3,
        "Reinforced Plank": 3,
      },
    ],
  },
  "Merciless Iron Spear": {
    source: "Forge > Smithy",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Iron Spear": 1,
        "Regular Emerald": 4,
        "Greater Blood Essence": 4,
        "Reinforced Plank": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Iron Spear": 1,
        "Regular Emerald": 3,
        "Greater Blood Essence": 3,
        "Reinforced Plank": 3,
      },
    ],
  },
  "Merciless Iron Reaper": {
    source: "Forge > Smithy",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Iron Reaper": 1,
        "Regular Miststone": 4,
        "Greater Blood Essence": 4,
        "Reinforced Plank": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Iron Reaper": 1,
        "Regular Miststone": 3,
        "Greater Blood Essence": 3,
        "Reinforced Plank": 3,
      },
    ],
  },
  "Merciless Iron Slashers": {
    source: "Forge > Smithy",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Iron Slashers": 1,
        "Regular Amethyst": 4,
        "Greater Blood Essence": 4,
        "Reinforced Plank": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Iron Slashers": 1,
        "Regular Amethyst": 3,
        "Greater Blood Essence": 3,
        "Reinforced Plank": 3,
      },
    ],
  },
  "Iron Castle Key": {
    source: "Forge > Smithy",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Greater Blood Essence": 20,
        "Gem dust": 240,
        Scourgestone: 80,
        "Reinforced Plank": 60,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Greater Blood Essence": 15,
        "Gem dust": 180,
        Scourgestone: 60,
        "Reinforced Plank": 45,
      },
    ],
  },
};

export const anvilRecipes: DataType = {
  "Dark Silver Sword": {
    source: "Forge > Anvil",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dark Silver Ingot": 16,
        "Reinforced Plank": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dark Silver Ingot": 12,
        "Reinforced Plank": 6,
      },
    ],
  },
  "Dark Silver Axes": {
    source: "Forge > Anvil",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dark Silver Ingot": 16,
        "Reinforced Plank": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dark Silver Ingot": 12,
        "Reinforced Plank": 6,
      },
    ],
  },
  "Dark Silver Mace": {
    source: "Forge > Anvil",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dark Silver Ingot": 16,
        "Reinforced Plank": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dark Silver Ingot": 12,
        "Reinforced Plank": 6,
      },
    ],
  },
  "Dark Silver Spear": {
    source: "Forge > Anvil",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dark Silver Ingot": 16,
        "Reinforced Plank": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dark Silver Ingot": 12,
        "Reinforced Plank": 6,
      },
    ],
  },
  "Dark Silver Reaper": {
    source: "Forge > Anvil",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dark Silver Ingot": 16,
        "Reinforced Plank": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dark Silver Ingot": 12,
        "Reinforced Plank": 6,
      },
    ],
  },
  "Dark Silver Slashers": {
    source: "Forge > Anvil",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dark Silver Ingot": 16,
        "Reinforced Plank": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dark Silver Ingot": 12,
        "Reinforced Plank": 6,
      },
    ],
  },
  "Sanguine Sword": {
    source: "Forge > Anvil",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dark Silver Sword": 1,
        "Flawless Sapphire": 4,
        "Primal Blood Essence": 4,
        "Pristine Leather": 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dark Silver Sword": 1,
        "Flawless Sapphire": 3,
        "Primal Blood Essence": 3,
        "Pristine Leather": 9,
      },
    ],
  },
  "Sanguine Axes": {
    source: "Forge > Anvil",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dark Silver Axes": 1,
        "Flawless Ruby": 4,
        "Primal Blood Essence": 4,
        "Pristine Leather": 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dark Silver Axes": 1,
        "Flawless Ruby": 3,
        "Primal Blood Essence": 3,
        "Pristine Leather": 9,
      },
    ],
  },
  "Sanguine Mace": {
    source: "Forge > Anvil",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dark Silver Mace": 1,
        "Flawless Topaz": 4,
        "Primal Blood Essence": 4,
        "Pristine Leather": 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dark Silver Mace": 1,
        "Flawless Topaz": 3,
        "Primal Blood Essence": 3,
        "Pristine Leather": 9,
      },
    ],
  },
  "Sanguine Spear": {
    source: "Forge > Anvil",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dark Silver Spear": 1,
        "Flawless Emerald": 4,
        "Primal Blood Essence": 4,
        "Pristine Leather": 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dark Silver Spear": 1,
        "Flawless Emerald": 3,
        "Primal Blood Essence": 3,
        "Pristine Leather": 9,
      },
    ],
  },
  "Sanguine Reaper": {
    source: "Forge > Anvil",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dark Silver Reaper": 1,
        "Flawless Miststone": 4,
        "Primal Blood Essence": 4,
        "Pristine Leather": 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dark Silver Reaper": 1,
        "Flawless Miststone": 3,
        "Primal Blood Essence": 3,
        "Pristine Leather": 9,
      },
    ],
  },
  "Sanguine Slashers": {
    source: "Forge > Anvil",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Dark Silver Slashers": 1,
        "Flawless Amethyst": 4,
        "Primal Blood Essence": 4,
        "Pristine Leather": 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Dark Silver Slashers": 1,
        "Flawless Amethyst": 3,
        "Primal Blood Essence": 3,
        "Pristine Leather": 9,
      },
    ],
  },
  "Golden Castle Key": {
    source: "Forge > Anvil",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Primal Blood Essence": 12,
        "Gold Ingot": 24,
        "Spectral Dust": 40,
        "Dark Silver Ingot": 80,
        "Reinforced Plank": 80,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Primal Blood Essence": 9,
        "Gold Ingot": 18,
        "Spectral Dust": 30,
        "Dark Silver Ingot": 60,
        "Reinforced Plank": 60,
      },
    ],
  },
};

export const forgeRecipes: DataType = {
  ...simpleWorkbenchRecipes,
  ...furnaceRecipes,
  ...smithyRecipes,
  ...anvilRecipes,
};

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

export const data: DataType = {
  ...tailorRecipes,
  ...alchemyLabRecipes,
  ...forgeRecipes,
  ...workshopRecipes,
};

export const _data: { [itemName: string]: RecipeType } = {
  "Alchemy Table": {
    amountMade: 1,
    "Blood Essence": 100,
    Plank: 16,
    Sulphur: 12,
  },
  Anvil: {
    amountMade: 1,
    "Primal Blood Essence": 1,
    "Dark Silver Ingot": 32,
    "Reinforced Plank": 12,
  },
  Athenaeum: {
    amountMade: 1,
    Scroll: 40,
    Scourgestone: 12,
    "Reinforced Plank": 8,
  },
  "Big Stash": {
    amountMade: 1,
    Plank: 6,
    "Copper Ingot": 2,
  },
  "Blood Altar": {
    amountMade: 1,
    Stone: 180,
    "Blood Essence": 10,
  },
  "Blood Press": {
    amountMade: 1,
    Plank: 12,
    Stone: 120,
  },
  "Bloodmoon Boots": {
    amountMade: 1,
    "Dawnthorn Boots": 1,
    "Imperial Thread": 9,
    Silk: 6,
    "Primal Blood Essence": 1,
  },
  "Bloodmoon Chestguard": {
    amountMade: 1,
    "Dawnthorn Chestguard": 1,
    "Imperial Thread": 9,
    Silk: 6,
    "Primal Blood Essence": 1,
  },
  "Bloodmoon Gloves": {
    amountMade: 1,
    "Dawnthorn Gloves": 1,
    "Imperial Thread": 9,
    Silk: 6,
    "Primal Blood Essence": 1,
  },
  "Bloodmoon Leggings": {
    amountMade: 1,
    "Dawnthorn Leggings": 1,
    "Imperial Thread": 9,
    Silk: 6,
    "Primal Blood Essence": 1,
  },
  Border: {
    amountMade: 1,
    "Blood Essence": 2,
    Stone: 20,
  },
  "Carpet Roll": {
    amountMade: 1,
    Cloth: 3,
  },
  "Castle Heart Rank 1": {
    amountMade: 1,
    "Blood Essence": 30,
    Stone: 240,
  },
  "Castle Heart Rank 2": {
    amountMade: 1,
    "Copper Ingot": 12,
    Leather: 12,
  },
  "Castle Heart Rank 3": {
    amountMade: 1,
    "Iron Ingot": 24,
    Glass: 24,
    "Greater Blood Essence": 4,
  },
  "Castle Heart Rank 4": {
    amountMade: 1,
    "Dark Silver Ingot": 24,
    "Spectral Dust": 12,
    "Primal Blood Essence": 1,
  },
  "Castle Throne": {
    amountMade: 1,
    "Stone Brick": 24,
    "Iron Ingot": 16,
    "Greater Blood Essence": 4,
  },
  "Clay Mold": {
    amountMade: 1,
    Clay: 9,
    "Water-filled Canteen": 1,
  },
  Cloth: {
    amountMade: 1,
    Leather: 3,
    "Plant Fibre": 9,
  },
  "Cotton Yarn": {
    amountMade: 1,
    Cotton: 15,
  },
  "Copper Ingot": {
    amountMade: 1,
    "Copper Ore": 15,
  },
  "Dark Silver Ingot": {
    amountMade: 1,
    Scourgestone: 1,
    "Silver Ore": 15,
  },
  "Dawnthorn Boots": {
    amountMade: 1,
    Scales: 120,
    "Pristine Leather": 9,
    "Ghost Yarn": 6,
  },
  "Dawnthorn Chestguard": {
    amountMade: 1,
    Scales: 120,
    "Pristine Leather": 9,
    "Ghost Yarn": 6,
  },
  "Dawnthorn Gloves": {
    amountMade: 1,
    Scales: 120,
    "Pristine Leather": 9,
    "Ghost Yarn": 6,
  },
  "Dawnthorn Leggings": {
    amountMade: 1,
    Scales: 120,
    "Pristine Leather": 9,
    "Ghost Yarn": 6,
  },
  "Empty Canteen": {
    amountMade: 1,
    "Plant Fibre": 15,
    Leather: 3,
  },
  Furnace: {
    amountMade: 1,
    Stone: 480,
    "Copper Ore": 60,
  },
  "Gem Cutting Table": {
    amountMade: 1,
    "Iron Ingot": 12,
    "Gem dust": 60,
    "Stone Brick": 24,
  },
  "Ghost Yarn": {
    amountMade: 1,
    "Ghost Shroom": 6,
    "Cotton Yarn": 3,
  },
  "Giant Rat": {
    amountMade: 1,
    "Plant Fibre": 9,
    "Fish Bone": 1,
  },
  Glass: {
    amountMade: 1,
    Quartz: 15,
  },
  "Gold Ingot": {
    amountMade: 1,
    Sulphur: 6,
    "Golden Jewellery": 6,
  },
  "Grave Dust": {
    amountMade: 1,
    Bone: 75,
  },
  Grinder: {
    amountMade: 1,
    Plank: 8,
    "Copper Ingot": 4,
    Whetstone: 4,
  },
  "Hollowfang Boots": {
    amountMade: 1,
    "Cotton Yarn": 6,
    Leather: 6,
    "Wool Thread": 6,
  },
  "Hollowfang Chestguard": {
    amountMade: 1,
    "Cotton Yarn": 6,
    Leather: 6,
    "Wool Thread": 6,
  },
  "Hollowfang Gloves": {
    amountMade: 1,
    "Cotton Yarn": 6,
    Leather: 6,
    "Wool Thread": 6,
  },
  "Hollowfang Leggings": {
    amountMade: 1,
    "Cotton Yarn": 6,
    Leather: 6,
    "Wool Thread": 6,
  },
  "Hunter's CLoak": {
    amountMade: 1,
    "Cotton Yarn": 6,
  },
  "Imperial Thread": {
    amountMade: 1,
    "Snow Flower": 9,
    Sunflower: 9,
    "Wool Thread": 6,
  },
  "Iron Axes": {
    amountMade: 1,
    "Iron Ingot": 15,
    Plank: 12,
  },
  "Iron Body": {
    amountMade: 1,
    "Iron Ingot": 3,
  },
  "Iron Castle Key": {
    amountMade: 1,
    "Greater Blood Essence": 15,
    "Gem dust": 180,
    Scourgestone: 60,
    "Reinforced Plank": 45,
  },
  "Iron Ingot": {
    amountMade: 1,
    "Iron Ore": 15,
  },
  "Iron Mace": {
    amountMade: 1,
    "Iron Ingot": 15,
    Plank: 12,
  },
  "Iron Reaper": {
    amountMade: 1,
    "Iron Ingot": 15,
    Plank: 12,
  },
  "Iron Slashers": {
    amountMade: 1,
    "Iron Ingot": 15,
    Plank: 12,
  },
  "Iron Spear": {
    amountMade: 1,
    "Iron Ingot": 15,
    Plank: 12,
  },
  "Iron Sword": {
    amountMade: 1,
    "Iron Ingot": 15,
    Plank: 12,
  },
  "Jewelcrafting Table": {
    amountMade: 1,
    "Greater Blood Essence": 1,
    Glass: 12,
    "Iron Ingot": 16,
  },
  Leather: {
    amountMade: 1,
    "Animal Hide": 12,
  },
  Loom: {
    amountMade: 1,
    Plank: 20,
    "Copper Ingot": 12,
    "Wool Thread": 4,
  },
  "Merciless Hollowfang Boots": {
    amountMade: 1,
    "Hollowfang Boots": 1,
    "Iron Ingot": 9,
  },
  "Merciless Hollowfang Chestguard": {
    amountMade: 1,
    "Hollowfang Chestguard": 1,
    "Iron Ingot": 9,
  },
  "Merciless Hollowfang Gloves": {
    amountMade: 1,
    "Hollowfang Gloves": 1,
    "Iron Ingot": 9,
  },
  "Merciless Hollowfang Leggings": {
    amountMade: 1,
    "Hollowfang Leggings": 1,
    "Iron Ingot": 9,
  },
  "Merciless Iron Axes": {
    amountMade: 1,
    "Iron Sword": 1,
    "Regular Ruby": 3,
    "Greater Blood Essence": 3,
    "Reinforced Plank": 3,
  },
  "Merciless Iron Mace": {
    amountMade: 1,
    "Iron Sword": 1,
    "Regular Topaz": 3,
    "Greater Blood Essence": 3,
    "Reinforced Plank": 3,
  },
  "Merciless Iron Reaper": {
    amountMade: 1,
    "Iron Sword": 1,
    "Regular Miststone": 3,
    "Greater Blood Essence": 3,
    "Reinforced Plank": 3,
  },
  "Merciless Iron Slashers": {
    amountMade: 1,
    "Iron Sword": 1,
    "Regular Amethyst": 3,
    "Greater Blood Essence": 3,
    "Reinforced Plank": 3,
  },
  "Merciless Iron Spear": {
    amountMade: 1,
    "Iron Sword": 1,
    "Regular Emerald": 3,
    "Greater Blood Essence": 3,
    "Reinforced Plank": 3,
  },
  "Merciless Iron Sword": {
    amountMade: 1,
    "Iron Sword": 1,
    "Regular Sapphire": 3,
    "Greater Blood Essence": 3,
    "Reinforced Plank": 3,
  },
  "Mist Brazier": {
    amountMade: 1,
    Stone: 120,
  },
  Mosquito: {
    amountMade: 1,
    "Highland Lotus": 20,
    "Blood Snapper": 1,
  },
  "Palisade Entrance": {
    amountMade: 1,
    Lumber: 80,
    "Plant Fibre": 30,
  },
  "Palisade Gate": {
    amountMade: 1,
    Lumber: 80,
  },
  "Palisade Pillar": {
    amountMade: 1,
    Lumber: 10,
  },
  "Palisade Wall": {
    amountMade: 1,
    Lumber: 80,
    "Plant Fibre": 30,
  },
  Paper: {
    amountMade: 1,
    "Plant Fibre": 3,
    Sawdust: 9,
  },
  "Paper Press": {
    amountMade: 1,
    Plank: 12,
    "Copper Ingot": 12,
  },
  "Phantom's Veil": {
    amountMade: 1,
    "Ghost Yarn": 6,
    "Spectral Dust": 6,
  },
  "Prison Cell": {
    amountMade: 1,
    "Iron Ingot": 12,
  },
  "Pristine Leather": {
    amountMade: 1,
    "Fish Oil": 3,
    "Pristine Hide": 15,
  },
  "Putrid Rat": {
    amountMade: 1,
    "Twilight Snapper": 1,
    "Fish Bone": 3,
    "Grave Dust": 6,
  },
  Rat: {
    amountMade: 1,
    "Plant Fibre": 9,
    Bone: 9,
  },
  "Research Desk": {
    amountMade: 1,
    Plank: 8,
    "Animal Hide": 120,
    Stone: 80,
  },
  Sawmill: {
    amountMade: 1,
    Lumber: 400,
    Stone: 80,
  },
  Schematic: {
    amountMade: 1,
    "Silver Ore": 18,
    "Spectral Dust": 3,
    Scroll: 6,
  },
  Scourgestone: {
    amountMade: 1,
    Whetstone: 1,
    Glass: 3,
    "Grave Dust": 3,
  },
  Scroll: {
    amountMade: 1,
    "Gem dust": 9,
    Paper: 3,
  },
  "Servant Coffin": {
    amountMade: 1,
    Plank: 16,
    "Copper Ingot": 8,
    "Greater Blood Essence": 1,
  },
  Silk: {
    amountMade: 1,
    "Highland Lotus": 6,
    Silkworm: 3,
    Cloth: 3,
  },
  "Simple Workbench": {
    amountMade: 1,
    Plank: 8,
    Stone: 80,
    "Animal Hide": 120,
  },
  "Small Stash": {
    amountMade: 1,
    Lumber: 150,
  },
  Smithy: {
    amountMade: 1,
    "Blood Essence": 200,
    "Iron Ingot": 32,
    Sulphur: 16,
  },
  "Spectral Dust": {
    amountMade: 1,
    "Gem dust": 3,
    "Ghost Crystal": 30,
  },
  Spiderling: {
    amountMade: 1,
    Scales: 20,
    "Golden River Bass": 1,
  },
  "Stone Body": {
    amountMade: 1,
    Clay: 9,
    "Stone Brick": 3,
  },
  "Stone Brick": {
    amountMade: 1,
    Stone: 9,
  },
  "Stone Coffin": {
    amountMade: 1,
    "Stone Brick": 20,
    "Grave Dust": 6,
  },
  "Stone dust": {
    amountMade: 1,
    Stone: 9,
  },
  "Stone Stairs": {
    amountMade: 1,
    "Stone Brick": 16,
  },
  Study: {
    amountMade: 1,
    Paper: 40,
    Plank: 40,
    "Copper Ingot": 8,
    "Grave Dust": 8,
  },
  Sulphur: {
    amountMade: 1,
    "Sulphur Ore": 15,
  },
  "Tailoring Bench": {
    amountMade: 1,
    "Blood Essence": 200,
    Plank: 40,
    "Cotton Yarn": 28,
  },
  Tannery: {
    amountMade: 1,
    Plank: 8,
    "Animal Hide": 160,
  },
  "The Devourer": {
    amountMade: 1,
    Plank: 12,
    "Copper Ingot": 6,
  },
  "The Eye of Twilight": {
    amountMade: 1,
    "Gold Ingot": 4,
    "Spectral Dust": 4,
  },
  Tomb: {
    amountMade: 1,
    Stone: 80,
    Bone: 20,
  },
  "Traveller's Wrap": {
    amountMade: 1,
    Cloth: 3,
    Leather: 3,
  },
  "Vermin Nest": {
    amountMade: 1,
    Stone: 360,
    Bone: 120,
  },
  Whetstone: {
    amountMade: 1,
    "Copper Ingot": 1,
    "Stone dust": 9,
  },
  "Wooden Coffin": {
    amountMade: 1,
    Lumber: 180,
  },
  "Wooden Stairs": {
    amountMade: 1,
    Plank: 6,
  },
  "Woodworking Bench": {
    amountMade: 1,
    Plank: 12,
    "Animal Hide": 60,
  },
  "Wool Thread": {
    amountMade: 1,
    "Fire Blossom": 9,
    "Coarse Thread": 6,
  },
  "'Omen' Slim Bookcase": {
    amountMade: 1,
    Plank: 8,
    "Copper Ingot": 8,
  },
  "'Distinguished' Slim Bookcase": {
    amountMade: 1,
    Plank: 8,
    "Copper Ingot": 8,
  },
  "'Omen' Wide Bookcase": {
    amountMade: 1,
    "Reinforced Plank": 4,
    "Imperial Thread": 4,
  },
  "'Distinguished' Wide Bookcase": {
    amountMade: 1,
    "Reinforced Plank": 4,
    "Imperial Thread": 4,
  },
  "'Omen' Wardrobe": {
    amountMade: 1,
    Plank: 8,
    "Iron Ingot": 8,
  },
  "'Distinguished' Wardrobe": {
    amountMade: 1,
    Plank: 8,
    "Iron Ingot": 8,
  },
  "'Ambrosia' Slim Blood Case": {
    amountMade: 1,
    Plank: 8,
    Glass: 4,
  },
  "'Ambrosia' Wide Blood Case": {
    amountMade: 1,
    "Reinforced Plank": 4,
    Glass: 8,
  },
  "Vampire Lockbox": {
    amountMade: 1,
    Plank: 8,
  },
  "Castle Flooring": {
    amountMade: 1,
    "Blood Essence": 4,
    "Stone Brick": 4,
  },
  "Workshop Flooring": {
    amountMade: 1,
    "Blood Essence": 4,
    Plank: 4,
  },
  "Forge Flooring": {
    amountMade: 1,
    "Blood Essence": 4,
    "Stone Brick": 2,
    "Copper Ingot": 2,
  },
  "Alchemy Lab Flooring": {
    amountMade: 1,
    "Blood Essence": 4,
    "Stone Brick": 4,
    Sulphur: 2,
  },
  "Tailor's Flooring": {
    amountMade: 1,
    "Blood Essence": 4,
    Plank: 4,
    Cloth: 2,
  },
  "Jewel Chamber Flooring": {
    amountMade: 1,
    "Blood Essence": 4,
    "Stone Brick": 4,
    "Gem dust": 2,
  },
  "Prison Flooring": {
    amountMade: 1,
    "Blood Essence": 4,
    "Stone Brick": 4,
    "Iron Ingot": 2,
  },
  "Library Flooring": {
    amountMade: 1,
    "Blood Essence": 4,
    Plank: 4,
  },
  "Crypt Flooring": {
    amountMade: 1,
    "Blood Essence": 4,
    "Stone Brick": 4,
    "Grave Dust": 2,
  },
  Plank: {
    amountMade: 1,
    Lumber: 15,
  },
  Sawdust: {
    amountMade: 1,
    Lumber: 15,
  },
  "Reinforced Plank": {
    amountMade: 1,
    "Iron Ingot": 3,
    Plank: 3,
  },
  "Painting Frame": {
    amountMade: 1,
    Plank: 3,
  },
  "Sculptured Wood": {
    amountMade: 1,
    Plank: 3,
  },
  "Fishing Pole": {
    amountMade: 1,
    Plank: 6,
    "Copper Ingot": 3,
    "Coarse Thread": 3,
  },
  "Hunter's Crossbow": {
    amountMade: 1,
    Plank: 9,
    Leather: 5,
  },
  "Merciless Hunter's Crossbow": {
    amountMade: 1,
    "Hunter's Crossbow": 1,
    "Gem dust": 2,
    Whetstone: 6,
    Leather: 3,
  },
  "Iron Crossbow": {
    amountMade: 1,
    "Iron Ingot": 15,
    Plank: 12,
  },
  "Merciless Iron Crossbow": {
    amountMade: 1,
    "Iron Crossbow": 1,
    "Reinforced Plank": 6,
    "Greater Blood Essence": 3,
  },
  "Dark Silver Crossbow": {
    amountMade: 1,
    "Dark Silver Ingot": 15,
    "Reinforced Plank": 6,
  },
  "Sanguine Crossbow": {
    amountMade: 1,
    "Dark Silver Crossbow": 1,
    "Imperial Thread": 12,
    "Primal Blood Essence": 3,
    "Pristine Leather": 9,
  },
  "Vermin Salve": {
    amountMade: 1,
    Rat: 1,
    "Plant Fibre": 45,
    Bone: 15,
  },
  "Blood Rose Brew": {
    amountMade: 1,
    "Blood Rose": 30,
    "Water-filled Canteen": 1,
  },
  "Fire Resistance Brew": {
    amountMade: 1,
    "Fire Blossom": 30,
    "Fish Oil": 3,
    "Water-filled Canteen": 1,
  },
  "Minor Garlic Resistance Brew": {
    amountMade: 1,
    "Hell's Clarion": 30,
    Rat: 3,
    "Water-filled Canteen": 1,
  },
  "Minor Sun Resistance Brew": {
    amountMade: 1,
    "Mourning Lily": 15,
    "Blood Rose": 15,
    "Water-filled Canteen": 1,
  },
  "Brew of Ferocity": {
    amountMade: 1,
    "Hell's Clarion": 23,
    "Fish Bone": 1,
    "Water-filled Canteen": 1,
  },
  "Enchanted Brew": {
    amountMade: 1,
    "Snow Flower": 23,
    "Fish Bone": 1,
    "Water-filled Canteen": 1,
  },
  "Silver Resistance Brew": {
    amountMade: 1,
    "Snow Flower": 15,
    "Water-filled Canteen": 1,
  },
  "Minor Explosive Box": {
    amountMade: 1,
    Sulphur: 6,
    Plank: 6,
    Whetstone: 3,
  },
  "Empty Glass Bottle": {
    amountMade: 1,
    Glass: 3,
  },
  "Blood Rose Potion": {
    amountMade: 1,
    "Blood Rose": 60,
    "Water-filled Bottle": 1,
  },
  "Holy Resistance Potion": {
    amountMade: 1,
    "Mourning Lily": 45,
    Scourgestone: 2,
    "Water-filled Bottle": 1,
  },
  "Garlic Resistance Potion": {
    amountMade: 1,
    "Hell's Clarion": 15,
    Sunflower: 15,
    Rat: 3,
    "Water-filled Bottle": 1,
  },
  "Silver Resistance Potion": {
    amountMade: 1,
    "Ghost Shroom": 24,
    "Water-filled Bottle": 1,
  },
  "Wrangler's Potion": {
    amountMade: 1,
    "Fire Blossom": 45,
    "Water-filled Bottle": 1,
  },
  "Major Explosive Box": {
    amountMade: 1,
    Sulphur: 9,
    "Reinforced Plank": 6,
    "Gem dust": 30,
  },
  "Holy Resistance Flask": {
    amountMade: 1,
    "Spectral Dust": 3,
    "Holy Resistance Potion": 1,
  },
  "Potion of Rage": {
    amountMade: 1,
    "Fierce Stinger": 1,
    "Hell's Clarion": 68,
    "Water-filled Bottle": 1,
  },
  "Witch Potion": {
    amountMade: 1,
    "Swamp Dweller": 1,
    "Snow Flower": 68,
    "Water-filled Bottle": 1,
  },
  "Siege Golem Stone": {
    amountMade: 1,
    "Stone Brick": 150,
    "Gem dust": 150,
    Scourgestone: 12,
    "Greater Blood Essence": 9,
  },
  "Regular Ruby": {
    amountMade: 1,
    "Crude Ruby": 3,
  },
  "Regular Sapphire": {
    amountMade: 1,
    "Crude Sapphire": 3,
  },
  "Regular Emerald": {
    amountMade: 1,
    "Crude Emerald": 3,
  },
  "Regular Topaz": {
    amountMade: 1,
    "Crude Topaz": 3,
  },
  "Regular Miststone": {
    amountMade: 1,
    "Crude Miststone": 3,
  },
  "Regular Amethyst": {
    amountMade: 1,
    "Crude Amethyst": 3,
  },
  "Flawless Ruby": {
    amountMade: 1,
    "Regular Ruby": 3,
  },
  "Flawless Sapphire": {
    amountMade: 1,
    "Regular Sapphire": 3,
  },
  "Flawless Emerald": {
    amountMade: 1,
    "Regular Emerald": 3,
  },
  "Flawless Topaz": {
    amountMade: 1,
    "Regular Topaz": 3,
  },
  "Flawless Miststone": {
    amountMade: 1,
    "Regular Miststone": 3,
  },
  "Flawless Amethyst": {
    amountMade: 1,
    "Regular Amethyst": 3,
  },
  "Bone Ring": {
    amountMade: 1,
    Bone: 30,
  },
  "Blood Rose Ring": {
    amountMade: 1,
    "Plant Fibre": 60,
    "Blood Rose": 23,
    "Bone Ring": 1,
  },
  "Gravedigger Ring": {
    amountMade: 1,
    "Grave Dust": 6,
    "Mourning Lily": 30,
  },
  "The Ember Chain": {
    amountMade: 1,
    "Greater Blood Essence": 1,
    "Crude Emerald": 3,
    "Grave Dust": 6,
  },
  "The Frozen Eye": {
    amountMade: 1,
    "Greater Blood Essence": 1,
    "Crude Sapphire": 3,
    "Grave Dust": 6,
  },
  "Duskwatcher's Ring": {
    amountMade: 1,
    "Greater Blood Essence": 1,
    "Crude Topaz": 3,
    "Grave Dust": 6,
  },
  "Mist Signet": {
    amountMade: 1,
    "Greater Blood Essence": 1,
    "Crude Miststone": 3,
    "Grave Dust": 6,
  },
  "Scourge Pendant": {
    amountMade: 1,
    Scourgestone: 1,
    Glass: 9,
    Sunflower: 45,
  },
  "Ruby Pendant": {
    amountMade: 1,
    "Regular Ruby": 3,
    Scourgestone: 6,
    "Scourge Pendant": 1,
  },
  "Sapphire Pendant": {
    amountMade: 1,
    "Regular Sapphire": 3,
    Scourgestone: 6,
    "Scourge Pendant": 1,
  },
  "Amethyst Pendant": {
    amountMade: 1,
    "Regular Amethyst": 3,
    Scourgestone: 6,
    "Scourge Pendant": 1,
  },
  "Emerald Pendant": {
    amountMade: 1,
    "Regular Emerald": 3,
    Scourgestone: 6,
    "Scourge Pendant": 1,
  },
  "Misty Necklace": {
    amountMade: 1,
    "Regular Misty": 3,
    Scourgestone: 6,
    "Scourge Pendant": 1,
  },
  "Topaz Amulet": {
    amountMade: 1,
    "Regular Topaz": 3,
    Scourgestone: 6,
    "Scourge Pendant": 1,
  },
  "Corrupted Artefact": {
    amountMade: 1,
    "Golden Jewellery": 6,
    "Spectral Dust": 6,
  },
  "Shard of the Frozen Crypt": {
    amountMade: 1,
    "Flawless Sapphire": 3,
    "Gold Ingot": 6,
    "Corrupted Artefact": 1,
  },
  "Nightstone of the Beast": {
    amountMade: 1,
    "Flawless Amethyst": 3,
    "Gold Ingot": 6,
    "Corrupted Artefact": 1,
  },
  "Jewel of the Wicked Prophet": {
    amountMade: 1,
    "Flawless Ruby": 3,
    "Gold Ingot": 6,
    "Corrupted Artefact": 1,
  },
  "Reinforced Wall": {
    amountMade: 1,
    "Stone Brick": 10,
    Plank: 6,
  },
  "Reinforced Window Wall": {
    amountMade: 1,
    "Stone Brick": 10,
    Plank: 6,
  },
  "Reinforced Entrance": {
    amountMade: 1,
    "Stone Brick": 10,
    Plank: 6,
  },
  "Reinforced Pillar": {
    amountMade: 1,
    "Stone Brick": 1,
  },
  "Castle Gate": {
    amountMade: 1,
    "Stone Brick": 6,
    Plank: 12,
  },
  "Brown Pelt": {
    amountMade: 1,
    "Animal  Hide": 120,
  },
  "Grey Pelt": {
    amountMade: 1,
    "Animal  Hide": 120,
  },
  "'Dux' Emerald Carpet": {
    amountMade: 1,
    "Carpet Roll": 1,
  },
  "'Dux' Cobalt Carpet": {
    amountMade: 1,
    "Carpet Roll": 1,
  },
  "'Dux' Burgundy Carpet": {
    amountMade: 1,
    "Carpet Roll": 1,
  },
  "'Dux' Ivory Carpet": {
    amountMade: 1,
    "Carpet Roll": 1,
  },
  "'Dux' Purple Carpet": {
    amountMade: 1,
    "Carpet Roll": 1,
  },
  "'Dux' Black Carpet": {
    amountMade: 1,
    "Carpet Roll": 1,
  },
  "'Distinguished' Emerald Carpet": {
    amountMade: 1,
    "Carpet Roll": 1,
    "Golden Jewellery": 1,
  },
  "'Distinguished' Cobalt Carpet": {
    amountMade: 1,
    "Carpet Roll": 1,
    "Golden Jewellery": 1,
  },
  "'Distinguished' Burgundy Carpet": {
    amountMade: 1,
    "Carpet Roll": 1,
    "Golden Jewellery": 1,
  },
  "'Distinguished' Ivory Carpet": {
    amountMade: 1,
    "Carpet Roll": 1,
    "Golden Jewellery": 1,
  },
  "'Distinguished' Purple Carpet": {
    amountMade: 1,
    "Carpet Roll": 1,
    "Golden Jewellery": 1,
  },
  "'Distinguished' Black Carpet": {
    amountMade: 1,
    "Carpet Roll": 1,
    "Golden Jewellery": 1,
  },
  "Wooden Window Hatches": {
    amountMade: 1,
    Plank: 4,
  },
  "Window Bars": {
    amountMade: 1,
    "Copper Ingot": 2,
  },
  "Glass Windows - Gothic Clear": {
    amountMade: 1,
    Glass: 4,
    "Gem dust": 2,
  },
  "Glass Windows - Gothic Red": {
    amountMade: 1,
    Glass: 4,
    "Gem dust": 2,
  },
  "Glass Windows - Gothic Pale Blue": {
    amountMade: 1,
    Glass: 4,
    "Gem dust": 2,
  },
  "Glass Windows - Gothic Deep Blue": {
    amountMade: 1,
    Glass: 4,
    "Gem dust": 2,
  },
  "Glass Windows - Gothic Green": {
    amountMade: 1,
    Glass: 4,
    "Gem dust": 2,
  },
  "Glass Windows - Gothic Purple": {
    amountMade: 1,
    Glass: 4,
    "Gem dust": 2,
  },
  "'Imperious' Large Fountain": {
    amountMade: 1,
    "Stone Body": 4,
    "Water-filled Bottle": 4,
    "Golden Jewellery": 6,
  },
  "Dark Silver Sword": {
    amountMade: 1,
    "Dark Silver Ingot": 12,
    "Reinforced Plank": 6,
  },
  "Dark Silver Axes": {
    amountMade: 1,
    "Dark Silver Ingot": 12,
    "Reinforced Plank": 6,
  },
  "Dark Silver Mace": {
    amountMade: 1,
    "Dark Silver Ingot": 12,
    "Reinforced Plank": 6,
  },
  "Dark Silver Spear": {
    amountMade: 1,
    "Dark Silver Ingot": 12,
    "Reinforced Plank": 6,
  },
  "Dark Silver Reaper": {
    amountMade: 1,
    "Dark Silver Ingot": 12,
    "Reinforced Plank": 6,
  },
  "Dark Silver Slashers": {
    amountMade: 1,
    "Dark Silver Ingot": 12,
    "Reinforced Plank": 6,
  },
  "Sanguine Sword": {
    amountMade: 1,
    "Dark Silver Sword": 1,
    "Flawless Sapphire": 3,
    "Primal Blood Essence": 3,
    "Pristine Leather": 9,
  },
  "Sanguine Axes": {
    amountMade: 1,
    "Dark Silver Axes": 1,
    "Flawless Ruby": 3,
    "Primal Blood Essence": 3,
    "Pristine Leather": 9,
  },
  "Sanguine Mace": {
    amountMade: 1,
    "Dark Silver Mace": 1,
    "Flawless Topaz": 3,
    "Primal Blood Essence": 3,
    "Pristine Leather": 9,
  },
  "Sanguine Spear": {
    amountMade: 1,
    "Dark Silver Spear": 1,
    "Flawless Emerald": 3,
    "Primal Blood Essence": 3,
    "Pristine Leather": 9,
  },
  "Sanguine Reaper": {
    amountMade: 1,
    "Dark Silver Reaper": 1,
    "Flawless Miststone": 3,
    "Primal Blood Essence": 3,
    "Pristine Leather": 9,
  },
  "Sanguine Slashers": {
    amountMade: 1,
    "Dark Silver Slashers": 1,
    "Flawless Amethyst": 3,
    "Primal Blood Essence": 3,
    "Pristine Leather": 9,
  },
  "Golden Castle Key": {
    amountMade: 1,
    "Primal Blood Essence": 9,
    "Gold Ingot": 18,
    "Spectral Dust": 30,
    "Dark Silver Ingot": 60,
    "Reinforced Plank": 60,
  },
};
