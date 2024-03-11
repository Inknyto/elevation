// This context is for the chosen result to be used by the letter generator
import React, { createContext, useState } from 'react';

const ChosenResultContext = createContext();

const ChosenResultProvider = ({ children }) => {
  const [chosenResult, setChosenResult] = useState({});

 // useEffect(() => {
 //   // Check if token is present in sessionStorage
 //   const token = sessionStorage.getItem('token');
 //   if (token) {
 //     setIsLoggedIn(true);
 //   }
 // }, []); // Empty dependency array ensures this effect runs only once during component mount

  return (
    <ChosenResultContext.Provider value={{chosenResult, setChosenResult}}>
      {children}
    </ChosenResultContext.Provider>
  );
};

export { ChosenResultContext, ChosenResultProvider }
