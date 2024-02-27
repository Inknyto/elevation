// LoginComponent.js
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './LoginComponent.css';
import { authenticateUser } from './Authentication';

import { signUserUp } from './SignUp';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


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
      const token = await authenticateUser(loginData.username, loginData.password);
      // Call onLogin with the authenticated user data
      onLogin(token);
    } catch (error) {
      console.error('Login error:', error);
      // Handle login error (display error message, etc.)
    }
  };

  const handleSignUp = async () => {
    try {
      const token = await signUserUp(loginData.username, loginData.password);
      // Call onLogin with the authenticated user data
      onLogin(token);
	    console.log(token)
    } catch (error) {
      console.error('Sign Up error:', error);
      // Handle login error (display error message, etc.)
    }
  };



  return (
   <Card id='login-card'>
      <CardContent id='login-card-content'>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

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

      <Button variant="contained" color="primary" onClick={handleSignUp}>
        Sign Up
      </Button>
      </CardContent>
    </Card>
  );
};

export default LoginComponent;
