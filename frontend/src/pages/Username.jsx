import { useState } from "react";
import { Link } from "react-router-dom";
import styles from './Username.module.css';  // Import the CSS Module file

const Username = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (e) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.profileContainer} onClick={toggleDropdown}>
      <div className={styles.profileHeader}>
        <img
          src="https://placehold.co/32x32"
          alt="Profile"
          className={styles.profileImage}
        />
        <span className={styles.profileUsername}>John Doe</span>
        {/* Sleek Dropdown Icon */}
        <svg
          className={`${styles.dropdownIcon} ${isOpen ? styles.rotate : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="16"
          height="16"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <ul className={`${styles.profileMenu} ${isOpen ? styles.show : ""}`}>
        <li>
          <Link to="/wallet">Wallet</Link>
        </li>
        <li>
          <Link to="/bet-history">History</Link>
        </li>
        <li className={styles.logout} onClick={() => alert("Logging out...")}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default Username;
