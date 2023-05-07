const express = require("express");
const router = express.Router();

router.route('/')
.get(async(req, res)=>{
  res.render("index",{
    logged: req.session.isAuth ?? false
  });
});


module.exports = router;