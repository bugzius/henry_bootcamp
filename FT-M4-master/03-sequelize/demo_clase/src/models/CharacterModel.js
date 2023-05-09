const { DataTypes } = require('sequelize');

module.exports = (database,{StatusModel, OriginModel, SpeciesModel, GenderModel}) => {
    return database.define('Character', {
        id:{
            type: DataTypes.INTEGER,//TIpo de dato entero
            autoIncrement: true, //AutoIncrementable
            primaryKey:true, //PrimaryKey
        },
        name:{type: DataTypes.STRING(40),unique:true},
        status:{type: DataTypes.INTEGER,references: {model: StatusModel,key:'id',}, allowNull: false},
        origin:{type: DataTypes.INTEGER,references:{model: OriginModel,key:'id'}, allowNull: false},
        species:{type: DataTypes.INTEGER,references:{model: SpeciesModel,key:'id'}, allowNull: false},
        gender:{type: DataTypes.INTEGER,references:{model: GenderModel,key:'id'}, allowNull: false},
    },{timestamps: false});
};