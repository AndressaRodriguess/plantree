const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database");

class User extends Model{};

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, { 
    sequelize,
    modelName: "User",
    timestamps: true
});

module.exports = User;