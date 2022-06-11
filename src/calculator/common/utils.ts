import { CalculatorContextProps } from "calculator/common/CalculatorContext";

const STORAGE_KEY_PREFIX = "v-rising-calculator";
export const getStorageKey = (suffix: keyof CalculatorContextProps) => `${STORAGE_KEY_PREFIX}-${suffix}`;

export const loadContextValueFromStorage = (item: keyof CalculatorContextProps) => {
  switch (item) {
    case "useMatchingFloorDiscount":
      return (localStorage.getItem(getStorageKey(item)) ?? "false") === "true" ? true : false;
    case "searchValue":
    case "selectedItem":
    default:
      return localStorage.getItem(getStorageKey(item)) ?? "";
  }
};

export const getImagePath = (itemName: string): string =>
  `/images/${itemName
    .toLowerCase()
    .replaceAll(" ", "-")
    .replaceAll(/[^a-z0-9-]/gi, "")}.png`;
