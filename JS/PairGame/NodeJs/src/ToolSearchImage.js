import * as json from "../Utilities/JsonUtility.js"

const src = "./basics";
const searchType =["jpg", "png"];

(function searchAllImg(){
    const imagePath = json.searchFile(src);
    const images = imagePath.filter((image) => 
    json.checkFile(`${src}/${image}`) && json.checkType(`${src}/${image}`,null,searchType));
    console.log(images);
})();
