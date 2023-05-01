require('dotenv').config();
const express = require('express');
const cors = require('cors');
const indexRouter = require('./src/router/indexRouter');

const port = process.env.PORT || 4002;

const server = express();

server.use(express.json());
server.use(cors);
server.use('/', indexRouter);

console.log();

server.listen(port, 'localhost', () => {
    console.log('Servidor corriendo en el puerto:' + port);
});

module.exports = server;