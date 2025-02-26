import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Language from "./Language.jsx";
import Username from "./Username.jsx";
import BalanceButton from "./BalanceButton.jsx";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="logo">Bingo</div>

        {/* Hamburger Menu Button (visible on mobile) */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className={isMenuOpen ? "bar open" : "bar"}></span>
          <span className={isMenuOpen ? "bar open" : "bar"}></span>
          <span className={isMenuOpen ? "bar open" : "bar"}></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <Link to="/Home" className="nav-link">
            Home
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/howtoplay" className="nav-link">
            How To Play
          </Link>
        </div>

        {/* Profile Section */}
        <div className="profile">
            <BalanceButton />
            <Language />
            <Username />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
