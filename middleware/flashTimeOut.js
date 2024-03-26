

const messageTimeOut = (req, res, next)=>{
    setTimeout(()=>{
        req.flash("error", null);
        req.flash("success", null);
        next()
    },2000)
}


module.exports = {
    messageTimeOut,
}