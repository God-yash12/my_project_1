

const express = require('express')
const router = express.Router();
const aboutPageController = require('../controller/about_controller')

//to get signup From: 
router.get('/', aboutPageController.renderAboutPage)

module.exports = router;
