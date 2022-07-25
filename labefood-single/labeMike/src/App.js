import { ThemeProvider } from "@mui/material";
import React from "react"
import Router from "./Routes/Router"
import theme from './Constants/theme';
function App() {
  return (
    <ThemeProvider theme={theme} >
      <Router/>
    </ThemeProvider>
  );
}

export default App;
