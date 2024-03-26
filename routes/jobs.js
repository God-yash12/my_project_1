


const express = require('express')
const jobsRoutes = express.Router();
const jobsController = require('../controller/jobs_controller')
// const applyController = require("../controller/apply_controller")


jobsRoutes.get('/', jobsController.renderJobs)
// jobsRoutes.get("/search", jobsController.searchJobs)
// jobsRoutes.get("/apply", applyController.renderApplyPage)



module.exports = jobsRoutes;