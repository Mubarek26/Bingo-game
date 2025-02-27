import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!phone || !password) {
      setError('Please fill in both fields.');
      return;
    }

    console.log('Logging in with:', { phone, password });

    // Simulating an authentication process
    setTimeout(() => {
      navigate('/Home'); // Redirect to the Home page after login
    }, 10);
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">Login</h2>
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
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="button">Login</button>
          <p className="link">
            Don't have an account? <span onClick={() => navigate('/signup')} className="nav-link">Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
