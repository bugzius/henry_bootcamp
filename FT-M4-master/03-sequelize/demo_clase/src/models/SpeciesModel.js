const { DataTypes } = require('sequelize');

module.exports = (database) => {
    return database.define('Species', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        species:{
            type: DataTypes.STRING(20),
            unique: true,
            allowNull: false
        }
    });
}