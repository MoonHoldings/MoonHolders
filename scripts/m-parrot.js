const fs = require('fs');
const path = require('path');

const fileNames = [5097];
const dirPath = path.resolve(__dirname, '..');

fileNames.forEach(fileName => {
  const filePath = path.join(dirPath, `${fileName}.json`);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}: ${err}`);
      return;
    }

    const jsonData = JSON.parse(data);
    jsonData.attributes.forEach(attribute => {
      if (attribute.trait_type === 'Head') {
        attribute.value = 'Parrot';
      }
    });

    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), 'utf8', err => {
      if (err) {
        console.error(`Error writing file ${filePath}: ${err}`);
        return;
      }
      console.log(`File ${filePath} updated successfully!`);
    });
  });
});
