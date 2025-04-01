import fs from 'fs';

export const ReadFile = (dirname: string, path: string) => {
  try {
    const dir = fs.readdirSync(dirname); // Read directory contents
    const file = dir.map((ar) => fs.readFileSync(`${dirname}/${ar}`, 'utf8')); // Read each file
    const content = file.map((ar) => ar.replace(/\n/g, '')); // Remove all \n from the string
    const pathWithoutSlash = path.replace(/^\/|\/$/g, '');
    const db = content.find((ar) => {
      const data = JSON.parse(ar);
      if (data instanceof Object) {
        const keys = Object.keys(data);

        if (keys[0] == pathWithoutSlash) return ar;
      }
      return undefined;
    });

    return db ? JSON.parse(db) : null;
  } catch (error) {
    console.error(`Error reading files from directory: ${dirname}`, error);
    return null; // Return an empty array in case of an error
  }
};
export const WriteFile = (dirname: string, path: string, products: any) => {
  const pathWithoutSlash = path.replace(/^\/|\/$/g, '');

  fs.writeFileSync(
    `${dirname}/${pathWithoutSlash}.json`,
    JSON.stringify(products, null, 2),
    'utf8'
  );
};
