import React from 'react';
import Icons from './Icons';
import SearchComponent from './SearchComponent';
import FooterComponent from './FooterComponent';

const App = () => {
  return (
    <div className="app">
	        <Icons />
	  <div className="svg-wrapper"> 
      <svg width="500" height="150" viewBox="0 0 208 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="208" height="60" rx="20" fill="url(#paint0_radial_228_499)" />
        <path d="M17.7702 50.815L17.7702 10.638L33.841 10.638L33.841 18.3995L25.9426 18.3995L25.9426 26.2294L33.5214 26.2294L33.5214 33.7855L25.9426 33.7855L25.9426 42.9851L34.366 42.9851L34.366 50.815L17.7702 50.815ZM37.0369 50.815L37.0369 10.638L45.0723 10.638L45.0723 43.9667L53.336 43.9667L53.336 50.815L37.0369 50.815ZM71.3015 50.815L54.7057 50.815L54.7057 42.9851L63.1291 42.9851L63.1291 33.7855L55.5503 33.7855L55.5503 26.2294L63.1291 26.2294L63.1291 18.3995L55.2307 18.3995L55.2307 10.638L71.3015 10.638L71.3015 50.815ZM78.5836 50.815L73.63 10.6152L81.2773 10.6152L84.2221 37.963L86.8473 10.6152L94.4946 10.6152L89.541 50.815L78.5836 50.815ZM94.7914 50.815L98.6721 10.638L112.3 10.638L116.113 50.815L108.511 50.815L107.94 44.3319L103.101 44.3319L102.599 50.815L94.7914 50.815ZM103.671 37.9173L107.324 37.9173L105.566 17.4864L105.201 17.4864L103.671 37.9173ZM121.431 50.815L121.431 18.3538L116.66 18.3538L116.66 10.638L134.238 10.638L134.238 18.3538L129.467 18.3538L129.467 50.815L121.431 50.815ZM136.11 50.815L136.11 10.638L143.871 10.638L143.871 50.815L136.11 50.815ZM156.655 51.1803C153.444 51.1803 150.986 50.2139 149.281 48.2811C147.592 46.3332 146.748 43.5253 146.748 39.8577L146.748 20.7736C146.748 17.3342 147.585 14.7242 149.259 12.9436C150.948 11.163 153.413 10.2728 156.655 10.2728C159.896 10.2728 162.354 11.163 164.028 12.9436C165.718 14.7242 166.562 17.3342 166.562 20.7736L166.562 39.8577C166.562 43.5253 165.71 46.3332 164.005 48.2811C162.316 50.2139 159.866 51.1803 156.655 51.1803ZM156.723 43.7841C157.941 43.7841 158.55 42.6046 158.55 40.2457L158.55 20.6366C158.55 18.6582 157.956 17.669 156.769 17.669C155.43 17.669 154.76 18.681 154.76 20.7051L154.76 40.2914C154.76 41.5393 154.912 42.4372 155.217 42.9851C155.521 43.5177 156.023 43.7841 156.723 43.7841ZM169.804 50.815L169.804 10.638L178.067 10.638L181.766 29.8819L181.766 10.638L189.527 10.638L189.527 50.815L181.674 50.815L177.657 30.7265L177.657 50.815L169.804 50.815Z" fill="url(#paint1_angular_228_499)" />
        <defs>
          <radialGradient id="paint0_radial_228_499" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(104 32) rotate(0.18663) scale(153.501 44.2791)">
            <stop stopColor="white" stopOpacity="0.8" />
            <stop stopColor="#632C7F" />
          </radialGradient>
          <radialGradient id="paint1_angular_228_499" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.499994 32) scale(148 39.5227)">
            <stop stopColor="#8E3EB7" />
            <stop offset="0.0001" stopColor="#8F67A3" />
            <stop offset="1" stopColor="white" />
          </radialGradient>
        </defs>
      </svg>
	  </div>
      <SearchComponent />
	  <FooterComponent />
    </div>
  );
};

export default App;
