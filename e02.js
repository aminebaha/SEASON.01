const path = require('path');

module.exports = function (f) { 

    f = process.argv.slice(1);
    let str = f[0];
    console.log(path.extname(str));
    
    }