import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import CalculatorContext from "calculator/common/CalculatorContext";
import { useContext } from "react";

const SearchBar = () => {
  const { searchValue, updateSearchValue } = useContext(CalculatorContext);

  return (
    <TextField
      sx={(theme) => ({ width: "100%" })}
      type="search"
      value={searchValue}
      onChange={(e) => updateSearchValue(e.target.value)}
      placeholder="Search for an item..."
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
