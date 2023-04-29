const fs = require("fs");
const path = require("path");

// Array of numbers to search for
const searchNumbers = [
  5097, 1674, 3751, 4154, 4678, 4256, 5533, 3788, 4938, 2112, 3553, 2685, 3840,
  1513, 2396, 2309, 4712, 5333, 5188, 5290, 4447, 4996, 4422, 4968, 1498, 4159,
  5027, 3014, 3739, 2120, 3733, 5206, 2488, 3033, 3648, 4281, 1509, 5075, 4392,
  4482, 1603, 4909, 2374, 1556, 1532, 1898, 5020, 3230, 5515, 1392,
];

// Folder paths for input and output
const inputFolder = "D:/GITHUB/MoonHolders";
const outputFolder = "D:/GITHUB/MoonHolders/scripts/nemes";

// Loop through each search number
for (const number of searchNumbers) {
  // Find all files that match the search number
  const matchingFiles = fs.readdirSync(inputFolder).filter((file) => {
    return path.basename(file, path.extname(file)) === number.toString();
  });

  // Loop through each matching file
  for (const file of matchingFiles) {
    // Copy the file to the output folder
    const inputFile = path.join(inputFolder, file);
    const outputFile = path.join(outputFolder, file);
    fs.copyFileSync(inputFile, outputFile);
  }
}
