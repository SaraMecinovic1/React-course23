// import { createTheme } from "@mui/material/styles";
// import { green, black, grey } from "@mui/material/colors";

// export const DarkTheme = createTheme({
//   palette: {
//     primary: {
//       main: green[700],
//     },
//     secondary: {
//       main: green[700],
//     },
//     // background: grey[800],
//     background: "#333",
//     text: {
//       primary: "#fff",
//       secondary: "#fff",
//       disabled: "#ccc",
//     },
//   },
//   typography: {
//     h1: {
//       fontSize: "25px",
//       fontWeight: "bold",
//     },
//     h4: {
//       fontWeight: "bold",
//       fontSize: "30px",
//     },
//     // subtitle1: {},
//     // subtitle2: {},
//     // body1: {},
//     // body2: {},
//     // caption: {},
//   },
// });

import { createTheme } from "@mui/material/styles";
import { green, grey, purple } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: green[100],
    },
    secondary: {
      main: green[500],
    },
    background: grey[700],
    text: {
      // primary: "#fff",
      // secondary: grey[700],
      // disabled: "#ccc",
    },
  },
  typography: {
    h1: {
      fontSize: "25px",
      fontWeight: "bold",
    },
    h4: {
      fontWeight: "bold",
      fontSize: "30px",
    },
    // subtitle1: {},
    // subtitle2: {},
    // body1: {},
    // body2: {},
    // caption: {},
  },
});