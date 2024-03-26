
const connection = require("../connection/dbconnection")

function  getJobs() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM jobs", (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  }



  function getJobsByCompanyName(companyId){
    return new Promise((resolve, reject) => {
      const sql = `SELECT jobs.id, jobs.image, jobs.job_name, jobs.salary, jobs.description, jobs.job_type, company_table.company_name FROM jobs  INNER JOIN company_table ON jobs.company_id = company_table.id;`;
      connection.query(sql, [companyId], (error, results)=>{
        if(error){
          return reject(error)
        }
        return resolve(results)
      })
    })
  }


// function getJobListByCompanyID(companyID){
//   return new Promise((resolve, reject) => {
//     connection.query("SELECT * FROM jobs WHERE company_id = ?", [companyID], (error, results) => {
//       if (error) {
//         return reject(error);
//       }
//       return resolve(results);
//     });
//   });
// }


function getJobListByCompanyID(companyID) {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT * FROM jobs WHERE company_id = ?",
      [companyID],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      }
    );
  });
}


  module.exports = {
    getJobs,
    getJobsByCompanyName,
    getJobListByCompanyID,
    // getTotalJobsCount,
  }