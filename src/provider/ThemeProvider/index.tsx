/* eslint-disable react-refresh/only-export-components */
import { useState, ReactNode, useContext, useEffect } from "react";
import { Theme, ThemeContext } from "../../context/Theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(localStorage.theme || "light");

  useEffect(() => {
    setTheme(localStorage.theme || "light");
  }, []);

  function toogleTheme() {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");

      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");

      document.documentElement.setAttribute("data-mode", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");

      document.documentElement.setAttribute("data-mode", "dark");

      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toogleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
