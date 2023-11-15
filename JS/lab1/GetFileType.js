function getType(file){
    let [,type] = file.split(".");
    return type;
}

const test = getType("image.img");
console.log(test);