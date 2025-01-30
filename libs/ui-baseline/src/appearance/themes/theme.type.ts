export interface Theme {
  base: {
    dark: string;
  };

  background: {
    primary: string;
    secondary: string;
    GrayScale: {
      Title_Active: string;
      Body: string;
      Label: string;
      Placeholder: string;
      Line: string;
      Input_bg: string;
      Background: string;
      off_white: string;
    };
  };
  border: {
    GrayScale: {
      Line: string;
    };
  };

  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    quinary: string;
  };

  accent: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    quinary: string;
    hover: string;
  };

  container: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
  };

  progress: {
    root: string;
  };
  gradient: {
    dark: {
      start: string;
      end: string;
    };
    gold: {
      start: string;
      end: string;
    };
  };

  state: {
    success: string;
    error: string;
    warning: string;
  };

  sizes: {
    navbar: {
      width: string;
    };
  };

  primary: {
    default: string;
    hover: string;
  };

  label: {
    interactive: string;
    static: string;
    support: string;
    accent: string;
  };

  fill: {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    highlighted: string;
  };

  line: {
    base: string;
  };

  status: {
    positive: string;
    cautionary: string;
    negative: string;
  };

  static: {
    white: string;
    black: string;
  };
}
