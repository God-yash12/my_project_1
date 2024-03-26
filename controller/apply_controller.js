


const applyModel = require('../Model/apply_model');
const { user } = require('../connection/dbConfig');


const userApplyController = async (req, res)=>{

    try {
        const auth = req.session.auth;
        if(auth){
            const {job_id, company_id} = req.body;
            const user_id = req.session.auth.id;     
            const applydata = await applyModel.userApplyData(job_id, user_id, company_id)
            if(applydata){
                req.flash('success', "job applied successfully check your status on Dashboard")
                res.redirect('/jobs')
            }
        }else{
            return res.redirect('/signup')
        }
       
    } catch (error) {
        console.log(error)
    }
}




module.exports= {
    userApplyController
}