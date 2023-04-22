const PORT = '3001';

const express = require('express');
const usersRouter = require('./routers/usersRouter.js');
const postsRouter = require('./routers/postsRouter.js');

const app = express();

//Middleware
app.use('/', (req, res, next) => {
    next();
});

app.use(express.json());

app.use('/users', usersRouter);
app.use('/posts', postsRouter);

app.listen(PORT, () => {
    console.log(`Nuestro servidor está corriendo en el Puerto ${PORT}`);
});