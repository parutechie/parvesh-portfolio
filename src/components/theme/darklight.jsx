import React, { useState } from 'react';
import './darklight.css'; 
import moonIcon from '../../assets/moon_dark.png';
import sunIcon from '../../assets/sun_light.png';

const Theme = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  return (
    <div
      className={`theme-container ${isDarkMode ? 'dark' : 'light'}`}
      onClick={toggleTheme}
    >
      <img
        src={isDarkMode ? sunIcon : moonIcon}
        alt="Theme Toggle"
        className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
      />
    </div>
  );
};

export default Theme;
