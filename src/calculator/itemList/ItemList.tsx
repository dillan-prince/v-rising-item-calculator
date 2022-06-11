import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import CalculatorContext from "calculator/common/CalculatorContext";
import Item from "calculator/itemList/Item";
import { searchItems } from "calculator/itemList/utils";
import { useContext } from "react";

const ItemList = () => {
  const { searchValue } = useContext(CalculatorContext);

  const items = searchItems(searchValue);

  return (
    <Box
      sx={{
        border: `1px solid ${grey[700]}`,
        borderRadius: "4px",
        padding: 1,
        maxHeight: "90vh",
        overflowY: "auto",
        "& > :not(last-child)": {
          marginBottom: 1,
        },
        "& :last-child": {
          marginBottom: 0,
        },
      }}
    >
      {items.length > 0 ? (
        items.map((item: string) => <Item key={item} name={item} />)
      ) : (
        <Typography variant="body1">No results</Typography>
      )}
    </Box>
  );
};

export default ItemList;
