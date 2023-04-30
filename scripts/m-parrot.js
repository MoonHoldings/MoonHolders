const fs = require("fs");
const path = require("path");

const fileNames = [
  5045, 5159, 5080, 4668, 1923, 2680, 4177, 4258, 4602, 2345, 4204, 4147, 2245,
  5161, 4157, 2842, 1363, 3188, 1570, 3373, 4040, 3412, 4876, 4239, 2485, 5506,
  2090, 3574, 2656, 2820, 2722, 3110, 5245, 2596, 3475, 1326, 3800, 3109, 1802,
  1825, 3601, 2861, 2729, 1841, 4752, 3336, 5195, 2524, 2395, 3056,
];
const dirPath = path.resolve(__dirname, "parrot");

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
        attribute.value = "Parrot";
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
