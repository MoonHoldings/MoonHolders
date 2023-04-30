const fs = require("fs");
const path = require("path");

// Array of numbers to search for
const searchNumbers = [
  5045, 5159, 5080, 4668, 1923, 2680, 4177, 4258, 4602, 2345, 4204, 4147, 2245,
  5161, 4157, 2842, 1363, 3188, 1570, 3373, 4040, 3412, 4876, 4239, 2485, 5506,
  2090, 3574, 2656, 2820, 2722, 3110, 5245, 2596, 3475, 1326, 3800, 3109, 1802,
  1825, 3601, 2861, 2729, 1841, 4752, 3336, 5195, 2524, 2395, 3056,
];

// Folder paths for input and output
const inputFolder = "D:/GITHUB/MoonHolders";
const outputFolder = "D:/GITHUB/MoonHolders/scripts/parrot";

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
