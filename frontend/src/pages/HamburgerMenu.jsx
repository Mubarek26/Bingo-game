import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './HamburgerMenu.module.css'; // Import the CSS Module

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home'); // Track the active menu item

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu and set the active menu item
  const closeMenu = (item) => {
    setActiveItem(item); // Update the active menu item
    setIsOpen(false);     // Close the menu
  };

  return (
    <div className={styles.hamburgerMenu}>
      {/* Hamburger Icon/Button */}
      <button className={styles.hamburgerButton} onClick={toggleMenu}>
        ☰
      </button>

      {/* Sidebar Menu */}
      <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}>
        {/* User Profile Section */}
        <div className={styles.profileSection}>
          <img src="path-to-profile-icon.png" alt="Profile" className={styles.profileIcon} />
          <p className={styles.userName}>User</p>
        </div>

        {/* Menu Items */}
        <ul className={styles.menuItems}>
          <li className={`${styles.menuItem} ${activeItem === 'home' ? styles.menuItemSelected : ''}`}>
            <Link to="/home" className={styles.menuLink} onClick={() => closeMenu('home')}>Home 🏠</Link>
          </li>
          <li className={`${styles.menuItem} ${activeItem === 'bingo' ? styles.menuItemSelected : ''}`}>
            <Link to="/bingo" className={styles.menuLink} onClick={() => closeMenu('bingo')}>Bingo Game 🎱</Link>
          </li>
          <li className={`${styles.menuItem} ${activeItem === 'history' ? styles.menuItemSelected : ''}`}>
            <Link to="/game-history" className={styles.menuLink} onClick={() => closeMenu('history')}>Game History 📅</Link>
          </li>
          <li className={`${styles.menuItem} ${activeItem === 'wallet' ? styles.menuItemSelected : ''}`}>
            <Link to="/wallet" className={styles.menuLink} onClick={() => closeMenu('wallet')}>Wallet 💰</Link>
          </li>
          <li className={`${styles.menuItem} ${activeItem === 'leaderboard' ? styles.menuItemSelected : ''}`}>
            <Link to="/leaderboard" className={styles.menuLink} onClick={() => closeMenu('leaderboard')}>Leaderboard 🏆</Link>
          </li>
          <li className={`${styles.menuItem} ${activeItem === 'howtoplay' ? styles.menuItemSelected : ''}`}>
            <Link to="/howtoplay" className={styles.menuLink} onClick={() => closeMenu('howtoplay')}>How To Play ❓</Link>
          </li>
          <li className={`${styles.menuItem} ${activeItem === 'referral' ? styles.menuItemSelected : ''}`}>
            <Link to="/referral" className={styles.menuLink} onClick={() => closeMenu('referral')}>Referral Income 📄</Link>
          </li>
          <li className={`${styles.menuItem} ${activeItem === 'settings' ? styles.menuItemSelected : ''}`}>
            <Link to="/settings" className={styles.menuLink} onClick={() => closeMenu('settings')}>Settings ⚙</Link>
            <ul className={styles.submenu}>
              <li className={styles.submenuLi}>Profile</li>
              <li className={styles.submenuLi}>Contact</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Optional: Overlay for closing the menu when clicking outside */}
      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </div>
  );
};

export default HamburgerMenu;
