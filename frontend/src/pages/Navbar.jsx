import { Link } from "react-router-dom";
import "./Navbar.css";
import Language from "./Language.jsx";
import Profile from "./Profile.jsx";
import BalanceButton from "./BalanceButton.jsx";

function Navbar() {
  return (
    <>
    <BalanceButton />
      <nav className="navbar">
        <h2 className="logo">Bingo</h2>
        <div className="nav-links">
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
        <div className="profile">
          <Language />
          <Profile />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
