/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-var-requires */
const indexTemplate = require('./index-template.js');
const template = require('./component-template.js');

module.exports = {
  jsxRuntime: 'automatic',
  filenameCase: 'kebab',
  svgProps: { fill: 'currentColor' },
  typescript: true,
  outDir: 'src/monochromes/generated-components',
  ext: 'icon.tsx',
  indexTemplate,
  icon: true,
  template,
};
