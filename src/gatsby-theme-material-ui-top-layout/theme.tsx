import { createTheme } from '@material-ui/core';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: `#FF6464`,
    },
    secondary: {
      main: `#00A8CC`,
    },
    // error: {
    //   main: red.A400,
    // },
    // background: {
    //   default: `#fff`,
    // },
  },
  typography: {
    fontFamily: ['Heebo', 'sans-serif'].join(','),
  },
});

export default theme;
