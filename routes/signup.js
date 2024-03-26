
const express = require('express')
const  router = express.Router();
const controller = require('../controller/signup_controller')
const validSignupForm = require('../middleware/signupFormValidation')
// const existanceUser = require("../middleware/userExistance")
const upload = require("../middleware/image_upload")

//to get signup From: 
router.get('/', controller.renderSignupForm)
router.post('/', upload.single('image'), validSignupForm.signUpFormValidation, controller.signUpUser)

module.exports = router;
