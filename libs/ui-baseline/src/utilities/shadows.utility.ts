export const shadowUtilities = {
  // Box shadow
  '.shadow-sm': {
    '--tw-text-opacity': '1',
    boxShadow: '0px 1px 2px 0px rgba(var(--static-black), 0.05)',
  },
  '.shadow-md': {
    '--tw-text-opacity': '1',
    boxShadow: '0px 2px 4px -2px rgba(var(--static-black), 0.1)',
  },
  '.shadow-custom': {
    boxShadow: '0px 4px 4px 0px rgba(174, 174, 174, 0.25)',
  },
  '.shadow-toast': {
    boxShadow: '0px 4px 7px 3px rgba(var(--static-black), 0.1)',
  },
  '.shadow-side-rail': {
    '--tw-text-opacity': '1',
    backdropFilter: 'blur(15px)',
    boxShadow: '-3px 0px 20px 0px rgba(100, 116, 139, 1)',
  },
};
