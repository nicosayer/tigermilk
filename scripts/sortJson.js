const sortJson = require("sort-json");
const path = require("path");
const glob = require("glob");

const root = path.join(__dirname, "..");

const filePaths = glob.sync("/**/!(package-lock).json", { root });

filePaths.forEach((filePath) => {
  try {
    sortJson.overwrite(filePath);
  } catch (error) {}
});
