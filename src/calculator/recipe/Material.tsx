import ArrowDown from "@mui/icons-material/ArrowDropDown";
import ArrowRight from "@mui/icons-material/ArrowRight";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import CalculatorContext from "calculator/common/CalculatorContext";
import { data } from "calculator/common/data";
import { useContext, useState } from "react";

type MaterialProps = {
  name: string;
  count: number;
};

const Material = ({ name, count }: MaterialProps) => {
  const { useMatchingFloorDiscount } = useContext(CalculatorContext);

  const [isExpanded, setIsExpanded] = useState(false);

  const isExpandable = Object.keys(data).includes(name);

  const renderExpandedMaterialList = () => {
    const dataItem = data[name];
    const recipes = (useMatchingFloorDiscount && dataItem.discountedRecipes) || dataItem.fullPriceRecipes;

    return (
      <Grid item xs={12}>
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
        <Grid item xs={23}>
          <Grid container>
            <Grid item xs={12} sx={{ marginY: 1, ":last-child": { marginBottom: 0 } }}>
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
