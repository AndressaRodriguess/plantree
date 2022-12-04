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
    type: DataTypes.DATE,
    allowNull: false
  },
  tree_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  local_id: {
    type: DataTypes.INTEGER,
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