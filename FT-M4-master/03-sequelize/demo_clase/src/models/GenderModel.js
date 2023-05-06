const { DataTypes } = require('sequelize');

module.exports = (database) => {
    return database.define('Gender', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        gender:{
            type: DataTypes.STRING(20),
            unique: true,
            allowNull: false
        }
    });
}