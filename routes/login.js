const express = require("express");
const router = express.Router();
let loggedOutMiddleware = require("../middlewares/logging").loggedOut;
const validator = require("../validator/validator").login;
const signInController = require("../controllers/signin-controller").logIn;

router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.route('/')
.get(loggedOutMiddleware,(req, res)=>{
    res.render("login");
})
.post(signInController)

module.exports = router;