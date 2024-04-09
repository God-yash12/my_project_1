
const express = require('express')
const adminRoutes = express.Router();
const controller = require('../../controller/backend/superAdmin_controller')
const validAddingCompany = require("../../middleware/companyValidation")


adminRoutes.get('/', controller.superAdminController)
adminRoutes.get('/user', controller.getUserList)
adminRoutes.get('/companies', controller.getCompanyList)
adminRoutes.get('/delete/:id', controller.deleteUserById)
// adminRoutes.get("/addCompany", controller.getCompanyForm)
adminRoutes.get('/addCompany', controller.addCompany)
adminRoutes.post('/', controller.addCompanyController)
adminRoutes.get("/jobsInfo", controller.getJobsInfo)



module.exports = adminRoutes;