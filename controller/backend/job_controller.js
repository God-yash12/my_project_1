const jobMOdel = require("../../Model/job_model");
const groupBy = require('../../helper/groupby')



const jobOnCompanyDashboard = async (req, res) => {
  try {
    const id = req.session.auth.id;
    const companyJobList = await jobMOdel.getJobListByCompanyID(id);
    const groupJobList = groupBy(companyJobList)
    res.render("backend/job", {
      title: "Company Jobs",
      favicon: "/static/images/logo.jpeg",
      layout: "backend",
      jobList: companyJobList,
      // jobGroup: groupJobList
    });
  } catch (error) {
    console.log(error);
  }
};





module.exports = {
  jobOnCompanyDashboard,
};
