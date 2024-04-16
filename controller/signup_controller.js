const signupModel = require("../Model/signup_model");
const { validationResult } = require('express-validator');
const { user } = require("../connection/dbConfig");
const removeFile = require("../middleware/removeFile");
const bcrypt = require('bcrypt');
const mailService = require("../nodemailer/sendMail")


const renderSignupForm = (req, res) => {
  const error = req.flash("error")
  res.render("signupForm", {
    title: "Sign Up Form",
    layout: "backend",
    error: error,
    isSignupPage: true,
    favicon: '/static/images/logo.jpeg',
    isAuthenticated: req.session.auth ? true : false,
   
  });
};



const signUpUser = async (req, res)=>{
  try {

    //check user exists or not
    const existUser = await signupModel.existsUser(req.body.email)
    if(existUser.length > 0){
      req.flash("error", {email: {msg: "User Already exists"}})
      return res.redirect('/signup');
    }else{
      const error = validationResult(req);
      if(req.isFileValid && error.isEmpty()){
        // const saltRound = 10;
        // const hashPassword = await bcrypt.hash(req.body.password, saltRound)
        const fileName = req.file.filename;
        const body = req.body;
        const email = req.body.email;
        // const body = {...req.body, password: hashPassword};
        const data = await signupModel.insertUser(body, fileName);
        if(data){
          await mailService.sendMailToUser(email)
          req.session.auth = {
            id: data.id,
            role: "user"
          }
          req.flash("successSign", "You haved Signed Up Successfully Please login to get into dashboard");
          return res.redirect("/login")
        }else{
          removeFile(req.file.filename)
          return res.redirect("/signup")
        }
      }

      const errorData = error.mapped();
      if(!req.isFileValid) {
        errorData['image'] = {
          msg: "please insert valid image"
        }
      }
      req.flash("error", errorData)
      res.redirect("/signup")
  
    }
   
  } catch (error) {
    console.log(error)
    return res.status(500).send("error in signup")
  }
}





module.exports = {
  renderSignupForm,
   signUpUser,
};
