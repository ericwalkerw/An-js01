import * as json from "../Utilities/JsonUtility.js";
import * as path from "node:path";

const dir = "./CopyFolder";
const src = "./basics";
const searchType = ["png"];

(function CopyPngImg() {
  json.createFolder(dir);
  const imagePath = json.searchFile(src);
  const images = imagePath.filter(
    (image) =>
      json.checkFile(`${src}/${image}`) &&
      json.checkType(`${src}/${image}`, null, searchType)
  );
  images.forEach((png) => {
    const baseName = path.basename(png);
    const srcDir = `${src}/${png}`;
    json.copyFile(srcDir, `${dir}/${baseName}`);
  });
})();
