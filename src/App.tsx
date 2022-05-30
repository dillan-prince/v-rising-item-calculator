import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Calculator from "calculator/Calculator";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xl">
        <Calculator />
      </Container>
    </ThemeProvider>
  );
};

export default App;
