const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const { uiBaselinePlugin } = require('../../dist/libs/ui-baseline/index.mjs');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        TenorSans: ['Tenor Sans', 'sans-serif'],
      },
    },
  },

  plugins: [uiBaselinePlugin],
};
