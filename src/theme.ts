import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";


const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: blue[500],
    },
    secondary: {
      main: red[500],
    }
  }
});

export default theme;
