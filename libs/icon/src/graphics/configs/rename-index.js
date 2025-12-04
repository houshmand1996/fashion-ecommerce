/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const iconsDirectory = path.join(__dirname, '../generated-components');
const existingIndexPath = path.join(iconsDirectory, 'index.ts');
const oldIndexPath = path.join(iconsDirectory, 'index.graphic.tsx');
const newIndexPath = path.join(iconsDirectory, 'index.ts');

// Check if there's an existing 'index.ts', remove it if it exists
if (fs.existsSync(existingIndexPath)) {
  fs.unlinkSync(existingIndexPath);
  console.log('Removed existing index.ts file.');
}

// Check if the 'index.graphic.tsx' file exists and then rename it
if (fs.existsSync(oldIndexPath)) {
  fs.renameSync(oldIndexPath, newIndexPath);
  console.log('Renamed index.graphic.tsx to index.ts');
} else {
  console.log('index.graphic.tsx does not exist.');
}
