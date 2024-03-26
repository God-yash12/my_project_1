


const express = require('express')
const adminLoginRoutes = express.Router()
const controller = require('../../controller/backend/admin_login')


adminLoginRoutes.get("/", controller.renderAdminLogin)
adminLoginRoutes.post('/', controller.adminLogin)

module.exports = adminLoginRoutes