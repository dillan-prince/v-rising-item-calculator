import ArrowDown from "@mui/icons-material/ArrowDropDown";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import CalculatorContext from "calculator/common/CalculatorContext";
import { getImagePath } from "calculator/common/utils";
import data, { RecipeType } from "data";
import { Fragment, useContext, useState } from "react";

type MaterialProps = {
  name: string;
  count: number;
};

const Material = ({ name, count }: MaterialProps) => {
  const { useMatchingFloorDiscount } = useContext(CalculatorContext);

  const [isExpanded, setIsExpanded] = useState(false);

  const isExpandable = Object.keys(data).includes(name);

  const renderMaterial = (recipe: RecipeType, materialName: string) => (
    <Material
      key={materialName}
      count={recipe[materialName] * Math.ceil(count / recipe.amountMade)}
      name={materialName}
    />
  );

  const renderOneRecipe = (recipe: RecipeType) => {
    return Object.keys(recipe).map((key) => key !== "amountMade" && renderMaterial(recipe, key));
  };

  const renderMultipleRecipes = (recipes: RecipeType[]) => {
    return recipes.map((recipe, index) => (
      <Fragment key={`${name}-${index}`}>
        <Box sx={{ border: `1px solid ${grey[700]}`, borderRadius: "4px", padding: 1 }}>
          {Object.keys(recipe).map((key) => key !== "amountMade" && renderMaterial(recipe, key))}
        </Box>
        <Typography variant="h6" sx={{ paddingLeft: 1, ":last-child": { display: "none" } }}>
          OR
        </Typography>
      </Fragment>
    ));
  };

  const renderExpandedMaterialList = () => {
    const dataItem = data[name];
    const recipes = (useMatchingFloorDiscount && dataItem.discountedRecipes) || dataItem.fullPriceRecipes;

    return (
      <Grid item xs={12}>
        {recipes.length === 1 ? renderOneRecipe(recipes[0]) : renderMultipleRecipes(recipes)}
      </Grid>
    );
  };

  return (
    <Box
      sx={{
        marginBottom: 1,
        ":last-child": { marginBottom: 0 },
      }}
    >
      <Grid container columns={24}>
        <Grid item xs={1}>
          {isExpandable && (
            <>
              <IconButton onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? <ArrowDown /> : <ArrowRight />}
              </IconButton>
              {isExpanded && (
                <Box
                  sx={{
                    width: "2px",
                    height: "calc(100% - 50px)",
                    borderLeft: `2px solid ${grey[700]}`,
                    marginLeft: "19px",
                  }}
                ></Box>
              )}
            </>
          )}
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            textAlign: "center",
          }}
        >
          <Box component={"img"} sx={{ marginTop: 1, width: "24px", height: "24px" }} src={getImagePath(name)} />
        </Grid>
        <Grid item xs={22}>
          <Grid container>
            <Grid item xs={12} sx={{ justifyContent: "space-between", marginY: 1, ":last-child": { marginBottom: 0 } }}>
              <Typography variant="body1" component={"span"} sx={{ flexGrow: 1 }}>
                {name}: {count}
              </Typography>
            </Grid>
            {isExpanded && renderExpandedMaterialList()}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Material;
