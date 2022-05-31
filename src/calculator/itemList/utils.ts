import { data } from "calculator/common/data";

const itemNames = Object.keys(data).map((key) => key);

export const searchItems = (searchValue: string) => {
  const searchValueLowerCase = searchValue.toLowerCase();

  const itemNamesContainingSearchValue = itemNames
    .filter((itemName) => itemName.toLowerCase().includes(searchValueLowerCase))
    .sort();

  const itemNamesWithIngredientsContainingSearchValue = itemNames
    .filter(
      (itemName) =>
        !itemNamesContainingSearchValue.includes(itemName) &&
        data[itemName].fullPriceRecipes.some((recipe) =>
          Object.keys(recipe).some((ingredient) => ingredient.toLowerCase().includes(searchValueLowerCase)),
        ),
    )
    .sort();

  return [...itemNamesContainingSearchValue, ...itemNamesWithIngredientsContainingSearchValue];
};
