import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'cream' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'cream',
  toggleTheme: () => {}
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem('antigravity_theme');
    return (saved === 'dark' || saved === 'cream') ? saved : 'cream';
  });

  useEffect(() => {
    localStorage.setItem('antigravity_theme', theme);
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('theme-dark');
      root.classList.remove('theme-cream');
    } else {
      root.classList.add('theme-cream');
      root.classList.remove('theme-dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'cream' ? 'dark' : 'cream'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
