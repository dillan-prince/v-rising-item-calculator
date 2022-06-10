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

export const characterRecipes: DataType = {
  "Bone Sword": {
    source: "Character Inventory > Crafting",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Bone: 30,
      },
    ],
  },
  "Bone Axes": {
    source: "Character Inventory > Crafting",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Bone: 30,
      },
    ],
  },
  "Bone Mace": {
    source: "Character Inventory > Crafting",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Bone: 30,
      },
    ],
  },
  "Bone Spear": {
    source: "Character Inventory > Crafting",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Bone: 30,
      },
    ],
  },
  "Bone Ring": {
    source: "Character Inventory > Crafting",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Bone: 40,
      },
    ],
  },
  "Boneguard Chestguard": {
    source: "Character Inventory > Crafting",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Bone: 30,
      },
    ],
  },
  "Boneguard Leggings": {
    source: "Character Inventory > Crafting",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Bone: 30,
      },
    ],
  },
  "Boneguard Gloves": {
    source: "Character Inventory > Crafting",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Bone: 20,
        "Animal Hide": 30,
      },
    ],
  },
  "Boneguard Boots": {
    source: "Character Inventory > Crafting",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Bone: 20,
        "Animal Hide": 30,
      },
    ],
  },
};

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

export const jewelcraftingTableRecipes: DataType = {
  "Bone Ring": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Bone: 40,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Bone: 30,
      },
    ],
  },
  "Blood Rose Ring": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
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
    source: "Jeweller's Chamber > Jewelcrafting Table",
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
    source: "Jeweller's Chamber > Jewelcrafting Table",
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
    source: "Jeweller's Chamber > Jewelcrafting Table",
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
    source: "Jeweller's Chamber > Jewelcrafting Table",
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
    source: "Jeweller's Chamber > Jewelcrafting Table",
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
  "Scourge Pendant": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        Scourgestone: 1,
        Glass: 12,
        Sunflower: 60,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        Scourgestone: 1,
        Glass: 9,
        Sunflower: 45,
      },
    ],
  },
  "Ruby Pendant": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Regular Ruby": 4,
        Scourgestone: 8,
        "Scourge Pendant": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Regular Ruby": 3,
        Scourgestone: 6,
        "Scourge Pendant": 1,
      },
    ],
  },
  "Sapphire Pendant": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Regular Sapphire": 4,
        Scourgestone: 8,
        "Scourge Pendant": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Regular Sapphire": 3,
        Scourgestone: 6,
        "Scourge Pendant": 1,
      },
    ],
  },
  "Amethyst Pendant": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Regular Amethyst": 4,
        Scourgestone: 8,
        "Scourge Pendant": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Regular Amethyst": 3,
        Scourgestone: 6,
        "Scourge Pendant": 1,
      },
    ],
  },
  "Emerald Pendant": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Regular Emerald": 4,
        Scourgestone: 8,
        "Scourge Pendant": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Regular Emerald": 3,
        Scourgestone: 6,
        "Scourge Pendant": 1,
      },
    ],
  },
  "Misty Pendant": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Regular Miststone": 4,
        Scourgestone: 8,
        "Scourge Pendant": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Regular Miststone": 3,
        Scourgestone: 6,
        "Scourge Pendant": 1,
      },
    ],
  },
  "Topaz Pendant": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Regular Topaz": 4,
        Scourgestone: 8,
        "Scourge Pendant": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Regular Topaz": 3,
        Scourgestone: 6,
        "Scourge Pendant": 1,
      },
    ],
  },
  "Corrupted Artefact": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Golden Jewellery": 8,
        "Spectral Dust": 8,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Golden Jewellery": 6,
        "Spectral Dust": 6,
      },
    ],
  },
  "Shard of the Frozen Crypt": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Flawless Sapphire": 4,
        "Gold Ingot": 8,
        "Corrupted Artefact": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Flawless Sapphire": 3,
        "Gold Ingot": 6,
        "Corrupted Artefact": 1,
      },
    ],
  },
  "Nightstone of the Beast": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Flawless Amethyst": 4,
        "Gold Ingot": 8,
        "Corrupted Artefact": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Flawless Amethyst": 3,
        "Gold Ingot": 6,
        "Corrupted Artefact": 1,
      },
    ],
  },
  "Jewel of the Wicked Prophet": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Flawless Ruby": 4,
        "Gold Ingot": 8,
        "Corrupted Artefact": 1,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Flawless Ruby": 3,
        "Gold Ingot": 6,
        "Corrupted Artefact": 1,
      },
    ],
  },
  "Blood Key": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Gem dust": 400,
        "Dark Silver Ingot": 28,
        "Gold Ingot": 8,
        "Primal Blood Essence": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Gem dust": 300,
        "Dark Silver Ingot": 21,
        "Gold Ingot": 6,
        "Primal Blood Essence": 3,
      },
    ],
  },
};

export const gemCuttingTableRecipes: DataType = {
  "Siege Golem Stone": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Stone Brick": 200,
        "Gem dust": 200,
        Scourgestone: 16,
        "Greater Blood Essence": 12,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Stone Brick": 150,
        "Gem dust": 150,
        Scourgestone: 12,
        "Greater Blood Essence": 9,
      },
    ],
  },
  "Regular Ruby": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Crude Ruby": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Crude Ruby": 3,
      },
    ],
  },
  "Regular Sapphire": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Crude Sapphire": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Crude Sapphire": 3,
      },
    ],
  },
  "Regular Emerald": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Crude Emerald": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Crude Emerald": 3,
      },
    ],
  },
  "Regular Topaz": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Crude Topaz": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Crude Topaz": 3,
      },
    ],
  },
  "Regular Miststone": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Crude Miststone": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Crude Miststone": 3,
      },
    ],
  },
  "Regular Amethyst": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Crude Amethyst": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Crude Amethyst": 3,
      },
    ],
  },
  "Flawless Ruby": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Regular Ruby": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Regular Ruby": 3,
      },
    ],
  },
  "Flawless Sapphire": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Regular Sapphire": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Regular Sapphire": 3,
      },
    ],
  },
  "Flawless Emerald": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Regular Emerald": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Regular Emerald": 3,
      },
    ],
  },
  "Flawless Topaz": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Regular Topaz": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Regular Topaz": 3,
      },
    ],
  },
  "Flawless Miststone": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Regular Miststone": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Regular Miststone": 3,
      },
    ],
  },
  "Flawless Amethyst": {
    source: "Jeweller's Chamber > Jewelcrafting Table",
    fullPriceRecipes: [
      {
        amountMade: 1,
        "Regular Amethyst": 4,
      },
    ],
    discountedRecipes: [
      {
        amountMade: 1,
        "Regular Amethyst": 3,
      },
    ],
  },
};

export const jewellerChamberRecipes: DataType = {
  ...jewelcraftingTableRecipes,
  ...gemCuttingTableRecipes,
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
  ...libraryRecipes,
  ...jewellerChamberRecipes,
  ...tailorRecipes,
  ...alchemyLabRecipes,
  ...forgeRecipes,
  ...workshopRecipes,
};
