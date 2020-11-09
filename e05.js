const fs = require('fs')

module.exports = {

createFile: (name, contents)=> {

    name = process.argv.slice(2);
    contents = process.argv.slice(3);
    let strname = name[0];
    let strcontents = contents[0];

    fs.writeFile(strname,strcontents, (err)=> {
        if(err) 
            console.log("ERROR CREATE FILE")

            else 

            console.log("FILE CREATED")

    })

}



}
