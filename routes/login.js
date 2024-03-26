
const express = require('express')
const router =  express.Router();

const loginPageController = require('../controller/login_controller')


router.get('/', loginPageController.renderLoginPage)
router.post('/', loginPageController.userLogin)



module.exports = router;