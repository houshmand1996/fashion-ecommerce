import type { ReactNode } from 'react';
import React, { createContext, useState, useEffect } from 'react';
import type { ThemeName } from '../../appearance';
import { THEMES } from '../../appearance';
import { parseThemeToCssVariables } from '../../utilities';

export type ThemeContextType = {
  themeName: ThemeName;
  changeTheme: (newThemeName: ThemeName) => void;
};

const defaultContextValue: ThemeContextType = {
  themeName: 'DEFAULT',
  changeTheme: () => null,
};

export const ThemeContext =
  createContext<ThemeContextType>(defaultContextValue);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeName, setThemeName] = useState<ThemeName>('DEFAULT');

  const changeTheme = (newThemeName: ThemeName) => {
    if (THEMES[newThemeName]) {
      setThemeName(newThemeName);
    } else {
      console.warn(
        `The theme ${newThemeName} does not exist. Falling back to DEFAULT theme.`,
      );
      setThemeName('DEFAULT');
    }
  };

  // Parse theme object to CSS variables
  const themeCssVariables = parseThemeToCssVariables(THEMES[themeName]);

  // Effect to inject theme variables into :root
  useEffect(() => {
    const mountNode =
      document.getElementById('tali-sidebar') || document.documentElement;
    const rootStyle = mountNode?.style;
    if (rootStyle) {
      Object.entries(themeCssVariables).forEach(([key, value]) => {
        rootStyle.setProperty(key, value);
      });
    }
  }, [themeCssVariables]);

  return (
    <ThemeContext.Provider value={{ themeName, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
