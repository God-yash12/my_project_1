
const connection = require("../connection/dbconnection")




// Function to get jobs with pagination

function getWithPagination(limit, offset,table_name) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM ${table_name} LIMIT ? OFFSET ?`;
        connection.query(sql, [limit, offset], (error, rows) => {
            if (error) {
                reject(error);
            } else {
                resolve(rows);
            }
        });
    });
}

function getTotalCount(table_name) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT COUNT(*) AS total FROM ${table_name}`;
        connection.query(sql, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0].total);
            }
        });
    });
}

  
  module.exports = {
    getWithPagination,
    getTotalCount
  };