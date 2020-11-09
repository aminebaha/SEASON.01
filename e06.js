const fs = require('fs');

module.exports = {

removeFile: (filename) => {

    filename = process.argv.slice(2);
    let strfilename = filename[0];
    fs.unlink(strfilename, (err)=>{
        if(err)
        throw new Error("Error")
    })

}



}