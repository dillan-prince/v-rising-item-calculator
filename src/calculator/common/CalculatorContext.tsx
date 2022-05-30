import { getStorageKey, loadContextValueFromStorage } from "calculator/common/utils";
import { createContext, PropsWithChildren, useState } from "react";

export type CalculatorContextProps = {
  searchValue: string;
  selectedItem: string;
  useMatchingFloorDiscount: boolean;
};

const EMPTY_CALCULATOR_CONTEXT_VALUES: CalculatorContextProps = Object.keys({
  searchValue: "",
  selectedItem: "",
  useMatchingFloorDiscount: false,
} as CalculatorContextProps).reduce(
  (initialValues, key) => ({
    ...initialValues,
    [key]: loadContextValueFromStorage(key as keyof CalculatorContextProps),
  }),
  {} as CalculatorContextProps,
);

const CalculatorContext = createContext<
  CalculatorContextProps & {
    updateSearchValue: (newValue: string) => void;
    updateSelectedItem: (newValue: string) => void;
    updateUseMatchingFloorDiscount: (newValue: boolean) => void;
  }
>({
  ...EMPTY_CALCULATOR_CONTEXT_VALUES,
  updateSearchValue: () => {},
  updateSelectedItem: () => {},
  updateUseMatchingFloorDiscount: () => {},
});

type CalculatorContextProviderProps = {};

export const CalculatorContextProvider = ({ children }: PropsWithChildren<CalculatorContextProviderProps>) => {
  const [searchValue, setSearchValue] = useState(EMPTY_CALCULATOR_CONTEXT_VALUES.searchValue);
  const [selectedItem, setSelectedItem] = useState(EMPTY_CALCULATOR_CONTEXT_VALUES.selectedItem);
  const [useMatchingFloorDiscount, setUseMatchingFloorDiscount] = useState(
    EMPTY_CALCULATOR_CONTEXT_VALUES.useMatchingFloorDiscount,
  );

  const updateSearchValue = (newValue: string) => {
    localStorage.setItem(getStorageKey("searchValue"), newValue);
    setSearchValue(newValue);
  };

  const updateSelectedItem = (newValue: string) => {
    localStorage.setItem(getStorageKey("selectedItem"), newValue);
    setSelectedItem(newValue);
  };

  const updateUseMatchingFloorDiscount = (newValue: boolean) => {
    localStorage.setItem(getStorageKey("useMatchingFloorDiscount"), newValue.toString());
    setUseMatchingFloorDiscount(newValue);
  };

  return (
    <CalculatorContext.Provider
      value={{
        searchValue,
        updateSearchValue,
        selectedItem,
        updateSelectedItem,
        useMatchingFloorDiscount,
        updateUseMatchingFloorDiscount,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorContext;
