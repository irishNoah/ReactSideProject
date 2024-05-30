import { Link } from "react-router-dom";
import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <div className="navbar">
        <Link className="navbarMenu" to={"/"}>
          Main
        </Link>
        <Link className="navbarMenu" to={"/posting"}>
          Posting
        </Link>
        <Link className="navbarMenu" to={"/contact"}>
          Contact
        </Link>
      </div>
    </div>
  );
}

export default Nav;
