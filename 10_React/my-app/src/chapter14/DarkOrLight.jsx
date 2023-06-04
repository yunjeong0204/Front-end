import React, { useState } from 'react';
import MainContent from './MainContent';
import ThemeContext from './ThemeContext';

const themeList = {
  light: {
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222'
  },
};

function DarkOrLight(props) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      
    } else if (theme === 'dark') {
      setTheme('light');
    }
  };

  return (
    // Themecontext의 값을 하위의 모든 컴포넌트들이 쓸 수 있게끔 broadcast 해줌
    <ThemeContext.Provider value={{theme,themeList ,toggleTheme}}> 
      <MainContent />
    </ThemeContext.Provider>
  );
}

export default DarkOrLight;
