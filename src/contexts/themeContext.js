import { createContext, useContext } from "react";

const ThemeContext = createContext({ themeDark: false });

export const ThemeContextProvider = ThemeContext.Provider;

const useTheme = () => {
  return useContext(ThemeContext);
};

export default useTheme;
