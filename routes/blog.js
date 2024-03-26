


const express = require("express")
const blogRoutes = express.Router()


const controller = require("../controller/contact_controller");


blogRoutes.get("/", controller.renderBlogPage)

module.exports = blogRoutes;

