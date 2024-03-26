

const express = require('express') 
const logoutRoutes = express.Router()
const logoutController = require("../controller/logout_controller")
// const isAuthenticated = require("../middleware/userExistance")

logoutRoutes.get("/", logoutController.logout)


module.exports = logoutRoutes;