const fs = require('fs');
const path = require("path")

module.exports = {

duplicateFolder:    (path,newpath) =>{

path = "./" +process.argv[2].toString();
newpath = "./" + process.argv.slice(3).toString();
console.log(path)
console.log(newpath)

fs.readdir(path,

    fs.writeFile(newpath,fs.readFile(path)))




}
}
