const { Sequelize } = require('sequelize');
const { USER_DB,PASSWORD,DB_NAME,HOST,PORT} = process.env;

const DefineCharacterModel = require('./models/CharacterModel');
const DefineGenderModel = require('./models/GenderModel');
const DefineOriginModel = require('./models/OriginModel');
const DefineSpeciesModel = require('./models/SpeciesModel');
const DefineStatusModel = require('./models/StatusModel');

const DefineEpisodeModel = require('./models/Episode');

//Crear la conexión con la base de Datos
//! usuario de postgres
//! password  
//! host server
//! Puerto
//! Nombre de la base datos

const pathDataBase = `postgres://${USER_DB}:${PASSWORD}@${HOST}:${PORT}/${DB_NAME}`;
const database = new Sequelize(pathDataBase,{logging: false});

//! Argumentos
//nombre de la tabla
    //String, mayuscula y en singular
//Objetos con los campos de la tabla

//* Character
const GenderModel = DefineGenderModel(database);
const OriginModel = DefineOriginModel(database);
const SpeciesModel = DefineSpeciesModel(database);
const StatusModel = DefineStatusModel(database);

DefineCharacterModel(database,{
    StatusModel,
    OriginModel,
    SpeciesModel,
    GenderModel
});

//* Episode
DefineEpisodeModel(database);

//* Relation Character - Episode (N:N)
//! Extrae los modelos de la base de datos
const {Character, Episode } = database.models;

Character.belongsToMany(Episode, {through: "character_episode"});
Episode.belongsToMany(Character, {through: "character_episode"});

module.exports = {
    database,
    ...database.models
};