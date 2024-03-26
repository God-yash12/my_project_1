
const loginModel = require("../../Model/login_model")


const renderAdminLogin = async (req, res) => {
    res.render("backend/adminLogin", {
     title: "Admin Login",
     favicon: "/static/images/logo.jpeg",
     layout: "backend"
   });
 };



 const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const adminData = await loginModel.getAdminLogin(email, password)
  console.log(adminData)
    if (adminData.length == 0) {
      req.flash("error", "Invalid Email or Password");
      return res.redirect("/backend/superAdmin");
    }else{
      return res.redirect("/backend/adminLogin");
    }
    
  } catch (error) {
    console.log(error);
  }
};



 module.exports = {
    renderAdminLogin,
    adminLogin,
 }
