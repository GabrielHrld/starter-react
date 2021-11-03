import { createTheme, Theme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0657a5",
      light: "#1b6ebd",
    },
  },
  mixins: {
    toolbar: {
      minHeight: 56,
    },
  },
});

export default theme;
