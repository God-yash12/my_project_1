



const express = require("express");
const applyRoutes = express.Router();
const controller = require('../controller/apply_controller')



applyRoutes.post('/', controller.userApplyController );

module.exports = applyRoutes