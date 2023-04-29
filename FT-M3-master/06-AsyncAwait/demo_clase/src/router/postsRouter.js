const { Router } = require('express');
const { getPostsController } = require('../controllers/postController');

const postRouter = Router();

postRouter.get('/', getPostsController);

module.exports = postRouter;