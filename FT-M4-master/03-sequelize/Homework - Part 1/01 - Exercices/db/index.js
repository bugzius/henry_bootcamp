const { Sequelize, Op } = require('sequelize');
const modelCharacter = require('./models/Character.js');
const modelAbility = require('./models/Ability.js');
const modelRole = require('./models/Role.js');

const {NAME_DB,PASSWORD_DB,USER_DB,HOST_DB,PORT_DB,} = process.env;

const db = new Sequelize(
   `postgres://${USER_DB}:${PASSWORD_DB}@${HOST_DB}:${PORT_DB}/${NAME_DB}`,
   {
      logging: false,
   }
);

modelCharacter(db);
modelAbility(db);
modelRole(db);

module.exports = {
   ...db.models,
   db,
   Op,
};
