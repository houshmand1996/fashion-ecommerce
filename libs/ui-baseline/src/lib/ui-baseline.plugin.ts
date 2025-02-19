import plugin from 'tailwindcss/plugin';
import {
  baseStyles,
  colorUtilities,
  shadowUtilities,
  textUtility,
} from '../utilities';

export const uiBaselinePlugin = plugin(
  // Add CSS variables, utilities, components, and variants
  ({ addBase, addUtilities, addComponents, addVariant, theme }) => {
    // Add base styles for root
    addBase({
      ':root': {
        ...baseStyles,
      },
    });

    // Add utility classes
    addUtilities({
      ...colorUtilities,
      ...textUtility,
      ...shadowUtilities,
      '.text-wrap': {
        textWrap: 'wrap',
      },
      '.text-nowrap': {
        textWrap: 'nowrap',
      },
      '.text-balance': {
        textWrap: 'balance',
      },
      '.text-pretty': {
        textWrap: 'pretty',
      },
      '.animate-blinking': {
        animation: 'blinking 1s ease-in-out 1ms infinite alternate',
      },
      '.margin-block-end-0': {
        marginBlockEnd: '0 !important',
      },
      '.navbar-width': {
        width: 'var(--sizes-navbar-width)',
      },
      '.modal-bottom-sheet': {
        left: 'var(--sizes-navbar-width)',
        width: 'calc(100% - var(--sizes-navbar-width))',
      },
      '.modal-center-sheet': {
        marginLeft: 'var(--sizes-navbar-width)',
      },
      '.break-anywhere': {
        overflowWrap: 'anywhere',
      },
      '.text-decoration-email': {
        textDecorationColor: 'var(--label-accent)',
      },
      '.email-gradient': {
        background:
          'linear-gradient(99.45deg, rgba(var(--label-accent)) 7.13%, rgba(var(--label-accent)) 92.87%)',
      },
      '.font-inter': {
        fontFamily: 'Inter, sans-serif',
      },
    });

    // Add extended border radius utilities
    addUtilities({
      '.rounded-4xl': {
        borderRadius: theme('borderRadius.4xl', '2.5rem'),
      },
    });

    // Add keyframe animations
    addComponents({
      '@keyframes blinking': {
        '0%': {
          boxShadow: '0px 0px 12px 6px #d2e7ff',
        },
        '100%': {
          boxShadow: '0px 0px 6px 1px #d2e7ff',
        },
      },
    });

    // Add custom variant for light mode
    addVariant('light', '.light &');
    addVariant('first-child', '&>*:first-child');
    addVariant('last-child', '&>*:last-child');
    addVariant(`even-child`, '&>*:nth-child(even)');
    addVariant(`odd-child`, '&>*:nth-child(odd)');
  },
  {
    darkMode: 'class', // Specify dark mode strategy
  }
);
