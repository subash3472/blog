import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Usethemecontext } from "../../hooks/Usethemescontex";

const Navbar = () => {
  const { theme } = Usethemecontext();
  const linkClassName = `${theme}link`; // Add specific class for links based on theme

  return (
    <header className={`${theme}header`}>
      <div className="container">
        <Link to="/" className={linkClassName}>
          <h1>Blog</h1>
        </Link>
        <nav>
          {/* home */}
          <Link to="/" className={linkClassName}>
            <h4>Home</h4>
          </Link>
          {/* create post */}
          <Link to="/create" className={linkClassName}>
            <h4>Create Post</h4>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
