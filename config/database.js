require("dotenv").config();
const {Sequelize} = require("sequelize");

const conn = new Sequelize(`postgres://${process.env.db_user}:${process.env.db_password}@${process.env.db_host}/${process.env.db}?sslmode=verify-full`,{
    ssl:true
});

const TryConnDb = async ()=>{
    try{
        await conn.authenticate();
        console.log("Connected :D");
    }catch(error){
        throw error;
    }
};

module.exports = {db: conn, TryConnDb};
