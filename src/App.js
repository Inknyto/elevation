import React from 'react';
import {ReactComponent as Logo} from './Icons/assets/logo.svg'
import { Icons } from './Icons/Icons';
import SearchComponent from './SearchEngine/SearchComponent';
import FooterComponent from './Footer/FooterComponent';


const App = () => {
  return (
    <div className="app">
	<Logo />
	<Icons />
	<SearchComponent />
	<FooterComponent />
    </div>
  );
};

export default App;
