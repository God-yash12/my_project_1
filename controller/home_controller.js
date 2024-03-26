

const userProfileModel = require("../Model/userProfile_model")


const renderHome = async (req, res) => {
    const auth = req.session.auth;
    if(auth){
    const user = await userProfileModel.getUserById(auth.id);
     return res.render("home", {
        title: 'Home page',
        favicon: '/static/images/logo.jpeg',
        user: user[0],
        auth: req.session.auth ? true : false
    });
    }
    return res.render("home", {
        title: 'Home page',
        favicon: '/static/images/logo.jpeg',
        
    });
};

module.exports = { renderHome }