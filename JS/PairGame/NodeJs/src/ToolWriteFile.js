import * as json from "../Utilities/JsonUtility.js"

const data = {
    "wife":"No",
    "School":"No"
}

data.abc = "x";
json.writeFile("./text.json", data);