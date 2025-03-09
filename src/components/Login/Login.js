import React, { useState } from 'react';
import Logo from '../common/Logo';
import Button from '../common/Button';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      onLogin(email);
    }
  };
  
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-logo">
          <Logo />
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            className="login-input"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="primary" fullWidth>
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;