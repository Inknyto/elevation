import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './LoginComponent.css';

const LoginComponent = ({ onLogin }) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (field, value) => {
    setLoginData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleLogin = () => {
    // Perform login logic (authentication) here
    // For this example, just pass the loginData to the parent component
    onLogin(loginData);
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
