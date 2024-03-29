const connection = require("../../connection/dbconnection");



class companyAdmin{

static  addJobs(data, filename, id) {
  const { jobName, salary, description, jobType } = data;

  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO jobs(image, job_name, salary, description, job_type,company_id) VALUES (?, ?, ?, ?, ?,?)",
      [filename, jobName, salary, description, jobType, id],
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
}

static getCompanyById(id) {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT company_name, email, phone, pan_number, description, location FROM company_table WHERE id = ?",
      [id],
      (error, elements) => {
        if (error) {
          return reject(error);
        }
        return resolve(elements);
      }
    );
  });
}


// Delete a particular job added by a company
static deleteJobByCompany(id, company_id) {
  return new Promise((resolve, reject) => {
    connection.query(
      "DELETE FROM jobs WHERE jobs.id = ? AND jobs.company_id = ?",
      [id, company_id],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      }
    );
  });
}
}



module.exports = {
  // addJobs,
  // getCompanyById,
  // deleteJobByCompany,
  companyAdmin
};
