// Icons.js
import React, { useContext } from 'react';
import { ReactComponent as Sun } from './assets/sun.svg'
import { ReactComponent as User } from './assets/user.svg'

import { ReactComponent as Mail } from './assets/mail.svg'
import { ReactComponent as Entreprises } from './assets/entreprises.svg'
import { ReactComponent as Map } from './assets/map.svg'

import { DarkModeContext } from "./DarkMode";
//import { LeftIcons } from 'LeftIcons';
  
//import { RightIcons } from 'RightIcons'; 
const Icons = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  // Handle click events for your icons
  const handleLeftIconClick = () => {
    console.log('Left icon clicked');
  };
  const showMap = () => {
    console.log('Left icon clicked');
  };

  const handleRightIconClick = () => {
    console.log('Right icon clicked');
  };
  const composeEmail = () => {
    console.log('composeEmail icon clicked');
  };

  const showEntreprises = () => {
    console.log('showEntreprises icon clicked');
  };
  const openUser = () => {
    console.log('openUser icon clicked');
  };

  return (
    <div className="icons-container">
      <div className="icons-left">
        {/* Left Icons */}
        <div className="icon" onClick={toggleDarkMode}>
          <Sun />

          <p>      {darkMode ? "Mode Clair" : "Mode Sombre"}</p>

        </div>

        <div className="icon" onClick={composeEmail}>

          <Mail />

          <p>E-mail</p>


        </div>

        <div className="icon" onClick={showEntreprises}>

          <Entreprises />

          <p>Entreprises</p>



        </div>

        <div className="icon" onClick={showMap}>

          <Map />

          <p>Afficher la carte</p>



        </div>
      </div>

      <div className="icons-right">
        {/* Right Icon */}
        <div className="icon" onClick={openUser}>



          <p>Mon Compte</p>
          <User />


        </div>

        {/* Right Icon */}
        <div className="icon" onClick={handleRightIconClick}>

          <p>Offres enregistrées</p>



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
