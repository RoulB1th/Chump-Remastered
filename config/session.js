const genFunc = require("connect-pg-simple");
const session = require("express-session");
const pgStore = genFunc(session);
require("dotenv").config();
const sessionStore = new pgStore({
    conString:`postgres://${process.env.db_user}:${process.env.db_password}@${process.env.db_host}/${process.env.db}?sslmode=verify-full`
})

module.exports = sessionStore;
