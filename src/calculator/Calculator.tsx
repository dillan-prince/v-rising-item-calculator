import { Grid } from "@mui/material";
import { CalculatorContextProvider } from "calculator/common/CalculatorContext";
import ItemList from "calculator/itemList/ItemList";
import Recipe from "calculator/recipe/Recipe";
import SearchBar from "calculator/searchBar/SearchBar";

const Calculator = () => {
  return (
    <CalculatorContextProvider>
      <Grid
        container
        columnSpacing={2}
        sx={{
          maxHeight: "100vh",
        }}
      >
        <Grid item xs={12} sx={(theme) => ({ padding: theme.spacing(2, 0) })}>
          <SearchBar />
        </Grid>
        <Grid item xs={3}>
          <ItemList />
        </Grid>
        <Grid item xs={9}>
          <Recipe />
        </Grid>
      </Grid>
    </CalculatorContextProvider>
  );
};

export default Calculator;
