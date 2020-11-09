const fs = require('fs');


module.exports = {

haveAcess:  (filename) =>{
    filename = process.argv.slice(2).toString();

    try {
        fs.accessSync(filename,fs.constants.R_OK | fs.constants.R_OK);
            console.log("I can read or write the file "+filename);


    }catch(e) {
        throw new Error ("I don't have access to the file "+filename);
    }

}

}