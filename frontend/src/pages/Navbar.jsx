import { Link, NavLink } from "react-router-dom";
import styles from './Navbar.module.css';  // Import the CSS Module file
import Language from "./Language.jsx";
import Username from "./Username.jsx";
import HamburgerMenu from "./HamburgerMenu.jsx";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/Home" className={styles.logoLink}>
          Bingo
        </Link>
      </div>

      {/* Navigation Links */}
      <div className={styles.navbarLinks}>
        <NavLink to="/Home" className={styles.navbarItem} activeClassName={styles.active}>
          Home
        </NavLink>
        <NavLink to="/contact" className={styles.navbarItem} activeClassName={styles.active}>
          Contact
        </NavLink>
        <NavLink to="/howtoplay" className={styles.navbarItem} activeClassName={styles.active}>
          How To Play
        </NavLink>
      </div>

      {/* Profile Section */}
      <div className={styles.profile}>
        <Language />
        <Username />
      </div>

      <div className={styles.hamburgerContainer}>
        <HamburgerMenu />
      </div>
    </nav>
  );
}

export default Navbar;
