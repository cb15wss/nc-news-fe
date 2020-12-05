import React from "react";
import { Link } from "@reach/router";

const Header = props => {
  return (
    <div className="container">
      <header>
        <Link to="/" className="navbar-brand">
         <img src={require("../images/Tina Times.png")}  width="250" height="100 "alt="Tina Times Logo"/>
        </Link>

        <div className="header" align="right">
          You are logged in as {props.username}
        </div>
      </header>
    </div>
  );
};

export default Header;
