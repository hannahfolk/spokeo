import React from "react";
import logo from "./logo_200x45.png";
import "./style.css";

const Header = (props) => {
  return (
    <div>
      <img id="logo" alt="spokeo-logo" src={logo} />
      <div id="content">{props.children}</div>
    </div>
  );
};

export default Header;
