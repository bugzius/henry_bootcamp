const { Router } = require('express');
const { getCharById } = require('../controllers/getCharById.js');

const indexRouter = Router();

indexRouter.get('/characters/:id', getCharById);

module.exports = indexRouter;