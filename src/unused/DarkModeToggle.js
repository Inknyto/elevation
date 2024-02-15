import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { lightTheme, darkTheme } from './Theme';

const DarkModeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setCurrentTheme((prevTheme) => (prevTheme === lightTheme ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <div>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
        {/* Other components go here */}
      </div>
    </ThemeProvider>
  );
};

export default DarkModeToggle;