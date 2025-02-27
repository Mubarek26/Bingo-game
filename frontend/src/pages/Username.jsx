import { useState } from "react";
import { Link } from "react-router-dom";
import "./Username.css";

const Username = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="profile-container" onClick={toggleDropdown}>
      <div className="profile-header">
        <img
          src="https://placehold.co/32x32"
          alt="Profile"
          className="profile-image"
        />
        <span className="profile-username">John Doe</span>
        {/* Sleek Dropdown Icon */}
        <svg
          className={`dropdown-icon ${isOpen ? "rotate" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <ul className={`profile-menu ${isOpen ? "show" : ""}`}>
        <li>
          <Link to="/wallet">Wallet</Link>
        </li>
        <li>
        <Link to="/bet-history">History</Link>
        </li>
        <li className="logout" onClick={() => alert("Logging out...")}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Username;
