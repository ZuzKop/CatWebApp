import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#9CC69B", //green
      dark: "#264653ff", //charcoal
    },
    secondary: {
      main: "#e9c46aff", //yellow
      dark: "#f4a261ff", //orange
    },
    background: {
      default: "#ffff",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: [
      "Segoe UI",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
    h4: {
      fontWeight: "650",
    },
  },
});

export default theme;
