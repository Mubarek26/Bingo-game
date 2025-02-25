import { useState } from "react";
import { Link } from "react-router-dom";  // Import Link from React Router
import "./Profile.css"; // Import updated CSS file

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="profile-container"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Profile Image and Username */}
      <div className="profile-header">
        <img
          src="https://placehold.co/40x40"
          alt="Profile"
          className="profile-image"
        />
        <span className="profile-username">Username</span>
      </div>

      {isOpen && (
        <>
          <ul className="menu">
            <li>
              <Link to="/wallet">Wallet</Link> {/* Link to Wallet page */}
            </li>
            <li>
              <Link to="/profile">Profile</Link> {/* Link to Profile page */}
            </li>
            <li>
              <Link to="/history">History</Link> {/* Link to History page */}
            </li>
            <li className="logout">
              <span onClick={() => alert("Logging out...")}>Logout</span> {/* Replace with actual logout logic */}
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default Profile;
