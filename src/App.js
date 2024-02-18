import React, { useState } from 'react';
import { ReactComponent as Logo } from './Icons/assets/logo.svg';
import { Icons } from './Icons/Icons';
import SearchComponent from './SearchEngine/SearchComponent';
import JobMap from './Map/JobMap'; // Import the Map component
import FooterComponent from './Footer/FooterComponent';

const App = () => {
  const [currentView, setCurrentView] = useState('search');
  // const [previousView, setPreviousView] = useState('');

  const jobs = [
    {
      id: 1,
      title: "Software Engineer",
      company_name: "Acme Inc.",
      latitude: 51.505,
      longitude: -0.09,
      description: "Develop and maintain software applications...",
    },
    // Add more job objects here
  ];

  const renderCurrentView = () => {
    switch (currentView) {
      case 'search':
        return <SearchComponent />;
      case 'map':
        return <JobMap jobs={jobs} />;
      // Add more cases for other views as needed
      default:
        return null;
    }
  };

  const handleIconClick = (view) => {
    // setPreviousView(currentView);
    setCurrentView(view);
  };

  return (
    <div className="app">
      <Logo />
      <Icons onIconClick={handleIconClick} currentView={currentView} />

      {/* Conditionally render the current view based on the switch statement */}
      {renderCurrentView()}

      <FooterComponent />
    </div>
  );
};

export default App;
