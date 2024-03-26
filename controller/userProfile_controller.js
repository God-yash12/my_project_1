const userProfileModel = require("../Model/userProfile_model");
const signUpModel = require("../Model/signup_model");
const { user } = require("../connection/dbConfig");
const applyModel = require("../Model/apply_model");
const removeFile = require("../middleware/removeFile");

const userProfileController = async (req, res) => {
  try {
    const auth = req.session.auth; 
    if(auth){
      const {job_id } = req.body;
      const user = await userProfileModel.getUserById(auth.id);
     return res.render("userProfile", {
        title: "User Dashboard",
        favicon: "/static/images/logo.jpeg",
        messages: req.flash("successMessage"),
        user: user[0],
        auth: req.session.auth ? true : false,
      });
    }
   return res.redirect('/login');
   
  } catch (error) {
    console.log(error)
  }
 
};


// user profile update get form and data
// const getUserUpdateById = async (req, res) => {
//   try {
//     const auth = req.session.auth;
//     if (auth) {
//       const { id } = req.params; 
//       const userData = await userProfileModel.getUserByIdForUpdate(id);
//       console.log(userData)
//       if (userData && userData.length > 0) { 
//         return res.render('backend/userUpdate', {
//           title: "User Details Update",
//           favicon:"/static/images/logo.jpeg",
//           data: userData[0],
//           failMessage: req.flash("failUpdate"),
//           layout: "backend"
//         });
//       } else {
//         return res.status(404).send("User not found");
//       }
//     } else {
//       req.flash("successUpdate", "your profile is updated please refresh this page")
//       return res.redirect("/userProfile");
//     }
//   } catch (error) {
//     console.log(error);
//     return res.status(500).send("Internal Server Error");
//   }
// };

const getUserUpdateById = async (req, res) => {
  try {
    const auth = req.session.auth;
    if (!auth) {
      return res.redirect("/userProfile");
    }
    
    // Retrieve user ID from the session
    const userId = await userProfileModel.getUserByIdForUpdate(auth.id);
    if (!userId) {
      return res.status(400).send("User ID not found in session");
    }
  
    // Render the update form with user data
    return res.render('userUpdate', {
      title: "User Details Update",
      favicon:"/static/images/logo.jpeg",
      data: userId[0],
      layout: "backend"
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
}



//user profile update post

const updateUserById = async (req, res) => {
  try {
    const auth = req.session.auth; 
    const data = await userProfileModel.updateUserProfile(auth.id);
    console.log(data)
    if (data) {
      req.flash("updated", "Profile Updated Successfully")
      return res.redirect('/userProfile');
    } else {
      req.flash("failUpdate", "Failed to update your profile");
      return res.redirect("/userProfile/updateForm");
    }
  } catch (error) {
    console.error("Error updating user profile:", error);
    req.flash("failUpdate", "An error occurred while updating your profile");
    return res.redirect("/userProfile/updateForm");
  }
}


const userJobAppliedData = async (req, res)=>{
  try {
    const auth = req.session.auth
    if(auth && auth.role === "user"){
      const user_id = req.session.auth.id;
      const jobAppliedData = await applyModel.getAppliedJobsByUser(user_id)
      if(jobAppliedData){
        return res.render("appliedJobs", {
          title: "applied jobs Dashboard",
          favicon: "/static/images/logo.jpeg",
          layout: "backend",
          appliedData: jobAppliedData
        })
      }else{
        return res.redirect("/userProfile")
      }
    }
  } catch (error) {
    console.log(error)
  }
}



const uploadResume = async (req, res) => {
  try {
      const auth = req.session.auth;
      if (auth) {
        if (!req.file || !req.isFileValid) {
          return res.status(400).send("Image is not valid or missing");
        }
          const fileName = req.file.filename;
          const userId = auth.id;
          const uploadResume = await userProfileModel.insertResume(fileName, userId);
          if(uploadResume){
            req.flash("uploadResume", "Resume Uploaded Successfully")
            res.redirect('/userProfile');
          }
      } else {
        removeFile(req.file.filename)
          res.redirect('/userProfile');
      }
  } catch (error) {
      console.log(error);
      if(req.file){
        removeFile(req.file.filename)
      }
      res.status(500).send('Internal Server Error');
  }
}




module.exports = {
  userProfileController,
  getUserUpdateById,
  updateUserById,
  userJobAppliedData,
  uploadResume,
};
