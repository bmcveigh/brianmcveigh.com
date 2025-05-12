import { createTheme } from "@mui/material";
import { green } from "@mui/material/colors";


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: green[400],
    },
  }
});

export default theme;
