import * as json from "../Utilities/JsonUtility.js"

const dir = "./test/test.json"
const read = json.readFile(dir);
console.log(read);
