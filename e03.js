const fs = require('fs');

module.exports = {

 getContents: (f, err) => {

    f = process.argv.slice(2);
    let filestr = f[0];
    let contents = fs.readFileSync(filestr, 'utf-8');
   
        console.log(contents);
    }
}