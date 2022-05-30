type Recipe = {
  [itemName: string]: number;
};

type DataRow = {
  source: string;
  amountMade: number;
  fullPriceRecipes: Recipe[];
  discountedRecipes?: Recipe[];
};

export const data: { [itemName: string]: Recipe } = {
  "Alchemy Table": {
    "Blood Essence": 100,
    Plank: 16,
    Sulphur: 12,
  },
  Anvil: {
    "Primal Blood Essence": 1,
    "Dark Silver Ingot": 32,
    "Reinforced Plank": 12,
  },
  Athenaeum: {
    Scroll: 40,
    Scourgestone: 12,
    "Reinforced Plank": 8,
  },
  "Big Stash": {
    Plank: 6,
    "Copper Ingot": 2,
  },
  "Blood Altar": {
    Stone: 180,
    "Blood Essence": 10,
  },
  "Blood Press": {
    Plank: 12,
    Stone: 120,
  },
  "Bloodmoon Boots": {
    "Dawnthorn Boots": 1,
    "Imperial Thread": 9,
    Silk: 6,
    "Primal Blood Essence": 1,
  },
  "Bloodmoon Chestguard": {
    "Dawnthorn Chestguard": 1,
    "Imperial Thread": 9,
    Silk: 6,
    "Primal Blood Essence": 1,
  },
  "Bloodmoon Gloves": {
    "Dawnthorn Gloves": 1,
    "Imperial Thread": 9,
    Silk: 6,
    "Primal Blood Essence": 1,
  },
  "Bloodmoon Leggings": {
    "Dawnthorn Leggings": 1,
    "Imperial Thread": 9,
    Silk: 6,
    "Primal Blood Essence": 1,
  },
  Border: {
    "Blood Essence": 2,
    Stone: 20,
  },
  "Carpet Roll": {
    Cloth: 3,
  },
  "Castle Heart Rank 1": {
    "Blood Essence": 30,
    Stone: 240,
  },
  "Castle Heart Rank 2": {
    "Copper Ingot": 12,
    Leather: 12,
  },
  "Castle Heart Rank 3": {
    "Iron Ingot": 24,
    Glass: 24,
    "Greater Blood Essence": 4,
  },
  "Castle Heart Rank 4": {
    "Dark Silver Ingot": 24,
    "Spectral Dust": 12,
    "Primal Blood Essence": 1,
  },
  "Castle Throne": {
    "Stone Brick": 24,
    "Iron Ingot": 16,
    "Greater Blood Essence": 4,
  },
  "Clay Mold": {
    Clay: 9,
    "Water-filled Canteen": 1,
  },
  Cloth: {
    Leather: 3,
    "Plant Fibre": 9,
  },
  "Cotton Yarn": {
    Cotton: 15,
  },
  "Copper Ingot": {
    "Copper Ore": 15,
  },
  "Dark Silver Ingot": {
    Scourgestone: 1,
    "Silver Ore": 15,
  },
  "Dawnthorn Boots": {
    Scales: 120,
    "Pristine Leather": 9,
    "Ghost Yarn": 6,
  },
  "Dawnthorn Chestguard": {
    Scales: 120,
    "Pristine Leather": 9,
    "Ghost Yarn": 6,
  },
  "Dawnthorn Gloves": {
    Scales: 120,
    "Pristine Leather": 9,
    "Ghost Yarn": 6,
  },
  "Dawnthorn Leggings": {
    Scales: 120,
    "Pristine Leather": 9,
    "Ghost Yarn": 6,
  },
  "Empty Canteen": {
    "Plant Fibre": 15,
    Leather: 3,
  },
  Furnace: {
    Stone: 480,
    "Copper Ore": 60,
  },
  "Gem Cutting Table": {
    "Iron Ingot": 12,
    "Gem dust": 60,
    "Stone Brick": 24,
  },
  "Ghost Yarn": {
    "Ghost Shroom": 6,
    "Cotton Yarn": 3,
  },
  "Giant Rat": {
    "Plant Fibre": 9,
    "Fish Bone": 1,
  },
  Glass: {
    Quartz: 15,
  },
  "Gold Ingot": {
    Sulphur: 6,
    "Golden Jewellery": 6,
  },
  "Grave Dust": {
    Bone: 75,
  },
  Grinder: {
    Plank: 8,
    "Copper Ingot": 4,
    Whetstone: 4,
  },
  "Hollowfang Boots": {
    "Cotton Yarn": 6,
    Leather: 6,
    "Wool Thread": 6,
  },
  "Hollowfang Chestguard": {
    "Cotton Yarn": 6,
    Leather: 6,
    "Wool Thread": 6,
  },
  "Hollowfang Gloves": {
    "Cotton Yarn": 6,
    Leather: 6,
    "Wool Thread": 6,
  },
  "Hollowfang Leggings": {
    "Cotton Yarn": 6,
    Leather: 6,
    "Wool Thread": 6,
  },
  "Hunter's CLoak": {
    "Cotton Yarn": 6,
  },
  "Imperial Thread": {
    "Snow Flower": 9,
    Sunflower: 9,
    "Wool Thread": 6,
  },
  "Iron Axes": {
    "Iron Ingot": 15,
    Plank: 12,
  },
  "Iron Body": {
    "Iron Ingot": 3,
  },
  "Iron Castle Key": {
    "Greater Blood Essence": 15,
    "Gem dust": 180,
    Scourgestone: 60,
    "Reinforced Plank": 45,
  },
  "Iron Ingot": {
    "Iron Ore": 15,
  },
  "Iron Mace": {
    "Iron Ingot": 15,
    Plank: 12,
  },
  "Iron Reaper": {
    "Iron Ingot": 15,
    Plank: 12,
  },
  "Iron Slashers": {
    "Iron Ingot": 15,
    Plank: 12,
  },
  "Iron Spear": {
    "Iron Ingot": 15,
    Plank: 12,
  },
  "Iron Sword": {
    "Iron Ingot": 15,
    Plank: 12,
  },
  "Jewelcrafting Table": {
    "Greater Blood Essence": 1,
    Glass: 12,
    "Iron Ingot": 16,
  },
  Leather: {
    "Animal Hide": 12,
  },
  Loom: {
    Plank: 20,
    "Copper Ingot": 12,
    "Wool Thread": 4,
  },
  "Merciless Hollowfang Boots": {
    "Hollowfang Boots": 1,
    "Iron Ingot": 9,
  },
  "Merciless Hollowfang Chestguard": {
    "Hollowfang Chestguard": 1,
    "Iron Ingot": 9,
  },
  "Merciless Hollowfang Gloves": {
    "Hollowfang Gloves": 1,
    "Iron Ingot": 9,
  },
  "Merciless Hollowfang Leggings": {
    "Hollowfang Leggings": 1,
    "Iron Ingot": 9,
  },
  "Merciless Iron Axes": {
    "Iron Sword": 1,
    "Regular Ruby": 3,
    "Greater Blood Essence": 3,
    "Reinforced Plank": 3,
  },
  "Merciless Iron Mace": {
    "Iron Sword": 1,
    "Regular Topaz": 3,
    "Greater Blood Essence": 3,
    "Reinforced Plank": 3,
  },
  "Merciless Iron Reaper": {
    "Iron Sword": 1,
    "Regular Miststone": 3,
    "Greater Blood Essence": 3,
    "Reinforced Plank": 3,
  },
  "Merciless Iron Slashers": {
    "Iron Sword": 1,
    "Regular Amethyst": 3,
    "Greater Blood Essence": 3,
    "Reinforced Plank": 3,
  },
  "Merciless Iron Spear": {
    "Iron Sword": 1,
    "Regular Emerald": 3,
    "Greater Blood Essence": 3,
    "Reinforced Plank": 3,
  },
  "Merciless Iron Sword": {
    "Iron Sword": 1,
    "Regular Sapphire": 3,
    "Greater Blood Essence": 3,
    "Reinforced Plank": 3,
  },
  "Mist Brazier": {
    Stone: 120,
  },
  Mosquito: {
    "Highland Lotus": 20,
    "Blood Snapper": 1,
  },
  "Palisade Entrance": {
    Lumber: 80,
    "Plant Fibre": 30,
  },
  "Palisade Gate": {
    Lumber: 80,
  },
  "Palisade Pillar": {
    Lumber: 10,
  },
  "Palisade Wall": {
    Lumber: 80,
    "Plant Fibre": 30,
  },
  Paper: {
    "Plant Fibre": 3,
    Sawdust: 9,
  },
  "Paper Press": {
    Plank: 12,
    "Copper Ingot": 12,
  },
  "Phantom's Veil": {
    "Ghost Yarn": 6,
    "Spectral Dust": 6,
  },
  "Prison Cell": {
    "Iron Ingot": 12,
  },
  "Pristine Leather": {
    "Fish Oil": 3,
    "Pristine Hide": 15,
  },
  "Putrid Rat": {
    "Twilight Snapper": 1,
    "Fish Bone": 3,
    "Grave Dust": 6,
  },
  Rat: {
    "Plant Fibre": 9,
    Bone: 9,
  },
  "Research Desk": {
    Plank: 8,
    "Animal Hide": 120,
    Stone: 80,
  },
  Sawmill: {
    Lumber: 400,
    Stone: 80,
  },
  Schematic: {
    "Silver Ore": 18,
    "Spectral Dust": 3,
    Scroll: 6,
  },
  Scourgestone: {
    Whetstone: 1,
    Glass: 3,
    "Grave Dust": 3,
  },
  Scroll: {
    "Gem dust": 9,
    Paper: 3,
  },
  "Servant Coffin": {
    Plank: 16,
    "Copper Ingot": 8,
    "Greater Blood Essence": 1,
  },
  Silk: {
    "Highland Lotus": 6,
    Silkworm: 3,
    Cloth: 3,
  },
  "Simple Workbench": {
    Plank: 8,
    Stone: 80,
    "Animal Hide": 120,
  },
  "Small Stash": {
    Lumber: 150,
  },
  Smithy: {
    "Blood Essence": 200,
    "Iron Ingot": 32,
    Sulphur: 16,
  },
  "Spectral Dust": {
    "Gem dust": 3,
    "Ghost Crystal": 30,
  },
  Spiderling: {
    Scales: 20,
    "Golden River Bass": 1,
  },
  "Stone Body": {
    Clay: 9,
    "Stone Brick": 3,
  },
  "Stone Brick": {
    Stone: 9,
  },
  "Stone Coffin": {
    "Stone Brick": 20,
    "Grave Dust": 6,
  },
  "Stone dust": {
    Stone: 9,
  },
  "Stone Stairs": {
    "Stone Brick": 16,
  },
  Study: {
    Paper: 40,
    Plank: 40,
    "Copper Ingot": 8,
    "Grave Dust": 8,
  },
  Sulphur: {
    "Sulphur Ore": 15,
  },
  "Tailoring Bench": {
    "Blood Essence": 200,
    Plank: 40,
    "Cotton Yarn": 28,
  },
  Tannery: {
    Plank: 8,
    "Animal Hide": 160,
  },
  "The Devourer": {
    Plank: 12,
    "Copper Ingot": 6,
  },
  "The Eye of Twilight": {
    "Gold Ingot": 4,
    "Spectral Dust": 4,
  },
  Tomb: {
    Stone: 80,
    Bone: 20,
  },
  "Traveller's Wrap": {
    Cloth: 3,
    Leather: 3,
  },
  "Vermin Nest": {
    Stone: 360,
    Bone: 120,
  },
  Whetstone: {
    "Copper Ingot": 1,
    "Stone dust": 9,
  },
  "Wooden Coffin": {
    Lumber: 180,
  },
  "Wooden Stairs": {
    Plank: 6,
  },
  "Woodworking Bench": {
    Plank: 12,
    "Animal Hide": 60,
  },
  "Wool Thread": {
    "Fire Blossom": 9,
    "Coarse Thread": 6,
  },
  "'Omen' Slim Bookcase": {
    Plank: 8,
    "Copper Ingot": 8,
  },
  "'Distinguished' Slim Bookcase": {
    Plank: 8,
    "Copper Ingot": 8,
  },
  "'Omen' Wide Bookcase": {
    "Reinforced Plank": 4,
    "Imperial Thread": 4,
  },
  "'Distinguished' Wide Bookcase": {
    "Reinforced Plank": 4,
    "Imperial Thread": 4,
  },
  "'Omen' Wardrobe": {
    Plank: 8,
    "Iron Ingot": 8,
  },
  "'Distinguished' Wardrobe": {
    Plank: 8,
    "Iron Ingot": 8,
  },
  "'Ambrosia' Slim Blood Case": {
    Plank: 8,
    Glass: 4,
  },
  "'Ambrosia' Wide Blood Case": {
    "Reinforced Plank": 4,
    Glass: 8,
  },
  "Vampire Lockbox": {
    Plank: 8,
  },
  "Castle Flooring": {
    "Blood Essence": 4,
    "Stone Brick": 4,
  },
  "Workshop Flooring": {
    "Blood Essence": 4,
    Plank: 4,
  },
  "Forge Flooring": {
    "Blood Essence": 4,
    "Stone Brick": 2,
    "Copper Ingot": 2,
  },
  "Alchemy Lab Flooring": {
    "Blood Essence": 4,
    "Stone Brick": 4,
    Sulphur: 2,
  },
  "Tailor's Flooring": {
    "Blood Essence": 4,
    Plank: 4,
    Cloth: 2,
  },
  "Jewel Chamber Flooring": {
    "Blood Essence": 4,
    "Stone Brick": 4,
    "Gem dust": 2,
  },
  "Prison Flooring": {
    "Blood Essence": 4,
    "Stone Brick": 4,
    "Iron Ingot": 2,
  },
  "Library Flooring": {
    "Blood Essence": 4,
    Plank: 4,
  },
  "Crypt Flooring": {
    "Blood Essence": 4,
    "Stone Brick": 4,
    "Grave Dust": 2,
  },
  Plank: {
    Lumber: 15,
  },
  Sawdust: {
    Lumber: 15,
  },
  "Reinforced Plank": {
    "Iron Ingot": 3,
    Plank: 3,
  },
  "Painting Frame": {
    Plank: 3,
  },
  "Sculptured Wood": {
    Plank: 3,
  },
  "Fishing Pole": {
    Plank: 6,
    "Copper Ingot": 3,
    "Coarse Thread": 3,
  },
  "Hunter's Crossbow": {
    Plank: 9,
    Leather: 5,
  },
  "Merciless Hunter's Crossbow": {
    "Hunter's Crossbow": 1,
    "Gem dust": 2,
    Whetstone: 6,
    Leather: 3,
  },
  "Iron Crossbow": {
    "Iron Ingot": 15,
    Plank: 12,
  },
  "Merciless Iron Crossbow": {
    "Iron Crossbow": 1,
    "Reinforced Plank": 6,
    "Greater Blood Essence": 3,
  },
  "Dark Silver Crossbow": {
    "Dark Silver Ingot": 15,
    "Reinforced Plank": 6,
  },
  "Sanguine Crossbow": {
    "Dark Silver Crossbow": 1,
    "Imperial Thread": 12,
    "Primal Blood Essence": 3,
    "Pristine Leather": 9,
  },
  "Vermin Salve": {
    Rat: 1,
    "Plant Fibre": 45,
    Bone: 15,
  },
  "Blood Rose Brew": {
    "Blood Rose": 30,
    "Water-filled Canteen": 1,
  },
  "Fire Resistance Brew": {
    "Fire Blossom": 30,
    "Fish Oil": 3,
    "Water-filled Canteen": 1,
  },
  "Minor Garlic Resistance Brew": {
    "Hell's Clarion": 30,
    Rat: 3,
    "Water-filled Canteen": 1,
  },
  "Minor Sun Resistance Brew": {
    "Mourning Lily": 15,
    "Blood Rose": 15,
    "Water-filled Canteen": 1,
  },
  "Brew of Ferocity": {
    "Hell's Clarion": 23,
    "Fish Bone": 1,
    "Water-filled Canteen": 1,
  },
  "Enchanted Brew": {
    "Snow Flower": 23,
    "Fish Bone": 1,
    "Water-filled Canteen": 1,
  },
  "Silver Resistance Brew": {
    "Snow Flower": 15,
    "Water-filled Canteen": 1,
  },
  "Minor Explosive Box": {
    Sulphur: 6,
    Plank: 6,
    Whetstone: 3,
  },
  "Empty Glass Bottle": {
    Glass: 3,
  },
  "Blood Rose Potion": {
    "Blood Rose": 60,
    "Water-filled Bottle": 1,
  },
  "Holy Resistance Potion": {
    "Mourning Lily": 45,
    Scourgestone: 2,
    "Water-filled Bottle": 1,
  },
  "Garlic Resistance Potion": {
    "Hell's Clarion": 15,
    Sunflower: 15,
    Rat: 3,
    "Water-filled Bottle": 1,
  },
  "Silver Resistance Potion": {
    "Ghost Shroom": 24,
    "Water-filled Bottle": 1,
  },
  "Wrangler's Potion": {
    "Fire Blossom": 45,
    "Water-filled Bottle": 1,
  },
  "Major Explosive Box": {
    Sulphur: 9,
    "Reinforced Plank": 6,
    "Gem dust": 30,
  },
  "Holy Resistance Flask": {
    "Spectral Dust": 3,
    "Holy Resistance Potion": 1,
  },
  "Potion of Rage": {
    "Fierce Stinger": 1,
    "Hell's Clarion": 68,
    "Water-filled Bottle": 1,
  },
  "Witch Potion": {
    "Swamp Dweller": 1,
    "Snow Flower": 68,
    "Water-filled Bottle": 1,
  },
  "Siege Golem Stone": {
    "Stone Brick": 150,
    "Gem dust": 150,
    Scourgestone: 12,
    "Greater Blood Essence": 9,
  },
  "Regular Ruby": {
    "Crude Ruby": 3,
  },
  "Regular Sapphire": {
    "Crude Sapphire": 3,
  },
  "Regular Emerald": {
    "Crude Emerald": 3,
  },
  "Regular Topaz": {
    "Crude Topaz": 3,
  },
  "Regular Miststone": {
    "Crude Miststone": 3,
  },
  "Regular Amethyst": {
    "Crude Amethyst": 3,
  },
  "Flawless Ruby": {
    "Regular Ruby": 3,
  },
  "Flawless Sapphire": {
    "Regular Sapphire": 3,
  },
  "Flawless Emerald": {
    "Regular Emerald": 3,
  },
  "Flawless Topaz": {
    "Regular Topaz": 3,
  },
  "Flawless Miststone": {
    "Regular Miststone": 3,
  },
  "Flawless Amethyst": {
    "Regular Amethyst": 3,
  },
  "Bone Ring": {
    Bone: 30,
  },
  "Blood Rose Ring": {
    "Plant Fibre": 60,
    "Blood Rose": 23,
    "Bone Ring": 1,
  },
  "Gravedigger Ring": {
    "Grave Dust": 6,
    "Mourning Lily": 30,
  },
  "The Ember Chain": {
    "Greater Blood Essence": 1,
    "Crude Emerald": 3,
    "Grave Dust": 6,
  },
  "The Frozen Eye": {
    "Greater Blood Essence": 1,
    "Crude Sapphire": 3,
    "Grave Dust": 6,
  },
  "Duskwatcher's Ring": {
    "Greater Blood Essence": 1,
    "Crude Topaz": 3,
    "Grave Dust": 6,
  },
  "Mist Signet": {
    "Greater Blood Essence": 1,
    "Crude Miststone": 3,
    "Grave Dust": 6,
  },
  "Scourge Pendant": {
    Scourgestone: 1,
    Glass: 9,
    Sunflower: 45,
  },
  "Ruby Pendant": {
    "Regular Ruby": 3,
    Scourgestone: 6,
    "Scourge Pendant": 1,
  },
  "Sapphire Pendant": {
    "Regular Sapphire": 3,
    Scourgestone: 6,
    "Scourge Pendant": 1,
  },
  "Amethyst Pendant": {
    "Regular Amethyst": 3,
    Scourgestone: 6,
    "Scourge Pendant": 1,
  },
  "Emerald Pendant": {
    "Regular Emerald": 3,
    Scourgestone: 6,
    "Scourge Pendant": 1,
  },
  "Misty Necklace": {
    "Regular Misty": 3,
    Scourgestone: 6,
    "Scourge Pendant": 1,
  },
  "Topaz Amulet": {
    "Regular Topaz": 3,
    Scourgestone: 6,
    "Scourge Pendant": 1,
  },
  "Corrupted Artefact": {
    "Golden Jewellery": 6,
    "Spectral Dust": 6,
  },
  "Shard of the Frozen Crypt": {
    "Flawless Sapphire": 3,
    "Gold Ingot": 6,
    "Corrupted Artefact": 1,
  },
  "Nightstone of the Beast": {
    "Flawless Amethyst": 3,
    "Gold Ingot": 6,
    "Corrupted Artefact": 1,
  },
  "Jewel of the Wicked Prophet": {
    "Flawless Ruby": 3,
    "Gold Ingot": 6,
    "Corrupted Artefact": 1,
  },
  "Reinforced Wall": {
    "Stone Brick": 10,
    Plank: 6,
  },
  "Reinforced Window Wall": {
    "Stone Brick": 10,
    Plank: 6,
  },
  "Reinforced Entrance": {
    "Stone Brick": 10,
    Plank: 6,
  },
  "Reinforced Pillar": {
    "Stone Brick": 1,
  },
  "Castle Gate": {
    "Stone Brick": 6,
    Plank: 12,
  },
  "Brown Pelt": {
    "Animal  Hide": 120,
  },
  "Grey Pelt": {
    "Animal  Hide": 120,
  },
  "'Dux' Emerald Carpet": {
    "Carpet Roll": 1,
  },
  "'Dux' Cobalt Carpet": {
    "Carpet Roll": 1,
  },
  "'Dux' Burgundy Carpet": {
    "Carpet Roll": 1,
  },
  "'Dux' Ivory Carpet": {
    "Carpet Roll": 1,
  },
  "'Dux' Purple Carpet": {
    "Carpet Roll": 1,
  },
  "'Dux' Black Carpet": {
    "Carpet Roll": 1,
  },
  "'Distinguished' Emerald Carpet": {
    "Carpet Roll": 1,
    "Golden Jewellery": 1,
  },
  "'Distinguished' Cobalt Carpet": {
    "Carpet Roll": 1,
    "Golden Jewellery": 1,
  },
  "'Distinguished' Burgundy Carpet": {
    "Carpet Roll": 1,
    "Golden Jewellery": 1,
  },
  "'Distinguished' Ivory Carpet": {
    "Carpet Roll": 1,
    "Golden Jewellery": 1,
  },
  "'Distinguished' Purple Carpet": {
    "Carpet Roll": 1,
    "Golden Jewellery": 1,
  },
  "'Distinguished' Black Carpet": {
    "Carpet Roll": 1,
    "Golden Jewellery": 1,
  },
  "Wooden Window Hatches": {
    Plank: 4,
  },
  "Window Bars": {
    "Copper Ingot": 2,
  },
  "Glass Windows - Gothic Clear": {
    Glass: 4,
    "Gem dust": 2,
  },
  "Glass Windows - Gothic Red": {
    Glass: 4,
    "Gem dust": 2,
  },
  "Glass Windows - Gothic Pale Blue": {
    Glass: 4,
    "Gem dust": 2,
  },
  "Glass Windows - Gothic Deep Blue": {
    Glass: 4,
    "Gem dust": 2,
  },
  "Glass Windows - Gothic Green": {
    Glass: 4,
    "Gem dust": 2,
  },
  "Glass Windows - Gothic Purple": {
    Glass: 4,
    "Gem dust": 2,
  },
  "'Imperious' Large Fountain": {
    "Stone Body": 4,
    "Water-filled Bottle": 4,
    "Golden Jewellery": 6,
  },
  "Dark Silver Sword": {
    "Dark Silver Ingot": 12,
    "Reinforced Plank": 6,
  },
  "Dark Silver Axes": {
    "Dark Silver Ingot": 12,
    "Reinforced Plank": 6,
  },
  "Dark Silver Mace": {
    "Dark Silver Ingot": 12,
    "Reinforced Plank": 6,
  },
  "Dark Silver Spear": {
    "Dark Silver Ingot": 12,
    "Reinforced Plank": 6,
  },
  "Dark Silver Reaper": {
    "Dark Silver Ingot": 12,
    "Reinforced Plank": 6,
  },
  "Dark Silver Slashers": {
    "Dark Silver Ingot": 12,
    "Reinforced Plank": 6,
  },
  "Sanguine Sword": {
    "Dark Silver Sword": 1,
    "Flawless Sapphire": 3,
    "Primal Blood Essence": 3,
    "Pristine Leather": 9,
  },
  "Sanguine Axes": {
    "Dark Silver Axes": 1,
    "Flawless Ruby": 3,
    "Primal Blood Essence": 3,
    "Pristine Leather": 9,
  },
  "Sanguine Mace": {
    "Dark Silver Mace": 1,
    "Flawless Topaz": 3,
    "Primal Blood Essence": 3,
    "Pristine Leather": 9,
  },
  "Sanguine Spear": {
    "Dark Silver Spear": 1,
    "Flawless Emerald": 3,
    "Primal Blood Essence": 3,
    "Pristine Leather": 9,
  },
  "Sanguine Reaper": {
    "Dark Silver Reaper": 1,
    "Flawless Miststone": 3,
    "Primal Blood Essence": 3,
    "Pristine Leather": 9,
  },
  "Sanguine Slashers": {
    "Dark Silver Slashers": 1,
    "Flawless Amethyst": 3,
    "Primal Blood Essence": 3,
    "Pristine Leather": 9,
  },
  "Golden Castle Key": {
    "Primal Blood Essence": 9,
    "Gold Ingot": 18,
    "Spectral Dust": 30,
    "Dark Silver Ingot": 60,
    "Reinforced Plank": 60,
  },
};
