import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext.jsx";
import "./index.css";

function ThemedApp() {
  const { theme } = React.useContext(ThemeContext);
  const muiTheme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme,
        },
      }),
    [theme]
  );
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline />
      <App />
    </MuiThemeProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <ThemedApp />
  </ThemeProvider>
);
