

const express = require('express')
const companyAdminRoutes = express.Router()
const controller = require('../../controller/backend/companyAdmin_controller') 
const upload = require('../../middleware/image_upload')
const logoutController = require("../../controller/logout_controller")
const jobController = require("../../controller/backend/job_controller")
const applicationController = require("../../controller/backend/notification_controller")

companyAdminRoutes.get('/',  controller.companyAdminController)
companyAdminRoutes.post('/', upload.single('image'), controller.addJobsByCompany)
companyAdminRoutes.get("/logout", logoutController.logout)
companyAdminRoutes.get('/job', jobController.jobOnCompanyDashboard)
companyAdminRoutes.get('/application', controller.renderJobApplication)
companyAdminRoutes.get('/delete/:id', controller.deleteJobByCompany)
companyAdminRoutes.post("/changeStatus/:id", controller.changeStatus)



module.exports = companyAdminRoutes