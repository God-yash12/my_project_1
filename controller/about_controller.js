

const userProfileModel = require('../Model/userProfile_model')



const renderAboutPage = async (req, res) => {
  const auth = req.session.auth
  if(auth){
    const user = await userProfileModel.getUserById(auth.id)
     return res.render("about", {
      title: "About us",
      favicon: "/static/images/logo.jpeg",
      isAdminPage: false,
      user: user[0],
      auth: req.session.auth ? true : false
      

    });
  }
  return  res.render("about", {
    title: "About us",
    favicon: "/static/images/logo.jpeg",
    isAdminPage: false,
  });
};

module.exports = {
  renderAboutPage,
};
