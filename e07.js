const fs = require('fs');

module.exports = {

natureOfName: (name) => {
        name = process.argv.slice(2).toString();
        
        try {
        let stat = fs.lstatSync(name);
        if(stat.isDirectory()) 
            console.log("The argument ["+name+"] is a directory");

        else 
            console.log("The argument ["+name+"] is a file");

        }catch(e) {
            console.log("The argument ["+name+"] is another unix things");

        }


}

}