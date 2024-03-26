



const connection = require("../connection/dbconnection");



function  getUserById(id){
  return new Promise((resolve, reject) => {
      connection.query('SELECT full_name, email, phone, city, gender, image, resume FROM user_table WHERE id = ?', [id], (error, elements)=>{
          if(error){
              return reject(error);
          }
          return resolve(elements);
      });
  });
}


function getUserByIdForUpdate(id) {
  return new Promise((resolve, reject) => {
      connection.query('SELECT full_name, email, phone, city FROM user_table WHERE id = ?', [id], (error, elements) => {
          if (error) {
              return reject(error);
          }
          return resolve(elements);
      });
  });
}


function updateUserProfile(data, id) {
  const { full_name, email, phone, city } = data;
  return new Promise((resolve, reject) => {
    const sql = "UPDATE user_table SET full_name = ?, email = ?, phone = ?, city = ? WHERE id = ?";
    connection.query(sql, [full_name, email, phone, city, id], (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
  });
}


function insertResume(filename, id) {
  return new Promise((resolve, reject) => {
      const sql = "UPDATE user_table SET resume = ? WHERE id = ?";
      connection.query(sql, [filename, id], (error, results) => {
          if (error) {
              reject(error);
          } else {
              resolve(results);
          }
      });
  });
}


module.exports = {
  updateUserProfile,
  getUserById,
  getUserByIdForUpdate,
  insertResume,
}