import { createTheme } from '@mui/material/styles';
import { red, green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: red[800],
    },
    secondary: {
      main: red[600],
    },
  },
});

export default theme;

