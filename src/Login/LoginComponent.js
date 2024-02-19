// LoginComponent.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './LoginComponent.css';
import { authenticateUser } from './Authentication';

const LoginComponent = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (field, value) => {
    setLoginData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleLogin = async () => {
    try {
      const userData = await authenticateUser(loginData.username, loginData.password);
      // Call onLogin with the authenticated user data
      onLogin(userData);
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error (display error message, etc.)
    }
  };

  return (
    <div id='login-div'>
      <h2>Login</h2>

      <TextField
        type="text"
        label='Username'
        value={loginData.username}
        onChange={(e) => handleChange('username', e.target.value)}
      />

      <TextField
        type="password"
        label='Password'
        value={loginData.password}
        onChange={(e) => handleChange('password', e.target.value)}
      />

      <Button variant="contained" color="primary" onClick={handleLogin}>
        Login
      </Button>
    </div>
  );
};

export default LoginComponent;
