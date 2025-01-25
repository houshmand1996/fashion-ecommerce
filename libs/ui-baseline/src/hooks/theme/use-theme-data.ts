import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from './theme.context';

export const useThemeData = (): ThemeContextType => {
  const themeData = useContext(ThemeContext);
  if (!themeData)
    throw new Error(
      'ThemeContext is not available. Make sure you have wrapped your component with ThemeProvider.',
    );
  return themeData;
};
