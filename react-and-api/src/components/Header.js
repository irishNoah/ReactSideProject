import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link className="headerMenu" to={"/"}>
        <h1>CoinMate</h1>
      </Link>
      {/* <h1>CoinMate</h1> */}
    </div>
  );
}

export default Header;
