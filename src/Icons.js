// Icons.js
import React, { useState, useEffect, useContext } from 'react';
import { lightTheme, darkTheme } from './Theme';
import { ReactComponent as Sun } from './assets/sun.svg'
import { DarkModeContext } from "./DarkMode";
//import { LeftIcons } from 'LeftIcons';
  
//import { RightIcons } from 'RightIcons'; 
const Icons = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  // Handle click events for your icons
  const handleLeftIconClick = () => {
    // Add your logic for left icon click
    console.log('Left icon clicked');
  };
  const handleRightIconClick = () => {
    // Add your logic for left icon click
    console.log('Right icon clicked');
  };

  return (
    <div className="icons-container">
      <div className="icons-left">
        {/* Left Icons */}
        <div className="icon" onClick={toggleDarkMode}>
          <Sun />

          <p>      {darkMode ? "Light Mode" : "Dark Mode"}</p>

        </div>

        <div className="icon" onClick={handleRightIconClick}>

          <Sun />

          <p>      {darkMode ? "Light Mode" : "Dark Mode"}</p>


        </div>

        <div className="icon" onClick={handleLeftIconClick}>

          <Sun />

          <p>      {darkMode ? "Light Mode" : "Dark Mode"}</p>



        </div>

        <div className="icon" onClick={handleRightIconClick}>

          <Sun />

          <p>      {darkMode ? "Light Mode" : "Dark Mode"}</p>



        </div>
      </div>

      <div className="icons-right">
        {/* Right Icon */}
        <div className="icon" onClick={handleLeftIconClick}>



          <p>texte!</p>
          <Sun />


        </div>

        {/* Right Icon */}
        <div className="icon" onClick={handleRightIconClick}>

          <p>texte!</p>



          <Sun />


        </div>

        {/* Left Icon */}
        <div className="icon" onClick={handleLeftIconClick}>
          <p>texte!</p>



          <Sun />


        </div>

        {/* Right Icon */}
        <div className="icon" onClick={handleRightIconClick}>

          <p>texte!</p>



          <Sun />


        </div>
      </div>
    </div>
  );
};

export { Icons };
