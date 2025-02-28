import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './Login.module.css';

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
    <div className={style.container}>
      <div className={style.card}>
        <h2 className={style.title}>Login</h2>
        {error && <p className={style.errorMessage}>{error}</p>}
        <form onSubmit={handleSubmit} className={style.form}>
          <div className={style.formGroup}>
            <label htmlFor="phone" className={style.label}>Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter your phone (e.g., +1234567890)"
            />
          </div>
          <div className={style.formGroup}>
            <label htmlFor="password" className={style.label}>Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className={style.button}>Login</button>
          <p className={style.link}>
            Don't have an account? <span onClick={() => navigate('/signup')} className={style.navLink}>Sign Up</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
