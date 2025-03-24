import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: true,
  palette: {
    background: { default: "#C9B194", paper: "#EEEEEE" },
    text: { primary: "#222831", secondary: "#EEEEEE" },
    primary: {
      main: "#EEEEEE",
    },
    secondary: {
      main: "#222831",
    },
  },
});

export default theme;
