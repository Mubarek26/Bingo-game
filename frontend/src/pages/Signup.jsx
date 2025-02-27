import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone || !password || !confirmPassword || !otp) {
      setError("Please fill in all fields");
    } else if (!/^\+\d{10,}$/.test(phone)) {
      setError("Please enter a valid phone number (e.g., +1234567890)");
    } else if (password.length < 8 || !/[!@#$%^&*]/.test(password)) {
      setError(
        "Password must be at least 8 characters and include a special character"
      );
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
    } else if (otp.length !== 6 || !/^\d+$/.test(otp)) {
      setError("Please enter a valid 6-digit OTP");
    } else {
      setError("");
      console.log("Signing up with:", { phone, password, otp });
      // Add your sign-up logic here (e.g., API call for phone-based auth with OTP)
      // Redirect or handle successful sign-up
    }
    navigate("./");
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="phone" className="label">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone (e.g., +1234567890)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Create a password (min 8 chars, special char)"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="label">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="otp" className="label">OTP</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter 6-digit OTP"
              maxLength="6"
              required
            />
          </div>
          <button type="submit" className="button">
            Sign Up
          </button>
          <p className="link">
            Already have an account? <Link to="/" className="nav-link">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
