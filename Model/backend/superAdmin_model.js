

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
    getCompanyData
}
