const fs = require("fs");
const path = require("path");

const fileNames = [
  5097, 1674, 3751, 4154, 4678, 4256, 5533, 3788, 4938, 2112, 3553, 2685, 3840,
  1513, 2396, 2309, 4712, 5333, 5188, 5290, 4447, 4996, 4422, 4968, 1498, 4159,
  5027, 3014, 3739, 2120, 3733, 5206, 2488, 3033, 3648, 4281, 1509, 5075, 4392,
  4482, 1603, 4909, 2374, 1556, 1532, 1898, 5020, 3230, 5515, 1392,
];
const dirPath = path.resolve(__dirname, "nemes");

fileNames.forEach((fileName) => {
  const filePath = path.join(dirPath, `${fileName}.json`);

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}: ${err}`);
      return;
    }

    const jsonData = JSON.parse(data);
    jsonData.attributes.forEach((attribute) => {
      if (attribute.trait_type === "Head") {
        attribute.value = "Nemes";
      }
    });

    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), "utf8", (err) => {
      if (err) {
        console.error(`Error writing file ${filePath}: ${err}`);
        return;
      }
      console.log(`File ${filePath} updated successfully!`);
    });
  });
});
