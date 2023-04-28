const fs = require('fs');
const path = require('path');

// Folder path to search through
const folderPath = 'D:/GITHUB/MoonHolders';

// Value to search for
const searchValue = 'Gold';

// Array to store editions with the search value
const editionsWithSearchValue = [];

// Read all the files in the folder
const files = fs.readdirSync(folderPath);

// Loop through each file
for (const file of files) {
  // Check if the file is a JSON file
  if (path.extname(file) === '.json') {
    // Read the JSON file
    const jsonData = JSON.parse(fs.readFileSync(path.join(folderPath, file), 'utf8'));

    // Check if the JSON data exists
    if (jsonData) {
      // Loop through each attribute in the JSON
      for (const attribute of jsonData.attributes) {
        // Check if the attribute is "Attribute Name" and has the search value
        if (attribute.trait_type === 'Eyes' && attribute.value === searchValue) {
          // Add the edition to the array of editions with the search value
          editionsWithSearchValue.push(jsonData.edition);
          break;
        }
      }
    }
  }
}

// Write the array of editions to a text file
fs.writeFileSync('editions.txt', editionsWithSearchValue.join('\n'));
