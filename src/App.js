import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./comp/navbar/Navbar";
import Home from "./screens/home/Home";
import Createpost from "./screens/create/Createpost";
import Postdetail from "./screens/postdetail/Postdetail";
import Editpost from "./screens/edit/Editpost";
import Themeswitch from "./comp/switch/Themeswitch";
import { Usethemecontext } from "./hooks/Usethemescontex";

function App() {
  const { theme } = Usethemecontext();

  // global state

  return (
    <div className={`App ${theme}bg`}>
      <BrowserRouter>
        <Navbar />
        <Themeswitch />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Createpost />} />
            <Route path="/post/:id" element={<Postdetail />} />
            <Route path="edit/:id" element={<Editpost />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
