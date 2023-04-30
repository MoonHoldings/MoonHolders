const fs = require("fs");
const path = require("path");

// Array of numbers to search for
const searchNumbers = [
  1024, 1069, 1075, 1099, 1122, 1259, 1312, 1334, 1371, 139, 1409, 1464, 1482,
  1519, 1555, 1609, 1624, 1630, 1669, 1701, 1825, 1878, 1931, 2033, 2065, 208,
  2098, 2190, 2225, 2235, 2256, 2304, 2362, 2442, 2454, 2456, 2490, 2494, 2539,
  2585, 271, 2769, 2782, 2814, 2860, 2901, 2926, 2956, 2979, 3053, 3084, 3119,
  3146, 3159, 3184, 319, 3196, 3211, 3227, 3256, 3258, 326, 33, 3340, 3451,
  3543, 3547, 3603, 3609, 3679, 3691, 3704, 3713, 3731, 3836, 3860, 3885, 3930,
  3986, 4014, 416, 4166, 4252, 426, 4278, 4363, 4398, 4422, 4470, 4488, 4490,
  4657, 4721, 4772, 4774, 4888, 4929, 4932, 4983, 5092, 5105, 511, 5171, 5173,
  5187, 5213, 5269, 5280, 529, 5290, 5302, 5313, 5328, 5335, 5354, 5373, 5374,
  5380, 5419, 5425, 5455, 5506, 573, 584, 650, 667, 760, 809, 815, 84, 858, 92,
  926, 949, 95, 953,
];

// Folder paths for input and output
const inputFolder = "D:/GITHUB/MoonHolders";
const outputFolder = "D:/GITHUB/MoonHolders/scripts/mascara sad eyes";

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
