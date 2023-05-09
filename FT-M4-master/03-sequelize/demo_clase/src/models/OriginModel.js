const { DataTypes } = require('sequelize');

module.exports = (database) => {
    return database.define('Origin', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        origin:{
            type: DataTypes.STRING(50),
            unique: true,
            allowNull: false
        }
    }, {timestamps: false});
}