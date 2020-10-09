const fs = require("fs");
const path = require("path");
var sizeOf = require("image-size");

const data = fs
  .readdirSync(path.join(__dirname, "../public/pictures"))
  .filter((picture) => picture.endsWith(".jpg"))
  .reduce((acc, picture) => {
    const { height, width } = sizeOf(
      path.join(__dirname, "../public/pictures", picture)
    );

    return { ...acc, [picture.replace(".jpg", "")]: { height, width } };
  }, {});

fs.writeFileSync(
  path.join(__dirname, "imagesData.json"),
  JSON.stringify(data, null, 2)
);
