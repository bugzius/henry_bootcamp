const express = require('express');

const usersRouter = express.Router();

//Creando las rutas para el /users
usersRouter.get('/', (req, res) => {
    res.send('Estoy en router de /users');
});

usersRouter.post('/:id', (req, res) => {
    const {id} = req.params;

    res.send('Estoy en router POST de /users' + id);
});

usersRouter.get('/:id', (req, res) => {
    const query = req.query;
    res.send('Estoy en router de /users/' + query.name);
});

module.exports = usersRouter;