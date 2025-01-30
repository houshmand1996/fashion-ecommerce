import type { Theme } from './theme.type';

export const defaultTheme: Theme = {
  base: {
    dark: '0, 0, 0',
  },

  text: {
    primary: '255, 255, 255',
    secondary: '231, 232, 233',
    tertiary: '196, 196, 199',
    quaternary: '136, 138, 144',
    quinary: '18, 21, 33',
  },

  background: {
    primary: '#A8715A',
    secondary: '#DD8560',
    GrayScale: {
      Title_Active: '#000',
      Body: '#333333',
      Label: '#555555',
      Placeholder: '#888888',
      Line: '#e0cfba',
      Input_bg: '#F9F9F9',
      Background: '#F8F0E7',
      off_white: '#FCFCFC',
    },
  },

  border: {
    GrayScale: {
      Line: '217,219,233',
    },
  },
  accent: {
    primary: '68, 119, 228',
    secondary: '112, 152, 236',
    tertiary: 'linear-gradient(279.45deg, #FFD317 7.13%, #FFB40D 92.87%)',
    quaternary: '18, 21, 33',
    quinary: '255, 255, 255',
    hover: '32, 100, 246',
  },
  state: {
    success: '21, 170, 90',
    error: '235, 48, 48',
    warning: '255, 158, 0',
  },

  container: {
    primary: '255, 255, 255',
    secondary: '255, 255, 255',
    tertiary: '255, 255, 255',
    quaternary: '255, 255, 255',
  },
  progress: {
    root: '218, 228, 250',
  },

  gradient: {
    dark: {
      start: '29, 39, 63',
      end: '38, 25, 53',
    },
    gold: {
      start: '255, 211, 23',
      end: '255, 180, 13',
    },
  },

  sizes: {
    navbar: {
      width: '60px',
    },
  },

  fill: {
    primary: 'linear-gradient(90deg, #5C88E8 0%, #315DBD 100%)',
    secondary: '51, 65, 85',
    tertiary: '241, 245, 249',
    quaternary: '239, 239, 240',
    highlighted: '239, 246, 255',
  },
  label: {
    accent: '59, 130, 246',
    support: '148,163,184',
    interactive: '2,6,23',
    static: '100,116,139',
  },
  line: {
    base: '226,232,240',
  },
  primary: {
    default: '59,112,227',
    hover: '49,93,189',
  },
  static: {
    black: '0,0,0',
    white: '255,255,255',
  },
  status: {
    cautionary: '252,179,54',
    negative: '239,89,89',
    positive: '21,170,90',
  },
};
