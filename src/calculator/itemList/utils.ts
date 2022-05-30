import { data } from "calculator/common/data";

const itemNames = Object.keys(data).map((key) => key);

export const searchItems = (searchValue: string) =>
  itemNames.filter((itemName: string) => itemName.toLowerCase().includes(searchValue.toLowerCase())).sort();
