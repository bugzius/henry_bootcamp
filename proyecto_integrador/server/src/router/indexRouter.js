const { Router } = require('express');
const { getCharById } = require('../controllers/getCharById.js');
const { getCharacters } = require('../controllers/getCharacters.js');

const indexRouter = Router();

indexRouter.get('/characters/:id', getCharById);
indexRouter.get('/characters', getCharacters);

module.exports = indexRouter;