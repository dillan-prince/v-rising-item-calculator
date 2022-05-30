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
        Object.keys(data[itemName]).some((ingredientName) =>
          ingredientName.toLowerCase().includes(searchValueLowerCase),
        ) && !itemNamesContainingSearchValue.includes(itemName),
    )
    .sort();

  return [...itemNamesContainingSearchValue, ...itemNamesWithIngredientsContainingSearchValue];
};
