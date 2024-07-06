import React from "react";
import logo from "../assets/logo_ry.png";
function Header() {
  return (
    <div className="header">
      <img src={logo} alt="The logo" />
      <h1>
        Top 150 Frequently Asked Interview Questions in React.js, JavaScript and
        Node.js
      </h1>
    </div>
  );
}

export default Header;
