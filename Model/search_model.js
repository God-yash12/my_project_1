const connection = require('../connection/dbconnection');

function searchItem(searchTerm) {
    return new Promise((resolve, reject) => {
        const sql = `SELECT * FROM jobs WHERE job_name LIKE '%${searchTerm}%'`;
        connection.query(sql, (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}

module.exports = {
    searchItem
};
