


const express = require("express")
const contactRoutes = express.Router()

const controller = require("../controller/contact_controller")



contactRoutes.get("/", controller.renderContactPage)


module.exports = contactRoutes;