import { createContext } from "react";

export type Theme = "dark" | "light";
interface Props {
  theme?: Theme;
  toogleTheme: () => void;
}

export const ThemeContext = createContext<Props>({
  theme: "light",
  toogleTheme: () => {},
});
