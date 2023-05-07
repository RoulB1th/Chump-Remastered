const express = require("express");
const app = express();
const MainRouter = require("./routes/home");
const RegisterRouter = require("./routes/signup");
const logOut = require("./routes/logout");
const logInRouter = require("./routes/login");
const {db} = require("./config/database");
const sessionStore = require("./config/session");
const session = require("express-session");
const UserModel = require("./models/User");
const path = require("path");
const cors = require("cors");
require("dotenv").config();

app.use(session({
    secret:"Secret Key",
    resave:false,
    saveUninitialized:false,
    store:sessionStore
}))
app.set("view engine","pug");
app.use("/",MainRouter);
app.use("/signup",RegisterRouter);
app.use("/signin",logInRouter);
app.use("/logout",logOut);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/:id',(req, res, next)=>{
    res.render("404",{
        page:req.params.id
    })
});
app.use(cors);

app.listen(process.env.port || 8080, process.env.host || "127.0.0.1",()=>{
    console.log(`Listening On ${process.env.host||"127.0.0.1"}:${process.env.port||8080}`)
});