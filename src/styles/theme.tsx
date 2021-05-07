import { createMuiTheme } from "@material-ui/core/styles";

// Create a theme instance.
const coreThemeObj = {
  typography: {
    fontFamily: "Raleway",
  },
};

const darkPalette = {
  primary: {
    main: "#f72585",
    light: "#000000",
  },
  secondary: {
    main: "#ff0000",
  },
  background: {
    default: "#000000",
    paper: "#000000",
  },
};

const lightPalette = {
  primary: {
    main: "#ff80ab",
  },
  secondary: {
    main: "#ff4081",
  },
};

export const darkTheme = createMuiTheme({
  ...coreThemeObj,
  palette: {
    ...darkPalette,
    type: "dark",
  },
});

export const lightTheme = createMuiTheme({
  ...coreThemeObj,
  palette: {
    ...lightPalette,
    type: "light",
  },
});
