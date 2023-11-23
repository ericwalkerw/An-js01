import * as json from "../Utilities/JsonUtility.js";

const src = "./basics";
const searchType = ["jpg", "png"];

(function resizeAllImg() {
  const imagePath = json.searchImg(src);
  const images = imagePath.filter(
    (image) =>
      json.checkFile(`${src}/${image}`) &&
      json.checkType(`${src}/${image}`, null, searchType)
  );
  images.forEach((element) => {
    const imgPath = `${src}/${element}`;
    json.reSizeImg(imgPath, 70);
  });
})();
