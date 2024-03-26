

const connection = require("../connection/dbconnection")


function userApplyData(job_id, user_id, company_id){
    return new Promise((resolve, reject) => {
        const sql = "INSERT INTO apply_job (job_id, user_id, company_id, status) VALUES (?, ?, ?, ?)";
        connection.query(sql, [job_id, user_id, company_id, "Pending"],(error, results)=>{
            if(error){
                return reject(error)
            }
            return resolve(results)
        })
    })
}




function getAppliedJobsByCompany(company_id, job_id, user_id) {
    return new Promise((resolve, reject) => {
        const sql = `
            SELECT
                apply_job.*,
                jobs.job_name,
                user_table.full_name, email, phone, resume
            FROM
                apply_job
            INNER JOIN
                jobs ON apply_job.job_id = jobs.id
            INNER JOIN
                user_table ON apply_job.user_id = user_table.id
            WHERE
                apply_job.company_id = ?
        `;
        connection.query(sql, [company_id, job_id, user_id], (error, results) => {
            if (error) {
                return reject(error);
            }
            return resolve(results);
        });
    });
}


function getAppliedJobsByUser(user_id) {
  return new Promise((resolve, reject) => {
    const sql = `
      SELECT
        apply_job.*,
        jobs.image,
        jobs.job_name,
        jobs.salary,
        jobs.job_type,
        jobs.description,
        user_table.full_name,
        user_table.email,
        user_table.phone
      FROM
        apply_job
      INNER JOIN
        jobs ON apply_job.job_id = jobs.id
      INNER JOIN
        user_table ON apply_job.user_id = user_table.id
      WHERE
        apply_job.user_id = ?
    `;
    connection.query(sql, [user_id], (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}




function changeStatus(id, newStatus) {
  return new Promise((resolve, reject) => {
      const sql = "UPDATE apply_job SET status = ? WHERE id = ?";
      connection.query(sql, [newStatus, id], (error, results) => {
          if (error) {
              return reject(error);
          }
          return resolve(results);
      });
  });
}




module.exports = {
    userApplyData,
   getAppliedJobsByCompany,
   getAppliedJobsByUser,
   changeStatus
}






