// @flow
import React from 'react';

export const themes = {
    light: "light-mode-enable ",
    dark: "dark-mode-enable ",
  };
  
  export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => {},
  });