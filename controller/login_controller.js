const loginModel = require("../Model/login_model");
const bcrypt = require('bcrypt');

const renderLoginPage = (req, res) => {
  const errors = req.flash("error");
  res.render("loginPage", {
    title: "Login Page",
    favicon: "/static/images/logo.jpeg",
    layout: "backend",
    errors: errors,  
    successMessage: req.flash("successSign"),
    role: 'user'
  });
};

const renderLoginCompanyPage = (req, res) => {
  const errors = req.flash("error");
  res.render("loginPage", {
    title: "Login Page",
    favicon: "/static/images/logo.jpeg",
    layout: "backend",
    errors: errors,
    successMessage: req.flash("successMessage"),
    role: 'company'
  });
};

const renderLoginAdminPage = (req, res) => {
  const errors = req.flash("error");
  const successMessage = req.flash("success");
  res.render("loginPage", {
    title: "Login Page",
    favicon: "/static/images/logo.jpeg",
    layout: "backend",
    errors: errors,
    successMessage: successMessage,
    role: 'admin'
  });
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userLoginData = await loginModel.getUserLogin(email, password);
  
    if (!userLoginData.length) {
      req.flash("error", "Invalid Email or Password");
      return res.redirect("/login");
    }

    if (userLoginData.length) {
      req.session.auth = {
        id: userLoginData[0].id,
        role: "user",
        fullname: userLoginData[0].full_name
      };

      req.flash("successMessage", "Welcome Back");
      return res.redirect("/userProfile");
    }
  } catch (error) {
    console.log(error);
  }
};


// const userLogin = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const userLoginData = await loginModel.getUserLogin(email, password);
//     console.log(userLoginData)
//     if (userLoginData.length === 0) {
//       req.flash("error", "Invalid Email or Password");
//       return res.redirect("/login");
//     }
   
//     const hashedPassword = userLoginData[0].password;
//     if (!hashedPassword) {
//       req.flash("error", "Invalid Email or Password");
//       return res.redirect("/login");
//     }

//     const passwordMatch = await bcrypt.compare(password, hashedPassword);
//     if (!passwordMatch) {
//       req.flash("error", "Invalid Email or Password");
//       return res.redirect("/login");
//     }

//     req.session.auth = {
//       id: userLoginData[0].id,
//       role: "user",
//       fullname: userLoginData[0].full_name
//     };

//     req.flash("success", "Welcome Back");
//     return res.redirect("/userProfile");
//   } catch (error) {
//     console.log(error);
//     req.flash("error", "An error occurred. Please try again later.");
//     return res.redirect("/login");
//   }
// };


const companyLogin = async (req, res,next) => {
  try {
    const { email, password } = req.body;
    const companyLoginData = await loginModel.getCompanyLogin(email, password);
    console.log(companyLoginData.length);
    if (companyLoginData.length==0) {
      req.flash("error", "Invalid Email or Password");
    res.redirect("/login");
    }

      req.session.auth = {
        id: companyLoginData[0].id,
        role: "company",
      };

      req.flash("success", "Welcome Back");
       res.redirect("/backend/companyAdmin");
    
  } catch (error) {
    console.log(error);
  }
};



module.exports = {
  renderLoginPage,
  renderLoginAdminPage,
  renderLoginCompanyPage,
  userLogin,
  companyLogin,

};
