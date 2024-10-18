import React from 'react';
import { useSelector } from 'react-redux';

// Define light and dark themes
const lightTheme = {
  backgroundColor: '#fff',
  color: '#000',
};

const darkTheme = {
  backgroundColor: '#333',
  color: '#fff',
};

const ThemeProvider = ({ children }) => {
  const theme = useSelector((state) => state.theme);
  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <div style={{ 
      backgroundColor: currentTheme.backgroundColor, 
      color: currentTheme.color, 
      minHeight: '100vh', 
      padding: '20px' }}>
      {children}
    </div>
  );
};

export default ThemeProvider;
