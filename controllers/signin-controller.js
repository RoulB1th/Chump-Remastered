const validator = require("../validator/validator").login;
const bcrypt = require("bcrypt");
const Users = require("../models/User");

module.exports = {
    logIn : async (req, res)=>{
        const {username, password} = req.body;
        if(validator(username, password) != true)
        {
            return res.send(validator(username, password));
        }
        let User = await Users.findOne({
            where:{
                username:username
            }
        })
        if(!User)
        {
            return res.send("Invalid Credentials");
        }
        let Match = await bcrypt.compare(password, User.password);
        if(!Match)
        {
            return res.send("Invalid Credentials");
        }
        req.session.isAuth = true;
        req.session.user = User.username;
        res.send("Success");
    }
};