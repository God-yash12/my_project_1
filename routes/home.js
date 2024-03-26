
const express = require('express')
const homeRouter = express.Router();
const homeController = require('../controller/home_controller')

homeRouter.get('/', homeController.renderHome);

module.exports = homeRouter;