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
          src="https://placehold.co/40x40"
          alt="Profile"
          className="profile-image"
        />
        <span className="profile-username">Username</span>
      </div>

      <ul className={`profile-menu ${isOpen ? "show" : ""}`}>
        <li>
          <Link to="/wallet">Wallet</Link>
        </li>
        <li className="logout" onClick={() => alert("Logging out...")}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Username;
