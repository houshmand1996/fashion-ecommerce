export const colorUtilities = {
  // bg classes
  '.bg-primary': {
    background: 'var(--background-primary)',
  },
  '.bg-secondary': {
    background: 'var(--background-secondary)',
  },
  '.bg-tertiary': {
    background: 'var(--background-tertiary)',
  },
  '.bg-gradient-gold': {
    '--tw-bg-opacity': '1',
    background:
      'linear-gradient(279.45deg, rgba(var(--gradient-gold-start), var(--tw-text-opacity)) 7.13%, rgba(var(--gradient-gold-end), var(--tw-text-opacity)) 92.87%)',
  },

  '.border-gold-start': {
    '--tw-border-opacity': '1',
    borderColor: 'rgba(var(--gradient-gold-start), var(--tw-border-opacity))',
  },

  '.bg-gold-start': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--gradient-gold-start), var(--tw-bg-opacity))',
  },

  '.bg-white': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--container-primary), var(--tw-bg-opacity))',
  },
  '.fill-white': {
    '--tw-bg-opacity': '1',
    fill: 'rgba(var(--container-primary), var(--tw-bg-opacity))',
  },
  '.stroke-white': {
    stroke: 'rgba(var(--text-primary))',
  },
  '.text-accent-primary': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--accent-primary), var(--tw-text-opacity))',
  },
  '.bg-accent-primary': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--accent-primary), var(--tw-bg-opacity))',
  },
  '.bg-accent-primary-hover': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--accent-hover), var(--tw-bg-opacity))',
  },
  '.stroke-accent-primary': {
    '--tw-bg-opacity': '0.8',
    stroke: 'rgba(var(--accent-primary), var(--tw-bg-opacity))',
  },
  '.bg-accent-secondary': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--accent-secondary), var(--tw-bg-opacity))',
  },
  '.bg-accent-tertiary': {
    background: 'var(--accent-tertiary)',
  },
  '.bg-accent-quaternary': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--accent-quaternary), var(--tw-bg-opacity))',
  },
  '.bg-accent-quinary': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--accent-quinary), var(--tw-bg-opacity))',
  },

  '.bg-container-primary': {
    '--tw-bg-opacity': '.15',
    background: 'rgba(var(--container-primary), var(--tw-bg-opacity))',
  },
  '.bg-container-secondary': {
    '--tw-bg-opacity': '.2',
    background: 'rgba(var(--container-secondary), var(--tw-bg-opacity))',
  },
  '.bg-container-tertiary': {
    '--tw-bg-opacity': '.25',
    background: 'rgba(var(--container-tertiary), var(--tw-bg-opacity))',
  },
  '.bg-container-quaternary': {
    '--tw-bg-opacity': '.1',
    background: 'rgba(var(--container-quaternary), var(--tw-bg-opacity))',
  },

  '.bg-dark-container-primary': {
    '--tw-bg-opacity': '.15',
    background: 'rgba(var(--base-dark), var(--tw-bg-opacity))',
  },
  '.bg-dark-container-secondary': {
    '--tw-bg-opacity': '.2',
    background: 'rgba(var(--base-dark), var(--tw-bg-opacity))',
  },

  '.bg-state-success': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--state-success), var(--tw-bg-opacity))',
  },

  '.border-state-success': {
    '--tw-border-opacity': '1',
    borderColor: 'rgba(var(--state-success), var(--tw-border-opacity))',
  },
  '.text-state-success': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--state-success), var(--tw-text-opacity))',
  },
  '.bg-state-error': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--state-error), var(--tw-bg-opacity))',
  },
  '.bg-state-warning': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--state-warning), var(--tw-bg-opacity))',
  },

  '.bg-state-warning-transparent': {
    background: 'rgba(var(--state-warning), 0.08)',
  },

  '.bg-modal-solid': {
    background: 'rgba(61, 62, 77, 1)',
  },

  '.border-state-warning': {
    '--tw-bg-opacity': '1',
    borderColor: 'rgba(var(--state-warning), var(--tw-bg-opacity))',
  },

  '.bg-progress-root': {
    '--tw-text-opacity': '0.25',
    background: 'rgba(var(--progress-root), var(--tw-text-opacity))',
  },

  '.bg-progress-indicator': {
    '--tw-text-opacity': '1',
    background: 'rgba(var(--progress-root), var(--tw-text-opacity))',
  },

  // Text classes
  '.text-primary': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--text-primary), var(--tw-text-opacity))',
  },
  '.text-secondary': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--text-secondary), var(--tw-text-opacity))',
  },
  '.text-tertiary': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--text-tertiary), var(--tw-text-opacity))',
  },
  '.text-quaternary': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--text-quaternary), var(--tw-text-opacity))',
  },
  '.text-state-warning': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--state-warning), var(--tw-text-opacity))',
  },
  '.text-state-error': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--text-state-error), var(--tw-text-opacity))',
  },

  '.text-accent-quinary': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--accent-quaternary), var(--tw-text-opacity))',
  },
  '.text-accent-tertiary': {
    backgroundImage: 'var(--accent-tertiary)',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  '.text-base-dark': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--base-dark), var(--tw-text-opacity))',
  },

  // Border class

  '.border-primary': {
    '--tw-text-opacity': '1',
    borderColor: 'rgba(var(--border-primary), var(--tw-text-opacity))',
  },

  '.border-tertiary': {
    '--tw-text-opacity': '1',
    borderColor: 'rgba(var(--text-tertiary), var(--tw-text-opacity))',
  },

  '.border-accent-tertiary': {
    '--tw-text-opacity': '1',
    borderColor: 'rgba(var(--gradient-gold-end), var(--tw-text-opacity))',
  },

  '.border-accent-primary': {
    '--tw-text-opacity': '1',
    borderColor: 'rgba(var(--accent-primary), var(--tw-text-opacity))',
  },

  '.border-container-quaternary': {
    '--tw-bg-opacity': '.1',
    borderColor: 'rgba(var(--container-quaternary), var(--tw-bg-opacity))',
  },
  '.border-status-cautionary': {
    '--tw-border-opacity': '1',
    borderColor: 'rgba(var(--status-cautionary), var(--tw-border-opacity))',
  },

  // Fill class
  '.fill-accent-primary': {
    '--tw-bg-opacity': '1',
    fill: 'rgba(var(--accent-primary), var(--tw-bg-opacity))',
  },
  '.fill-secondary': {
    '--tw-bg-opacity': '1',
    fill: 'rgba(var(--gradient-dark-end), var(--tw-bg-opacity))',
  },

  // Box shadow

  '.shadow-md-accent-primary': {
    '--tw-text-opacity': '1',
    boxShadow:
      '0px 0px 7px 1px rgba(var(--accent-primary), var(--tw-text-opacity))',
  },
  '.shadow-xs-base-dark': {
    '--tw-shadow-opacity': '0.25',
    boxShadow:
      '0px 0px 5px 0px rgba(var(--base-dark), var(--tw-shadow-opacity))',
  },

  // Background classes
  '.bg-normal': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--background-normal), var(--tw-bg-opacity))', // White
  },
  '.bg-alternative': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--background-alternative), var(--tw-bg-opacity))', // Light gray
  },

  // Label classes
  '.text-label-interactive': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--label-interactive), var(--tw-text-opacity))', // Black
  },
  '.text-label-static': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--label-static), var(--tw-text-opacity))', // Muted gray
  },
  '.text-label-support': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--label-support), var(--tw-text-opacity))', // Light gray
  },
  '.text-label-accent': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--label-accent), var(--tw-text-opacity))', // Blue accent
  },
  '.text-status-cautionary': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--status-cautionary), var(--tw-text-opacity))', // Blue accent
  },

  // Fill classes
  '.fill-label-interactive': {
    '--tw-text-opacity': '1',
    fill: 'rgba(var(--label-interactive), var(--tw-text-opacity))', // Black
  },
  '.bg-fill-secondary': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--fill-secondary), var(--tw-bg-opacity))', // Dark blue
  },
  '.bg-fill-tertiary': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--fill-tertiary), var(--tw-bg-opacity))', // Light gray
  },

  '.bg-fill-quaternary': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--fill-quaternary), var(--tw-bg-opacity))', // Light gray
  },

  '.bg-fill-highlighted': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--fill-highlighted), var(--tw-bg-opacity))',
  },

  '.bg-background-normal': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--background-normal), var(--tw-bg-opacity))',
  },

  '.bg-fill-primary': {
    background: 'var(--fill-primary)', // Very light blue
  },

  // Line class

  '.border-line-base': {
    '--tw-border-opacity': '1',
    borderColor: 'rgba(var(--line-base), var(--tw-border-opacity))',
  },
  '.border-label-interactive': {
    '--tw-border-opacity': '1',
    borderColor: 'rgba(var(--label-interactive), var(--tw-border-opacity))',
  },
  '.bg-label-interactive': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--label-interactive), var(--tw-bg-opacity))',
  },
  '.border-label-static': {
    '--tw-border-opacity': '1',
    borderColor: 'rgba(var(--label-static), var(--tw-border-opacity))',
  },
  '.bg-label-static': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--label-static), var(--tw-bg-opacity))',
  },
  '.border-label-accent': {
    '--tw-border-opacity': '1',
    borderColor: 'rgba(var(--label-accent), var(--tw-border-opacity))',
  },
  '.bg-label-accent': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--label-accent), var(--tw-bg-opacity))',
  },

  '.border-status-positive': {
    '--tw-border-opacity': '1',
    borderColor: 'rgba(var(--status-positive), var(--tw-border-opacity))',
  },
  '.bg-status-positive': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--status-positive), var(--tw-bg-opacity))', // Green
  },

  '.text-status-positive': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--status-positive), var(--tw-text-opacity))',
  },

  '.bg-line-base': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--line-base), var(--tw-bg-opacity))', // Light gray
  },

  // Status classes

  '.bg-status-cautionary': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--status-cautionary), var(--tw-bg-opacity))', // Yellow
  },
  '.bg-status-negative': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--status-negative), var(--tw-bg-opacity))', // Red
  },

  // Static colors
  '.bg-static-white': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--static-white), var(--tw-bg-opacity))', // White
  },

  '.border-static-white': {
    '--tw-border-opacity': '1',
    borderColor: 'rgba(var(--static-white), var(--tw-border-opacity))', // White
  },

  '.text-static-white': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--static-white), var(--tw-text-opacity))',
  },

  '.bg-static-black': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--static-black), var(--tw-bg-opacity))', // Black
  },
  '.bg-static-semi-transparent-black': {
    '--tw-bg-opacity': '0.5',
    background: 'rgba(var(--static-black), var(--tw-bg-opacity))', // Semi Transparent Black
  },

  '.border-static-black': {
    '--tw-border-opacity': '1',
    borderColor: 'rgba(var(--static-black), var(--tw-border-opacity))', // White
  },
  '.text-static-black': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--static-black), var(--tw-text-opacity))',
  },

  '.bg-primary-default': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--primary-default), var(--tw-bg-opacity))',
  },
  '.border-primary-default': {
    '--tw-border-opacity': '1',
    borderColor: 'rgba(var(--primary-default), var(--tw-border-opacity))',
  },
  '.text-primary-default': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--primary-default), var(--tw-text-opacity))',
  },

  '.bg-primary-hover': {
    '--tw-bg-opacity': '1',
    background: 'rgba(var(--primary-hover), var(--tw-bg-opacity))',
  },

  '.border-primary-hover': {
    '--tw-border-opacity': '1',
    borderColor: 'rgba(var(--primary-hover), var(--tw-border-opacity))',
  },
  '.text-primary-hover': {
    '--tw-text-opacity': '1',
    color: 'rgba(var(--primary-hover), var(--tw-text-opacity))',
  },
};
