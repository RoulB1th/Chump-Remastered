const express = require("express");
const logOutMiddleware = require("../middlewares/logging").logged;
const router = express.Router();

router.route('/')
.get(logOutMiddleware,(req, res)=>{
    req.session.isAuth = false;
    req.session.destroy();
    res.redirect('/signup');
});

module.exports = router;