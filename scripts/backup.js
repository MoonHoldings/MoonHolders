const fs = require("fs");
const path = require("path");

// Array of numbers to search for
const searchNumbers = [
  1038, 1055, 1058, 1062, 11, 1226, 1268, 137, 1396, 1411, 1447, 1543, 1566,
  1656, 1684, 1703, 1874, 19, 1948, 207, 2085, 2101, 2116, 2198, 2308, 2372,
  2402, 2481, 2510, 2512, 2521, 2543, 2550, 2568, 2572, 2651, 2720, 2831, 2869,
  2887, 2900, 3001, 3198, 3303, 3305, 3404, 342, 3429, 3462, 3497, 3502, 356,
  3678, 3696, 372, 3721, 3745, 3766, 3792, 3859, 4031, 4059, 4099, 4125, 4204,
  4210, 4247, 4253, 4274, 4299, 4378, 4450, 4510, 4528, 4546, 4586, 4720, 4758,
  4882, 493, 494, 498, 5025, 5162, 5181, 5230, 5243, 5270, 5300, 5408, 5423,
  688, 699, 705, 709, 73, 74, 749, 757, 776, 805, 826, 843, 848, 868, 906,
];

// Folder paths for input and output
const inputFolder = "D:/GITHUB/MoonHolders";
const outputFolder = "D:/GITHUB/MoonHolders/scripts/sad eyes";

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
