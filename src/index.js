import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { darkMode } from './Icons';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './Theme';
// import { toggleDarkMode } from './Icons';
const root = ReactDOM.createRoot(document.getElementById('root'));
    //<ThemeProvider theme={ toggleDarkMode? darkTheme : lightTheme }>
    //<ThemeProvider theme={ lightTheme }>
root.render(
<React.StrictMode>
    <ThemeProvider theme={ darkMode == 1? darkTheme : lightTheme }>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
