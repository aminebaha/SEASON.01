const fs = require('fs');
//const e08 = require('./e08');

module.exports = {

changePermissions: (filename, valueofchmod) =>{

    filename = process.argv.slice(2).toString();
    valueofchmod = Number(process.argv.slice(3).toString());
   // if(e08.haveAcess(filename) instanceof Error) {
   try{

   fs.chmodSync(filename,valueofchmod);
   }catch(e) {
       console.log("Error")
   }
  //  }
   // else {
   //     console.log("You already have access to write or read");
    //}
    

}




}