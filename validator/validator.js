const e_validator = require("email-validator");

module.exports = {
    signup : (username, email, password)=>{
        let errors = [];
        
        if(username.length < 5)
        {
            errors[0] = "Username Field Must Exceed 5 Characters";
        }
        if(username.length > 20)
        {
            errors[0] = 'Username Field Must NOT Exceed 20 Characters';
        }
        if(password.length < 6)
        {
            errors[1] = "Password Field Must Exceed 6 Characters";
        }
        if(password.length > 50)
        {
            errors[1] = "Password Field Must NOT Exceed 50 Characters";
        }
        
        if(!e_validator.validate(email))
        {
            errors[2] = "Email Field Must be A Valid Email Address";
        }
        if(errors.length != 0)
        {
            return errors;
        }
        return true;
    },
    login : (username, password)=>{
        let errors = [];
        
        if(username.length < 5)
        {
            errors[0] = "Username Field Must Exceed 5 Characters";
        }
        if(username.length > 20)
        {
            errors[0] = 'Username Field Must NOT Exceed 20 Characters';
        }
        if(password.length < 6)
        {
            errors[1] = "Password Field Must Exceed 6 Characters";
        }
        if(password.length > 50)
        {
            errors[1] = "Password Field Must NOT Exceed 50 Characters";
        }
        if(errors.length != 0)
        {
            return errors;
        }
        return true;
    }
}