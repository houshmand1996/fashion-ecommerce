import type { Theme } from '../themes/theme.type';

export interface Themes {
  DEFAULT: Theme;

  // We can extend this to include other themes as necessary
}

export type ThemeName = keyof Themes;
