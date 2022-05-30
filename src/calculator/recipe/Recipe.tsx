import { Box, Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import CalculatorContext from "calculator/common/CalculatorContext";
import { data } from "calculator/common/data";
import Material from "calculator/recipe/Material";
import { useContext, useState } from "react";

const Recipe = () => {
  const { selectedItem, useMatchingFloorDiscount, updateUseMatchingFloorDiscount } = useContext(CalculatorContext);
  const [numberToCreate, setNumberToCreate] = useState(1);

  const recipe = data[selectedItem];

  return (
    <Box sx={{ border: `1px solid ${grey[700]}`, borderRadius: "4px", padding: 1 }}>
      {recipe ? (
        <Grid container columns={48} columnSpacing={2} alignItems="center">
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
            {Object.keys(recipe).map((material) => (
              <Material key={material} name={material} count={recipe[material] * numberToCreate} />
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
