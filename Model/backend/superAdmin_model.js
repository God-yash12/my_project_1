

const connection = require('../../connection/dbconnection')



function getAdminById(id){
    return new Promise((resolve, reject) => {
        connection.query('SELECT email FROM admin_table WHERE id = ?', [id], (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
  }
  
  

const addCompany = (companyData)=>{
    const { company_name, email, phone, pan_number, description, location, password } = companyData;
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO company_table (company_name, email, phone, pan_number, description, location, password) VALUES(?, ?, ?, ?, ?, ?, ?)";
        connection.query(sql, [company_name, email, phone, pan_number, description, location, password,], (error, result)=>{
            if(error){
               return reject(error)
            }else{
               return resolve(result)
            }
        })
    })
}


function  getAdminData() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM admin_table", (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  }

  function getTotalUsers() {
    return new Promise((resolve, reject) => {
      const sql = `SELECT COUNT(*) AS totalUsers FROM user_table`;
      connection.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results[0].totalUsers);
      });
    });
  }
  
  // Function to get total number of companies
  function getTotalCompanies() {
    return new Promise((resolve, reject) => {
      const sql = `SELECT COUNT(*) AS totalCompanies FROM company_table`;
      connection.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results[0].totalCompanies);
      });
    });
  }
  
  // Function to get total number of posted jobs
  function getTotalPostedJobs() {
    return new Promise((resolve, reject) => {
      const sql = `SELECT COUNT(*) AS totalJobs FROM jobs`;
      connection.query(sql, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results[0].totalJobs);
      });
    });
  }
  

  function getCompanyData(){
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM company_table', (error, elements)=>{
            if(error){
                return reject(error);
            }
            return resolve(elements);
        });
    });
}





module.exports = {
    addCompany,
    getAdminById,
    getAdminData,
    getCompanyData,
    getTotalUsers,
    getTotalCompanies,
    getTotalPostedJobs
}
