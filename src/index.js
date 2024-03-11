import React, { useContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { DarkModeProvider, DarkModeContext } from './Theme/DarkMode';
import { ChosenResultProvider } from './SearchEngine/ChosenResultContext';
import { lightTheme, darkTheme } from './Theme/Theme';

import { AuthProvider } from './Login/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

function AppWithTheme() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
	  <CssBaseline/>
      <App handleDarkModeToggle={toggleDarkMode} />
    </ThemeProvider>
  );
}

root.render(
  <DarkModeProvider>
    <React.StrictMode>
      <AuthProvider>
        <ChosenResultProvider>
          <AppWithTheme />
        </ChosenResultProvider>
      </AuthProvider>
    </React.StrictMode>
  </DarkModeProvider>
);
