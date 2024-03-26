
const express = require('express')
const router = express.Router();
const homeRoutes = require('./home');
const aboutPageRoutes = require('./about')
const loginRoutes = require('./login')
const signUpRoutes = require("./signup");
const jobsRoutes = require ("./jobs")
const userRoutes = require("./userProfile")
const logoutRoutes = require("./logout");
const applyRoutes = require('./apply')
const contactRoutes = require("./contact")
const blogRoutes = require("./blog")
const searchRoutes = require("./search")
const authMiddleware = require("../middleware/authMiddleware");



router.use('/', homeRoutes)
router.use('/about', aboutPageRoutes)
router.use('/signup',signUpRoutes);
router.use('/jobs', jobsRoutes)
router.use("/userProfile", authMiddleware.userRole, userRoutes)
router.use('/login',  loginRoutes)
router.use('/logout', authMiddleware.userRole, logoutRoutes)
router.use('/apply', applyRoutes)
router.use("/contact", contactRoutes)
router.use("/blog", blogRoutes)
// router.use("/search", searchRoutes)





module.exports = router;