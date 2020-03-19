import React from "react";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link to="/" className="navbar-brand">
          <button className="nav-btn"> Tina Times</button>
        </Link>
        <Link to="/articles" className="nav-item nav-link">
          <button className="nav-btn">Articles</button>
        </Link>
        <Link to="/topics" className="nav-item nav-link">
          <button className="nav-btn">Topics</button>
        </Link>
        <Link to="/users" className="nav-item nav-link">
          <button className="nav-btn">Users</button>
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
