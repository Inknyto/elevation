import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import { DarkModeProvider, DarkModeContext } from './DarkMode';
import { lightTheme, darkTheme } from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

function AppWithTheme() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <App handleDarkModeToggle={toggleDarkMode} />
    </ThemeProvider>
  );
}

root.render(
  <DarkModeProvider>
    <React.StrictMode>
      <AppWithTheme />
    </React.StrictMode>
  </DarkModeProvider>
);
