import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";

const CustomThemeProvider = ({ children }: any) => {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container sx={{ py: 4 }} maxWidth="xl">
        {children}
      </Container>
    </ThemeProvider>
  );
};

export default CustomThemeProvider;
