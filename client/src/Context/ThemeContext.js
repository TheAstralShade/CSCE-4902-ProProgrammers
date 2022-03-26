import { createContext } from "react";
const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222",
  },
};

const ThemeContext = createContext(themes.light);

export { ThemeContext, themes };