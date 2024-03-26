


const express = require('express')
const companyLoginRoutes = express.Router()
const controller = require('../../controller/login_controller')


companyLoginRoutes.get('/', controller.renderLoginCompanyPage);
companyLoginRoutes.post('/',controller.companyLogin);


module.exports = companyLoginRoutes