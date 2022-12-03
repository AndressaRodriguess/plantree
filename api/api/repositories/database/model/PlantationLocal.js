const { Model, DataTypes } = require('sequelize');
const sequelize = require("../database");

class PlantationLocal extends Model{};

PlantationLocal.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
}, { 
    sequelize,
    modelName: "PlantationLocal",
    timestamps: false
});

module.exports = PlantationLocal;