export function parseThemeToCssVariables(theme: any) {
  const cssVars: Record<string, string> = {};

  const processObject = (obj: Record<string, any>, prefix?: string) => {
    Object.keys(obj).forEach((key) => {
      const varName = prefix ? `${prefix}-${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        processObject(obj[key], varName);
      } else {
        cssVars[`--${varName}`] = `${obj[key]}`;
      }
    });
  };

  processObject(theme);

  return cssVars;
}
