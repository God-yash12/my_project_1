
const connection = require("../connection/dbconnection")



//function to insert user data into the database

function insertUser(userData, filename){
    const { fullname, email, phone, city, password, gender } = userData;
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO user_table (full_name, email, phone, city, password, gender, image) VALUES (?, ?, ?, ?, ?, ?, ?)";
        connection.query(sql, [fullname, email, phone, city, password, gender, filename], (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
};




function getUserData(id){
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM user_table', [id], (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
}




function deleteUser(id){
    return new Promise((resolve, reject) => {
        connection.query("DELETE FROM user_table WHERE id = ?", [id], (error, result)=>{
            if(error){
                return reject(error)
            }
            return resolve(result)
            
        })
    })
}


function existsUser(email){
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM user_table WHERE email = ?", [email], (error, results)=>{
            if(error){
                return reject(error);
            }
            return resolve(results);
        });
    });
}

module.exports = {
    insertUser, 
    getUserData,
    deleteUser,
    existsUser,
}