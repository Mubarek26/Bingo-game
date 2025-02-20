import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">AuthApp</h2>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/howtoplay" className="nav-link">How To Play</Link>
      </div>
    </nav>
  );
}

export default Navbar;
