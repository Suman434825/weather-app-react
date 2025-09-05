import { useState } from "react";
import { ThemeProvider, CssBaseline, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import WeatherApp from "./WeatherApp";
import { lightTheme, darkTheme } from "./theme";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline /> {/* MUI default styles reset + background color set */}
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "10px" }}>
        <IconButton onClick={handleThemeToggle} color="inherit">
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </div>

      <WeatherApp />
    </ThemeProvider>
  );
}