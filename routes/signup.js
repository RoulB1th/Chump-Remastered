const express = require("express");
const router = express.Router();
const session = require("express-session");
const UserController = require("../controllers/signup-controller");

router.use(express.urlencoded({extended:true}));
router.use(express.json());

router.route('/')
.get((req, res)=>{
    res.render("signup");
})
.post(UserController.newUser)
;

module.exports = router;