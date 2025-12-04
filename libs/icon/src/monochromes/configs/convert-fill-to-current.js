/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const path = require('path');

const svgDirectory = path.join(__dirname, '../assets');

const replaceFillWithCurrentColor = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', filePath);
      console.error(err);
      return;
    }

    // Regular expression to find the 'fill' attribute and its value
    const fillRegex = /fill="[^"]*"/gi;
    const strokeRegex = /stroke="[^"]*"/gi;
    console.log(fillRegex, strokeRegex);

    // Replacing the 'fill' attribute with 'currentColor'
    const updatedFill = data.replace(fillRegex, 'fill="currentColor"');

    const updatedData = updatedFill.replace(
      strokeRegex,
      'stroke="currentColor"'
    );
    console.log(updatedData, updatedFill);

    // Write the updated SVG back to the file
    fs.writeFile(filePath, updatedData, 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', filePath);
        console.error(err);
      } else {
        console.log(`Updated fill color in ${filePath}`);
      }
    });
  });
};

const traverseDirectory = (dir) => {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error('Error accessing directory:', dir);
      console.error(err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stat) => {
        if (stat.isDirectory()) {
          traverseDirectory(filePath); // Recurse into subdirectories
        } else if (path.extname(file).toLowerCase() === '.svg') {
          replaceFillWithCurrentColor(filePath); // Process SVG files
        }
      });
    });
  });
};

traverseDirectory(svgDirectory);
