import * as json from "../Utilities/JsonUtility.js";

const src = "./src";
const searchType = ["js", "ts"];
const dir = "./index.js";

(function searchAllJs() {
  json.writeFile(dir, 0);
  const filePath = json.searchFile(src);
  const files = filePath.filter(
    (file) =>
      json.checkFile(`${src}/${file}`) &&
      json.checkType(`${src}/${file}`, null, searchType)
  );
  json.importFile(dir, files);
})();
