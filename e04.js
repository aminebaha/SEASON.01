const fa = require('fs')

module.exports = {

    getContentsAsync: (file) =>{

        file = process.argv.slice(2);
        let filestr = file[0];
        
         fa.readFile(filestr, (err,data) => {

            if(err) {
                console.log('Fail readFile');
            }
            console.log(data.toString("utf-8"))
        });

    }




}