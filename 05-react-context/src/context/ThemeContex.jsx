/* eslint-disable react/prop-types */
import { useState, createContext } from "react";

const initialTheme = "light";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);
  const handleTheme = (e) => {
    if (e.target.value === "light") {
      setTheme("light");
    } else if (e.target.value === "dark") {
      setTheme("dark");
    }
  };
  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
export default ThemeContext;
