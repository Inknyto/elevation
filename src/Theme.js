// theme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#632c7f', // Purple color
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export { lightTheme, darkTheme };
