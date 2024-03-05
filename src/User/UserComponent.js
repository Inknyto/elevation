import React, { useContext } from 'react';
import { AuthContext } from '../Login/AuthContext';
import LoginComponent from '../Login/LoginComponent';

const UserComponent = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    // Implement your logout logic here
    // For example, clear the token from sessionStorage and update isLoggedIn state
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div>
          {/* Display user information */}
          <h2>Welcome, User!</h2>
          {/* Add more user information components as needed */}
          
          {/* Logout button */}
          <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserComponent;
