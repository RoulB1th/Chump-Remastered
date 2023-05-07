const {db} = require("../config/database");
const {DataTypes} = require("sequelize");

const User = db.define("UsersModels",{
    username:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    id:{
        primaryKey: true,
        allowNull:false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    email:{
        type:DataTypes.STRING,
        allowNull: true,
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    createdAt:{
        type:DataTypes.DATE,
    },
    updatedAt:{
        type:DataTypes.DATE
    }
});

User.sync();

module.exports = User;