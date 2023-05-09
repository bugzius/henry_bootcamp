const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Ability', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    description:{
      type: DataTypes.TEXT
    },
    mana_cost:{
      type: DataTypes.FLOAT,
      allowNull: false,
      len:[10.0,250.0]
    }
  });
};