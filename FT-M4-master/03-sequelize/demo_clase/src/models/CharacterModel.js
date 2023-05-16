const { DataTypes } = require('sequelize');

module.exports = (database) => {
    return database.define('Character', {
        id:{
            type: DataTypes.INTEGER,//TIpo de dato entero
            autoIncrement: true, //AutoIncrementable
            primaryKey:true, //PrimaryKey
        },
        name:{
            type: DataTypes.STRING(40),
            unique:true,
            allowNull: true
        },
        status:{
            type: DataTypes.STRING(20),
            allowNull:false
        },
        origin:{
            type: DataTypes.STRING(30),
            allowNull:false
        },
        species:{
            type: DataTypes.STRING(20),
            allowNull:false
        },
        gender:{
            type: DataTypes.STRING(10),
            allowNull:false
        },
    },{timestamps: false});
};