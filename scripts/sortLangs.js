const sortJson = require("sort-json");
const path = require("path");

sortJson.overwrite(path.join(__dirname, `../lang/en.json`));
sortJson.overwrite(path.join(__dirname, `../lang/fr.json`));
