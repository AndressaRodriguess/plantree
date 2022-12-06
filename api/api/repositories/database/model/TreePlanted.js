const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database");

class TreePlanted extends Model{};

TreePlanted.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  tree: {
    type: DataTypes.STRING,
    allowNull: false
  },
  local: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, { 
    sequelize,
    modelName: "TreePlanted",
    timestamps: false
});

module.exports = TreePlanted;