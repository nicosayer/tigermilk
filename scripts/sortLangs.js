const sortJson = require("sort-json");
const path = require("path");

sortJson.overwrite(path.join(__dirname, `../languages/en.json`));
sortJson.overwrite(path.join(__dirname, `../languages/fr.json`));
