const fs = require('fs');


module.exports = {


listAll: () => {
    fs.readdir("./", (err, files) => {
    if (err) {
        throw err;
    }

    files.forEach(file => {
        console.log(file);
    });
});

}
}