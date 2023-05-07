const Users = require("../models/User");
const bcrypt = require("bcrypt");
const validator = require("../validator/validator").signup;

module.exports = {
    newUser : async (req, res)=>{

        const {username, password, email} = req.body;

        if(validator(username, email, password) != true)
        {
            return res.send(validator(username, email, password));
        }
        
        let User = await Users.findOne({
            where:{
                username:username
            }
        })

        if(User)
        {
            return res.send("User Exists");
        }

        let User_Mail = await Users.findOne({
            where:{
                email:email
            }
        });
        if(User_Mail){
            return res.end("User Exists");
        }

        let hashedPass = await bcrypt.hash(password,12);

        const newUser = await Users.create({
            username:username,
            email:email,
            password:hashedPass,
            createdAt: Date(),
            updatedAt: Date()
        })
        req.session.isAuth = true;
        req.session.user = newUser.username;
        res.send("Success");
    }
};