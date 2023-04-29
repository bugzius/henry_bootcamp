const { Router } = require('express');
const { getUsersController } = require('../controllers/usersController');


const usersRouter = Router();

usersRouter.get('/', getUsersController);

module.exports = usersRouter;