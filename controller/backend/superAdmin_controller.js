const signupModel = require("../../Model/signup_model");
const superAdminModel = require("../../Model/backend/superAdmin_model");
const { validationResult } = require("express-validator");

const superAdminController = async (req, res) => {
  const errors = req.flash("error");
  res.render("backend/superAdmin", {
    title: "admin page",
    favicon: "/static/images/logo.jpeg",
    layout: "backend",
    errors: errors,
    addedCompany: req.flash("addedCompany")
  });
};

//user render into table
const getUserList = async (req, res) => {
  try {
    const data = await signupModel.getUserData();
    return res.render("backend/userdata", {
      title: "User Data",
      favicon: "/static/images/logo.jpeg",
      layout: "backend",
      user: data,
    });
  } catch (error) {
    console.log(error);
  }
};


const addCompany = async (req, res) => {
 
  res.render("backend/addCompany", {
    title: "Company Registration",
    favicon: "/static/images/logo.jpeg",
    layout: "backend",
    
  });
};

// deleting user form database and system.
const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await signupModel.deleteUser(id);
    return res.redirect("/backend/superAdmin/user");
  } catch (error) {
    console.log(error);
  }
};

//inserting company into database

const addCompanyController = async (req, res) => {
  try {
    const error = validationResult(req);
    if (error.isEmpty()) {
      const data = await superAdminModel.addCompany(req.body);
      if (data) {
        req.session.auth = {
          id: data.id,
          role: "company",
        };
        // req.session.company = req.body;
        req.flash("addedCompany", "Successfully added company");
        return res.redirect("/backend/superAdmin");
      } else {
        res.redirect("/backend/superAdmin");
      }
    }
    const errorData = error.mapped();
    req.flash("error", errorData);
    res.redirect("/backend/superAdmin/addCompany");
  } catch (error) {
    console.error(error);
    return res.render("errorPage", { error });
  }
};

//displaying company data
const getCompanyList = async (req, res) => {
  try {
    const data = await superAdminModel.getCompanyData();
    return res.render("backend/companydata", {
      title: "company Data",
      favicon: "/static/images/logo.jpeg",
      layout: "backend",
      companyList: data
    });
  } catch (error) {
    console.error("Error fetching company list:", error);
    return res.status(500).send("Internal Server Error");
  }
};





module.exports = {
  superAdminController,
  getUserList,
  deleteUserById,
  addCompanyController,
  getCompanyList,
  addCompany,
  // getCompanyForm
};
