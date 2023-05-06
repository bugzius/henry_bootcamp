const { DataTypes } = require('sequelize');

module.exports = (database) => {
    return database.define('Status', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true
        },
        status:{
            type: DataTypes.STRING(15),
            unique: true,
            allowNull: false
        }
    });
}