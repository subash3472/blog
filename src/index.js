import React from "react";
import { ThemeContextProvider } from "./comp/Context/Themecontext"; // Replace with the correct path to your context file
// check
// import ReactDOM from "react-dom";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
