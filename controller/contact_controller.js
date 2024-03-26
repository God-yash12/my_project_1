


const userProfileModel = require("../Model/userProfile_model")

const renderContactPage = async (req, res) => {
    const auth = req.session.auth;
    if(auth){
    const user = await userProfileModel.getUserById(auth.id);
     return res.render("contact", {
        title: 'Contact page',
        favicon: '/static/images/logo.jpeg',
        user: user[0],
        auth: req.session.auth ? true : false
    });
    }
    return res.render("contact", {
        title: 'Contact Page',
        favicon: '/static/images/logo.jpeg',
        
    });
};




const renderBlogPage = async (req, res) => {
    const auth = req.session.auth;
    if(auth){
    const user = await userProfileModel.getUserById(auth.id);
     return res.render("blog", {
        title: 'Blog page',
        favicon: '/static/images/logo.jpeg',
        user: user[0],
        auth: req.session.auth ? true : false
    });
    }
    return res.render("blog", {
        title: 'Blog Page',
        favicon: '/static/images/logo.jpeg',
        
    });
};



module.exports = { 
    renderContactPage,
    renderBlogPage,
}