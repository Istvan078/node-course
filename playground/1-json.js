const fs = require("fs")

/* const book = {
    title: "Ego az ellenség",
    author: "Ryan Holiday"
}

const bookJSON = JSON.stringify(book)  //  objektum stringgé alakítása (JSONNÉ)
fs.writeFileSync("1-json.json",bookJSON) */

// const dataBuffer = fs.readFileSync("1-json.json")
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON)
// console.log(data.title)

const dataBuffer = fs.readFileSync("1-json.json")  //  JSON beolvasás fájlból
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON)

user.name = "Istvánnn"  //  object propertyk megváltoztatása
user.age = 32

const userJSON = JSON.stringify(user);  //  Json-né alakítás és elmentése a módosításnak a .json fájlba
fs.writeFileSync("1-json.json", userJSON);