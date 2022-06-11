import { Box, Button, lighten, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import CalculatorContext from "calculator/common/CalculatorContext";
import { getImagePath } from "calculator/common/utils";
import { useContext } from "react";

export type ItemProps = {
  name: string;
};

const Item = ({ name }: ItemProps) => {
  const { selectedItem, updateSelectedItem } = useContext(CalculatorContext);

  const isSelected = selectedItem === name;

  return (
    <Button
      sx={(theme) => ({
        border: `1px solid ${grey[700]}`,
        borderRadius: "4px",
        textTransform: "none",
        color: theme.palette.text.primary,
        padding: 3,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "left",
        backgroundColor: isSelected
          ? lighten(theme.palette.primary.contrastText, 0.3)
          : theme.palette.background.default,
      })}
      onClick={() => updateSelectedItem(name)}
    >
      <Typography variant="body1" sx={{ margin: 0 }}>
        {name}
      </Typography>
      <Box component={"img"} sx={{ width: "40px" }} src={getImagePath(name)} />
    </Button>
  );
};

export default Item;
