import React, { createContext, useReducer } from "react";

// there i createContext(api) for setting global state
// reducer i used , warped on index.js file
//this createContext i cant access directly for that i created  custom hooks , i need to use(usecontext)
// impor ::: createContext && useContext need to use

export const ThemeContext = createContext();

const themesReducer = (state, action) => {
  switch (action.type) {
    case "dark":
      return { ...state, theme: "light" };
    case "light":
      return { ...state, theme: "dark" };
    default:
      return state;
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themesReducer, { theme: "light" });

  return (
    <ThemeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
