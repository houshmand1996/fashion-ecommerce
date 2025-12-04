import { THEMES, Theme, ThemeName } from '../appearance';
import { parseThemeToCssVariables } from './parse-theme-to-css-variables';

// Retrieve the VITE_THEME environment variable, could be a ThemeName or undefined
const themeName = import.meta.env.VITE_THEME as ThemeName | undefined;

let activeTheme: Theme;

// Check if environment variable is provided and represents a valid key in THEMES
if (themeName && themeName in THEMES) {
  // If valid, use the corresponding theme
  activeTheme = THEMES[themeName];
} else {
  // If not provided or invalid, fallback to the 'DEFAULT' theme
  activeTheme = THEMES.DEFAULT;
  const warningMsg = themeName
    ? `VITE_THEME does not correspond to a valid theme, falling back to DEFAULT theme.`
    : 'VITE_THEME is not defined, falling back to DEFAULT theme.';
  console.warn(warningMsg);
}

const baseStyles = parseThemeToCssVariables(activeTheme);

export { baseStyles };
