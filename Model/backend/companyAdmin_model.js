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
static deleteJobByCompany(jobId, companyId) {
  return new Promise((resolve, reject) => {
    connection.query(
      "DELETE FROM jobs WHERE id = ? AND company_id = ?",
      [jobId, companyId],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      }
    );
  });
}



static getImageToDelete(id){
  return new Promise((resolve, reject) => {
    connection.query("SELECT image FROM jobs WHERE id = ?", [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
  });

}


// job update 

static getJobDataById = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM jobs WHERE id = ?", [id], (error, results) => {
      if (error) {
        return reject(error);
      }
      return resolve(results);
    });
  });
}



static updateJobWithImage = (data, filename, id) => {
  const { jobName, salary, description } = data;
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE jobs SET image = ?, job_name = ?, salary = ?, description = ? WHERE id = ?",
      [filename, jobName, salary, description, id],
      (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      }
    );
  });
}


static updateJobWithoutImage = (date, id) =>{
  const { jobName, salary, description} = data;
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE jobs SET job_name = ?, salary = ?, description = ? WHERE id = ?",
      [jobName, salary, description, id],
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
