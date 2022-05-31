import { Box, Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import CalculatorContext from "calculator/common/CalculatorContext";
import { data } from "calculator/common/data";
import Material from "calculator/recipe/Material";
import { useContext, useState } from "react";

const Recipe = () => {
  const { selectedItem, useMatchingFloorDiscount, updateUseMatchingFloorDiscount } = useContext(CalculatorContext);
  const [numberToCreate, setNumberToCreate] = useState(1);

  const dataItem = data[selectedItem];
  const recipes = (useMatchingFloorDiscount && dataItem?.discountedRecipes) || dataItem?.fullPriceRecipes || [];

  return (
    <Box sx={{ border: `1px solid ${grey[700]}`, borderRadius: "4px", padding: 1 }}>
      {dataItem ? (
        <Grid container columns={48} spacing={2} alignItems="center">
          <Grid item xs={33}>
            <Typography variant="h3">{selectedItem}</Typography>
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Amount"
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
              onChange={(e) => setNumberToCreate(parseFloat(e.target.value) || 1)}
              value={numberToCreate}
            />
          </Grid>
          <Grid item xs={11}>
            <FormControlLabel
              label="Matching floor discount"
              control={
                <Checkbox
                  checked={useMatchingFloorDiscount}
                  onChange={(_e, checked) => updateUseMatchingFloorDiscount(checked)}
                />
              }
            />
          </Grid>
          <Grid item xs={48}>
            <Typography variant="body2" sx={{ marginLeft: 2 }}>
              Source: {dataItem.source}
            </Typography>
          </Grid>
          <Grid item xs={48}>
            {recipes.length === 1
              ? Object.keys(recipes[0]).map(
                  (key) => key !== "amountMade" && <Material key={key} count={recipes[0][key]} name={key} />,
                )
              : recipes.map((recipe) => (
                  <>
                    <Box sx={{ border: `1px solid ${grey[700]}`, borderRadius: "4px", padding: 1 }}>
                      {Object.keys(recipe).map(
                        (key) => key !== "amountMade" && <Material key={key} count={recipe[key]} name={key} />,
                      )}
                    </Box>
                    <Typography variant="h6" sx={{ paddingLeft: 1, ":last-child": { display: "none" } }}>
                      OR
                    </Typography>
                  </>
                ))}
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h6">Select an item from the list on the lift to view its recipe.</Typography>
      )}
    </Box>
  );
};

export default Recipe;
