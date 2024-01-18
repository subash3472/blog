import { useContext } from "react";
import { ThemeContext } from "../comp/Context/Themecontext";

export const Usethemecontext = () => {
  const themeContext = useContext(ThemeContext);

  if (themeContext === undefined) {
    throw new Error(
      "useCustomContext must be used within a ThemeContextProvider"
    );
  }

  return themeContext;
};
