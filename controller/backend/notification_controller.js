
// const applyModel = require("../../Model/apply_model")

// const renderJobApplication = async (req, res) => {
//     res.render("backend/jobApplication", {
//      title: "Admin Login",
//      favicon: "/static/images/logo.jpeg",
//      layout: "backend"
//    });
//  };


// const userApplyInfo = async (req, res)=>{

//     try {
//         const auth = req.session.auth;
//         if(auth){
//             const { job_id } = req.body;
//             const userId = req.session.auth.id;     
//             const applydata = await applyModel.userApplyData(job_id, userId,)
//             if(applydata){
//               res.redirect('/notification')
//             }
//         }else{
//             return res.redirect('/companyAdmin')
//         }
       
//     } catch (error) {
//         console.log(error)
//     }
//   }
  

//   module.exports = {
// renderJobApplication
//   }
  