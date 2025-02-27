import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";
import Language from "./Language.jsx";
import Username from "./Username.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/Home" className="logo-link">
          Bingo
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="navbar-links">
        <NavLink to="/Home" className="navbar-item" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/contact" className="navbar-item" activeClassName="active">
          Contact
        </NavLink>
        <NavLink
          to="/howtoplay"
          className="navbar-item"
          activeClassName="active"
        >
          How To Play
        </NavLink>
      </div>

      {/* Profile Section */}
      <div className="profile">
        <Language />
        <Username />
      </div>

      <div className="hamburger-container">
        <HamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;
