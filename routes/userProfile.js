

const express = require('express')
const userRouter = express.Router()
const upload = require("../middleware/image_upload")

const controller = require("../controller/userProfile_controller")
// const appliedJobsController = require("../controller/appliedJobs_controller")
const { user } = require('../connection/dbConfig')

userRouter.get('/', controller.userProfileController)
userRouter.get('/updateForm', controller.getUserUpdateById)
userRouter.post('/updateForm/:id',  controller.updateUserById)
userRouter.get("/appliedJobs", controller.userJobAppliedData)
userRouter.post("/uploadResume", upload.single("resume"), controller.uploadResume)


module.exports = userRouter