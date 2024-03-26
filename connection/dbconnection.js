

const mysql = require('mysql')
const dbconfig = require("./dbConfig")

const connection = mysql.createConnection(dbconfig)

connection.connect((error)=>{
    if(error){
        console.log(error)
    }
    console.log("database Connected")
})
 
module.exports = connection;