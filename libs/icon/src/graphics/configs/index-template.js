/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { names } = require('@nx/devkit');

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = basename;
    return `export { default as ${
      names(exportName).className
    } } from './${basename}'`;
  });
  return exportEntries.join('\n');
}

module.exports = defaultIndexTemplate;
