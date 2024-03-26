
const connection = require("../connection/dbconnection")

function getUserLogin(email, password) {
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM user_table WHERE email = ? AND password = ?";
        connection.query(sql, [email, password], (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}



function getCompanyLogin(email, password){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM company_table WHERE email = ? AND password = ?";
        connection.query(sql, [email, password], (error, results)=>{
            if(error){
                return reject(error)
            }
            return resolve(results)
        })
    })
}





function getAdminLogin(email, password){
    return new Promise((resolve, reject) => {
        const sql = "SELECT * FROM  admin_table WHERE email = ? AND password = ?";
        connection.query(sql, [email, password], (error, results)=>{
            if(error){
                return reject(error)
            }
            return resolve(results)
        })
    })
}



module.exports = {
    getUserLogin,
    getCompanyLogin,
    getAdminLogin,
}