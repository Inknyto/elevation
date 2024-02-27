// Icons.js
import React, { useContext } from 'react';
import { ReactComponent as Sun } from './assets/sun.svg'
import { ReactComponent as Moon} from './assets/moon.svg'
import { ReactComponent as User } from './assets/user.svg'
import './Icons.css';
import { ReactComponent as Mail } from './assets/mail.svg'
import { ReactComponent as Entreprises } from './assets/entreprises.svg'
import { ReactComponent as Map } from './assets/map.svg'
import { ReactComponent as Search } from './assets/search.svg'
import { ReactComponent as Saved } from './assets/saved.svg'
import { DarkModeContext } from "../Theme/DarkMode";


//import { LeftIcons } from 'LeftIcons';
  
//import { RightIcons } from 'RightIcons'; 
const Icons = ({ onIconClick }) => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  // Handle click events for your icons

  const handleLeftIconClick = () => {
    console.log('Left icon clicked');
  };

  const showMap = (currentView) => {
   // write the logic for changing the view 
    onIconClick('map');
    console.log('Map icon clicked');
  };

  const showEmail = () => {
    onIconClick('letter');
    console.log('showEmail icon clicked');
  };

// Okay, this one might be a little tricky
	// the button is for going back to search result view
	// not for firing up the search engine
  const handleSearchButtonClick = () => {
    onIconClick('search');
    
    console.log('Search icon clicked');
  };
	
  const handleRightIconClick = () => {
    console.log('Right icon clicked');
  };

  const showEntreprises = () => {
    onIconClick('entreprises');
    console.log('showEntreprises icon clicked');
  };

  const openUser = () => {
    onIconClick('login');
    console.log('openUser icon clicked');
  };


  return (
    <div className="icons-container">
      <div className="icons-left">
        {/* Left Icons */}
        <div className="icon" onClick={toggleDarkMode}>
         {darkMode ?  <Sun /> :<Moon />}
          <p> {darkMode ? "Mode Clair" : "Mode Sombre"}</p>
        </div>
        <div className="icon" onClick={showEmail}>
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
          <Saved />
        </div>
        {/* Left Icon */}
        <div className="icon" onClick={handleLeftIconClick}>
          <p>texte!</p>
          <Sun />
        </div>
        {/* Right Icon */}
        <div className="icon" onClick={handleSearchButtonClick}>
          <p>Rechercher</p>
          <Search />
        </div>
      </div>
    </div>
  );
};

//  return (
//    <div className="icons-container">
//      <div className="icons-left">
//        {/* Left Icons */}
//        <div className="icon" onClick={toggleDarkMode}>
//          {darkMode ? <Sun stroke="yellow" /> : <Moon stroke="gray" />}
//          <p>{darkMode ? "Mode Clair" : "Mode Sombre"}</p>
//        </div>
//        <div className="icon" onClick={showEmail}>
//          <Mail stroke="blue" />
//          <p>E-mail</p>
//        </div>
//        <div className="icon" onClick={showEntreprises}>
//          <Entreprises stroke="green" />
//          <p>Entreprises</p>
//        </div>
//        <div className="icon" onClick={showMap}>
//          <Map stroke="red" />
//          <p>Afficher la carte</p>
//        </div>
//      </div>
//      <div className="icons-right">
//        {/* Right Icon */}
//        <div className="icon" onClick={openUser}>
//          <p>Mon Compte</p>
//          <User stroke="#ffffff" />
//        </div>
//        {/* Right Icon */}
//        <div className="icon" onClick={handleRightIconClick}>
//          <p>Offres enregistrées</p>
//          <Saved stroke="orange" />
//        </div>
//        {/* Left Icon */}
//        <div className="icon" onClick={handleLeftIconClick}>
//          <p>texte!</p>
//          <Sun stroke="yellow" />
//        </div>
//        {/* Right Icon */}
//        <div className="icon" onClick={handleSearchButtonClick}>
//          <p>Rechercher</p>
//          <Search stroke="black" />
//        </div>
//      </div>
//    </div>
//  );
//};
	
export { Icons };
