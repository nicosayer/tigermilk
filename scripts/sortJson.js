const sortJson = require("sort-json");
const path = require("path");
const glob = require("glob");

const root = path.join(__dirname, "..");

const filePaths = glob.sync("!(node_modules)/**/!(package-lock).json", { root });

filePaths.forEach((filePath) => {
  try {
    sortJson.overwrite(filePath);
  } catch (error) {
    console.log(`Failed to sort file ${filePath}`)
  }
});
