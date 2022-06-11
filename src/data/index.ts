import { alchemyLabRecipes } from "data/alchemyLab";
import { characterRecipes } from "data/character";
import { forgeRecipes } from "data/forge";
import { jewellerChamberRecipes } from "data/jewellerChamber";
import { libraryRecipes } from "data/library";
import { tailorRecipes } from "data/tailor";
import { workshopRecipes } from "data/workshop";

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

export default {
  ...characterRecipes,
  ...libraryRecipes,
  ...jewellerChamberRecipes,
  ...tailorRecipes,
  ...alchemyLabRecipes,
  ...forgeRecipes,
  ...workshopRecipes,
} as DataType;
