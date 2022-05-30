import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { Box, Grid, IconButton, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { data } from "calculator/common/data";
import { useState } from "react";

type MaterialProps = {
  name: string;
  count: number;
};

const Material = ({ name, count }: MaterialProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const isExpandable = Object.keys(data).includes(name);

  const renderExpandedMaterialList = () => {
    const subRecipe = data[name];

    return (
      <Grid item xs={12}>
        {Object.keys(subRecipe).map((material) => (
          <Material key={material} name={material} count={subRecipe[material] * count} />
        ))}
      </Grid>
    );
  };

  return (
    <Box
      sx={{
        padding: 1,
        marginBottom: 1,
        ":last-child": { marginBottom: 0 },
      }}
    >
      <Grid container columns={24} columnSpacing={1}>
        <Grid item xs={1}>
          {isExpandable && (
            <>
              <IconButton onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? <RemoveCircleOutlineOutlinedIcon /> : <AddCircleOutlineOutlinedIcon />}
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
            <Grid
              item
              xs={12}
              sx={{ borderBottom: `1px solid ${grey[700]}`, marginY: 1, ":last-child": { marginBottom: 0 } }}
            >
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
