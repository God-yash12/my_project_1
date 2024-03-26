

const express = require('express')
const backendRoutes = express.Router()
const superAdminRoutes = require("./superAdmin")
const companyAdminRoutes = require('./companyAdmin');
const authMiddleWare = require('../../middleware/authMiddleware')
const companyRoutes = require('./companyLogin') 
const adminLoginRoutes = require('./adminLogin')



backendRoutes.use('/superAdmin', superAdminRoutes);
backendRoutes.use("/company", companyRoutes)
backendRoutes.use('/adminLogin', adminLoginRoutes)
backendRoutes.use('/companyAdmin', authMiddleWare.companyRole, companyAdminRoutes)

 




module.exports = backendRoutes;