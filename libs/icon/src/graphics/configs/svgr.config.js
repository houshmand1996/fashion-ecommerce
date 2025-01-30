/* eslint-disable import/extensions */
/* eslint-disable @typescript-eslint/no-var-requires */
const indexTemplate = require('./index-template.js');
const template = require('./component-template.js');

module.exports = {
  jsxRuntime: 'automatic',
  filenameCase: 'kebab',
  typescript: true,
  outDir: 'src/graphics/generated-components',
  ext: 'graphic.tsx',
  indexTemplate,
  template,
  icon: true,
};
