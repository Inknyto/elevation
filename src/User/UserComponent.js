import React, { useContext } from 'react';
import { AuthContext } from '../Login/AuthContext';
import LoginComponent from '../Login/LoginComponent';
import { Button } from '@mui/material';

const UserComponent = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear the token from sessionStorage and update isLoggedIn state
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('username');
    setIsLoggedIn(false);
  };

  return (
    <div>
          {/* Display user information */}
          <h2>Welcome, {sessionStorage.getItem('username')}</h2>
          {/* Add more user information components as needed */}
          
          {/* Logout button */}
      <Button variant="contained" color="primary" onClick={handleLogout}>
        Logout
      </Button>
      <Button variant="contained" color="primary" style={{marginTop: '15px',}}>
        Delete Account
      </Button>
    </div>
  );
};

export default UserComponent;
