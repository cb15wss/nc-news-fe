import React from "react";
import { Link } from "@reach/router";

const Header = props => {
  return (
    <div className="container">
      <header>
        <h1>
          <Link to="/" className="navbar-brand">
            <h1 className="logo">Tina Times</h1>
          </Link>
        </h1>
        <div className="header" align="right">
          You are logged in as {props.username}
        </div>
      </header>
    </div>
  );
};

export default Header;
