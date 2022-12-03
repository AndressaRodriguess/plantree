const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database");

class Tree extends Model{};

Tree.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  family: {
    type: DataTypes.STRING,
    allowNull: false
  },
  scientific_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  origin: {
    type: DataTypes.STRING,
    allowNull: false
  },
  division: {
    type: DataTypes.STRING,
    allowNull: false
  },
  class: {
    type: DataTypes.STRING,
    allowNull: false
  },
  genus: {
    type: DataTypes.STRING,
    allowNull: false
  },
  specie: {
    type: DataTypes.STRING,
    allowNull: false
  },
  group: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, { 
    sequelize,
    modelName: "Tree",
    timestamps: true
});

module.exports = Tree;