

const fs = require("fs")
const path = require('path')

 function removeFile(fileName){
    const paths = path.join(__dirname,  "../public/images/" + fileName)
    console.log(paths)
    fs.unlink(paths, function (err){
        if(err){
            
            console.log("file cannot deleted", err)
        }else{
            console.log("file deleted successfully")
        }
    })
}

module.exports = removeFile