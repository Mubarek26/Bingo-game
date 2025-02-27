import React, { useState } from 'react';
import './HamburgerMenu.css'; 
import { Link } from 'react-router-dom';

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
    <div className="hamburger-menu">
      {/* Hamburger Icon/Button */}
      <button className="hamburger-button" onClick={toggleMenu}>
        ☰
      </button>

      {/* Sidebar Menu */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* User Profile Section */}
        <div className="profile-section">
          <img src="path-to-profile-icon.png" alt="Profile" className="profile-icon" />
          <p className="user-name">User</p>
        </div>

        {/* Menu Items */}
        <ul className="menu-items">
          <li className={`menu-item ${activeItem === 'home' ? 'selected' : ''}`}>
            <Link to="/home" className="menu-link" onClick={() => closeMenu('home')}>Home 🏠</Link>
          </li>
          <li className={`menu-item ${activeItem === 'bingo' ? 'selected' : ''}`}>
            <Link to="/bingo" className="menu-link" onClick={() => closeMenu('bingo')}>Bingo Game 🎱</Link>
          </li>
          <li className={`menu-item ${activeItem === 'history' ? 'selected' : ''}`}>
            <Link to="/game-history" className="menu-link" onClick={() => closeMenu('history')}>Game History 📅</Link>
          </li>
          <li className={`menu-item ${activeItem === 'wallet' ? 'selected' : ''}`}>
            <Link to="/wallet" className="menu-link" onClick={() => closeMenu('wallet')}>Wallet 💰</Link>
          </li>
          <li className={`menu-item ${activeItem === 'leaderboard' ? 'selected' : ''}`}>
            <Link to="/leaderboard" className="menu-link" onClick={() => closeMenu('leaderboard')}>Leaderboard 🏆</Link>
          </li>
          <li className={`menu-item ${activeItem === 'howtoplay' ? 'selected' : ''}`}>
            <Link to="/howtoplay" className="menu-link" onClick={() => closeMenu('howtoplay')}>How To Play ❓</Link>
          </li>
          <li className={`menu-item ${activeItem === 'referral' ? 'selected' : ''}`}>
            <Link to="/referral" className="menu-link" onClick={() => closeMenu('referral')}>Referral Income 📄</Link>
          </li>
          <li className={`menu-item ${activeItem === 'settings' ? 'selected' : ''}`}>
            <Link to="/settings" className="menu-link" onClick={() => closeMenu('settings')}>Settings ⚙</Link>
            <ul className="submenu">
              <li>Profile</li>
              <li>Contact</li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Optional: Overlay for closing the menu when clicking outside */}
      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </div>
  );
};

export default HamburgerMenu;
