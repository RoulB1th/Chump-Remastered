module.exports = {
    logged : (req, res, next)=>{
        if(req.session.isAuth)
        {
            next();
        }else{
            res.redirect("/signin");
        }
    },
    loggedOut : (req, res, next)=>{
        if(!req.session.isAuth)
        {
            next();
        }else{
            res.redirect("/");
        }
    }
}