const jobsModel = require("../Model/job_model");
const groupBy = require("../helper/groupby");
const companyModel = require("../Model/backend/companyAdmin_model");
const userProfileModel = require('../Model/userProfile_model');
const { user } = require("../connection/dbConfig");
const searchModel = require("../Model/search_model")
const paginationModel =require("../Model/pagination_model")


// const renderJobs = async (req, res) => {
//   try {
//     const auth = req.session.auth
//     if(auth){
//       const user = await userProfileModel.getUserById(auth.id);
//       const jobs = await jobsModel.getJobs();
//       const groupJobs = groupBy(jobs);
//       return res.render("jobs", {
//         title: "job lists",
//         favicon: '/static/images/logo.jpeg',
//         jobs: groupJobs,
//          message: req.flash("success"),
//          user: user[0],
//          auth: req.session.auth ? true : false
//       });
//     }
//     const jobs = await jobsModel.getJobs();
//     const groupJobs = groupBy(jobs);
//     return res.render("jobs", {
//       title: "job lists",
//       favicon: '/static/images/logo.jpeg',
//       jobs: groupJobs,
//        message: req.flash("success"),
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send("Internal Server Error");
//   }
// };


// const renderJobs = async (req, res) => {
//   try {
//       const page = parseInt(req.query.page) || 1;
//       const pageSize = 10; // Adjust page size as needed

//       const auth = req.session.auth;
//       const user = auth ? await userProfileModel.getUserById(auth.id) : null;

//       const totalJobs = await jobsModel.getTotalJobsCount();
//       const totalPages = Math.ceil(totalJobs / pageSize);

//       const jobs = await jobsModel.getJobs(page, pageSize);
//       const groupJobs = groupBy(jobs);

//       return res.render("jobs", {
//           title: "job lists",
//           favicon: '/static/images/logo.jpeg',
//           jobs: groupJobs,
//           message: req.flash("success"),
//           user: user ? user[0] : null,
//           auth: !!auth,
//           currentPage: page,
//           totalPages: totalPages
//       });
//   } catch (error) {
//       console.log(error);
//       return res.status(500).send("Internal Server Error");
//   }
// };




// const renderJobs = async (req, res) => {
//   try {
//     const auth = req.session.auth;
//     const user = auth ? await userProfileModel.getUserById(auth.id) : null;
//     const value =  parseInt(req.query.offset) || 0
 
//     const offsets = value * 10 ;
//     const limit =10;
//     const  jobs = await paginationModel.getWithPagination( limit,offsets, 'jobs');
//     const totalPageCount = await paginationModel.getTotalCount('jobs');
    
//     const groupJobs = groupBy(jobs);
//     return res.render("jobs", {
//       title: "Job Lists",
//       favicon: '/static/images/logo.jpeg',
//       jobs: groupJobs,
//       message: req.flash("success"),
//       user: user ? user[0] : null,
//       auth: !!auth,
//       currentPages: offsets/10,
//       totalPageCount: totalPageCount,

//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send("Internal Server Error");
//   }
// };


const renderJobs = async (req, res) => {
  try {
    const auth = req.session.auth;
    const user = auth ? await userProfileModel.getUserById(auth.id) : null;
    const value = parseInt(req.query.offset) || 0;
    const searchTerm = req.query.search || ''; 

    // Pagination logic
    const offset = value * 10;
    const limit = 10;

    let jobs;
    let totalPageCount;

    if (searchTerm) {
      jobs = await searchModel.searchItem(searchTerm);
      totalPageCount = 1; 
    } else {
      // If no search term, retrieve jobs with pagination
      req.flash("searchMessage", "Searched Job is Unavailable")
      jobs = await paginationModel.getWithPagination(limit, offset, 'jobs');
      totalPageCount = await paginationModel.getTotalCount('jobs');
    }

    const groupJobs = groupBy(jobs);
    return res.render("jobs", {
      title: "Job Lists",
      favicon: '/static/images/logo.jpeg',
      jobs: groupJobs,
      message: req.flash("success"),
      user: user ? user[0] : null,
      auth: !!auth,
      currentPages: offset / 10,
      totalPageCount: totalPageCount,
      searchTerm: searchTerm, 
      searchMessage: req.flash("searchMessage")
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
};






module.exports = {
  renderJobs,
};
