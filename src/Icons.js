// Icons.js
import React, { useState, useEffect } from 'react';
import { lightTheme, darkTheme } from './Theme';
import { ReactComponent as Sun } from './assets/sun.svg'
let darkMode = 0;

const toggleDarkMode = () => {
    // Add your logic for left icon click
	if (darkMode == 0){
		darkMode=1
	}else{
		  darkMode=0
	}
    console.log('Left icon clicked');
  };

const Icons = () => {
	 
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
	  <Sun/ >
	  
	  <p>Mode sombre</p>

        </div>

        <div className="icon" onClick={handleRightIconClick}>

          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" stroke="#632C7F" stroke-width="2" />
            <path d="M12 5V3" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M12 21V19" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M16.9497 7.05025L18.364 5.63604" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M5.63604 18.364L7.05025 16.9497" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M19 12L21 12" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M3 12L5 12" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M16.9497 16.9497L18.364 18.364" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M5.63604 5.63604L7.05025 7.05025" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
          </svg>
	  <p>texte!</p>
        </div>

        <div className="icon" onClick={handleLeftIconClick}>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 4H17.502C18.7134 4 19.319 4 19.7834 4.232C20.2095 4.44495 20.5551 4.79048 20.768 5.21665C21 5.68096 21 6.28664 21 7.498V8M17 20H17.502C18.7134 20 19.319 20 19.7834 19.768C20.2095 19.5551 20.5551 19.2095 20.768 18.7834C21 18.319 21 17.7134 21 16.502V16M7 4H6.498C5.28664 4 4.68096 4 4.21665 4.232C3.79048 4.44495 3.44495 4.79048 3.232 5.21665C3 5.68096 3 6.28664 3 7.498V8M7 20H6.498C5.28664 20 4.68096 20 4.21665 19.768C3.79048 19.5551 3.44495 19.2095 3.232 18.7834C3 18.319 3 17.7134 3 16.502V16" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M7.62584 17.0695C8.0447 16.4649 8.66228 15.9421 9.43355 15.571C10.2049 15.1999 11.0906 15 12 15C12.9094 15 13.7951 15.1999 14.5664 15.571C15.3377 15.9421 15.9553 16.4649 16.3742 17.0695" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <circle cx="12" cy="9" r="3" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
          </svg>
	  <p>texte!</p>

        </div>

        <div className="icon" onClick={handleRightIconClick}>

          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" stroke="#632C7F" stroke-width="2" />
            <path d="M12 5V3" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M12 21V19" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M16.9497 7.05025L18.364 5.63604" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M5.63604 18.364L7.05025 16.9497" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M19 12L21 12" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M3 12L5 12" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M16.9497 16.9497L18.364 18.364" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M5.63604 5.63604L7.05025 7.05025" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
          </svg>
	  <p>texte!</p>
        </div>
      </div>

      <div className="icons-right">
        {/* Right Icon */}
        <div className="icon" onClick={handleLeftIconClick}>
	  <p>texte!</p>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 4H17.502C18.7134 4 19.319 4 19.7834 4.232C20.2095 4.44495 20.5551 4.79048 20.768 5.21665C21 5.68096 21 6.28664 21 7.498V8M17 20H17.502C18.7134 20 19.319 20 19.7834 19.768C20.2095 19.5551 20.5551 19.2095 20.768 18.7834C21 18.319 21 17.7134 21 16.502V16M7 4H6.498C5.28664 4 4.68096 4 4.21665 4.232C3.79048 4.44495 3.44495 4.79048 3.232 5.21665C3 5.68096 3 6.28664 3 7.498V8M7 20H6.498C5.28664 20 4.68096 20 4.21665 19.768C3.79048 19.5551 3.44495 19.2095 3.232 18.7834C3 18.319 3 17.7134 3 16.502V16" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M7.62584 17.0695C8.0447 16.4649 8.66228 15.9421 9.43355 15.571C10.2049 15.1999 11.0906 15 12 15C12.9094 15 13.7951 15.1999 14.5664 15.571C15.3377 15.9421 15.9553 16.4649 16.3742 17.0695" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <circle cx="12" cy="9" r="3" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
          </svg>

        </div>

        {/* Right Icon */}
        <div className="icon" onClick={handleRightIconClick}>

	  <p>texte!</p>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" stroke="#632C7F" stroke-width="2" />
            <path d="M12 5V3" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M12 21V19" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M16.9497 7.05025L18.364 5.63604" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M5.63604 18.364L7.05025 16.9497" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M19 12L21 12" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M3 12L5 12" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M16.9497 16.9497L18.364 18.364" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M5.63604 5.63604L7.05025 7.05025" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>

        {/* Left Icon */}
        <div className="icon" onClick={handleLeftIconClick}>
	  <p>texte!</p>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 4H17.502C18.7134 4 19.319 4 19.7834 4.232C20.2095 4.44495 20.5551 4.79048 20.768 5.21665C21 5.68096 21 6.28664 21 7.498V8M17 20H17.502C18.7134 20 19.319 20 19.7834 19.768C20.2095 19.5551 20.5551 19.2095 20.768 18.7834C21 18.319 21 17.7134 21 16.502V16M7 4H6.498C5.28664 4 4.68096 4 4.21665 4.232C3.79048 4.44495 3.44495 4.79048 3.232 5.21665C3 5.68096 3 6.28664 3 7.498V8M7 20H6.498C5.28664 20 4.68096 20 4.21665 19.768C3.79048 19.5551 3.44495 19.2095 3.232 18.7834C3 18.319 3 17.7134 3 16.502V16" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M7.62584 17.0695C8.0447 16.4649 8.66228 15.9421 9.43355 15.571C10.2049 15.1999 11.0906 15 12 15C12.9094 15 13.7951 15.1999 14.5664 15.571C15.3377 15.9421 15.9553 16.4649 16.3742 17.0695" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <circle cx="12" cy="9" r="3" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
          </svg>

        </div>

        {/* Right Icon */}
        <div className="icon" onClick={handleRightIconClick}>

	  <p>texte!</p>
          <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="3" stroke="#632C7F" stroke-width="2" />
            <path d="M12 5V3" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M12 21V19" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M16.9497 7.05025L18.364 5.63604" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M5.63604 18.364L7.05025 16.9497" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M19 12L21 12" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M3 12L5 12" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M16.9497 16.9497L18.364 18.364" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
            <path d="M5.63604 5.63604L7.05025 7.05025" stroke="#632C7F" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export {Icons,
        darkMode};
