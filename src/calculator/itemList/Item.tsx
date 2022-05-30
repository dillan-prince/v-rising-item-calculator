import { Box, lighten } from "@mui/material";
import { grey } from "@mui/material/colors";
import CalculatorContext from "calculator/common/CalculatorContext";
import { useContext } from "react";

export type ItemProps = {
  name: string;
};

const Item = ({ name }: ItemProps) => {
  const { selectedItem, updateSelectedItem } = useContext(CalculatorContext);

  const isSelected = selectedItem === name;

  return (
    <Box
      sx={(theme) => ({
        border: `1px solid ${grey[700]}`,
        borderRadius: "4px",
        padding: 3,
        backgroundColor: isSelected ? lighten(theme.palette.background.default, 0.2) : theme.palette.background.default,
        ":hover": {
          cursor: "pointer",
          backgroundColor: lighten(theme.palette.background.default, 0.1),
        },
        ":active": {
          backgroundColor: lighten(theme.palette.background.default, 0.2),
        },
      })}
      onClick={() => updateSelectedItem(name)}
    >
      {name}
    </Box>
  );
};

export default Item;
