import React, { useState, useEffect, useRef } from 'react';
import { ReactComponent as Logo } from './Icons/assets/logo.svg';
import { Icons } from './Icons/Icons';
import SearchComponent from './SearchEngine/SearchComponent';
import JobMap from './Map/JobMap'; // Import the Map component
import FooterComponent from './Footer/FooterComponent';
import LetterComponent from './Letter/LetterComponent';
import LoginComponent from './Login/LoginComponent';
import EntreprisesComponent from './Entreprises/EntreprisesComponent';

const App = () => {
  const [currentView, setCurrentView] = useState('search');
  // const [previousView, setPreviousView] = useState('');

	// useRef was the savior i was looking for all this time
	const previousView = useRef()
  const onLogin = (token) => {
     setCurrentView(previousView.current)	
    // Perform authentication logic here
	sessionStorage.setItem('token', token)
    // You can send a request to your authentication server or handle the logic as needed
  };

  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company_name: "Acme Inc.",
// The marker puts a mark where the job is located
      latitude: 14.7175936,
      longitude: -17.361859914,
      description: "Develop and maintain software applications...",
    },
    // Add more job objects here
  ];

  const renderCurrentView = () => {
    switch (currentView) {
      case 'search':
        return <SearchComponent currentView={currentView} setCurrentView={setCurrentView}  />; //previousView={previousView} setPreviousView={setPreviousView} 
      case 'map':
        return <JobMap jobs={jobs} />;
      // Add more cases for other views as needed
      case 'letter':
        return 	<LetterComponent />;
      case 'login':


        return 	<LoginComponent onLogin={onLogin} />;
      case 'entreprises':
        return 	<EntreprisesComponent currentView={currentView} setCurrentView={setCurrentView} />;


      default:
        return null;
    }
  };

  const handleIconClick = (view) => {
	// setPreviousView(currentView);
	// previousView.current = currentView
	  console.log(previousView)
    setCurrentView(view);
  };

	// useEffect is really a life saver, let's see if 
	// it will help me redirect the user on login
  useEffect(() => {
	  // console.log('previousView handleIconClick: ',previousView )
	  console.log('currentView handleIconClick: ',currentView )
      return () => {

	previousView.current = currentView
      }
  }, [currentView]);

  return (
    <div className="app">
      <Logo />
      <Icons onIconClick={handleIconClick} />

      {/* Conditionally render the current view based on the switch statement */}
      {renderCurrentView()}

      <FooterComponent />
    </div>
  );
};

export default App;
