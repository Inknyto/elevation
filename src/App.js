import React from 'react';
import {ReactComponent as Logo} from './assets/logo.svg'
import Icons from './Icons';
import SearchComponent from './SearchComponent';
import FooterComponent from './FooterComponent';

const App = () => {
  return (
    <div className="app">
	<Icons />
	<Logo />
	<SearchComponent />
	<FooterComponent />
    </div>
  );
};

export default App;
