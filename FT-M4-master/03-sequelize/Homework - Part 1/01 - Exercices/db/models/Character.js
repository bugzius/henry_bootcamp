const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Character', {
      code:{
         type: DataTypes.STRING,
         primaryKey: true,
         len:[0,5],
         notIn:[['HENRY']]
      },
      name:{
         type: DataTypes.STRING,
         unique: true,
         notIn:[['Henry', "SoyHenry","Soy Henry"]]
      },
      age:{
         type: DataTypes.INTEGER
      },
      race:{
         type: DataTypes.ENUM('Human','Machine','Elf','Demon', 'Animal', 'Other'),
         defaultValue: 'Other',
      },
      hp:{
         type: DataTypes.FLOAT,
         allowNull: false
      },
      mana:{
         type: DataTypes.FLOAT,
         allowNull: false
      }
   }, { timestamps: false });
};
