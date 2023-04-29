const express = require('express');
const morgan = require('morgan');

const PORT = 3000;

const indexRouter = require('./src/router/indexRouter');

const server = express();

server.use(morgan("dev"));

server.use(indexRouter);

server.listen(PORT, "localhost", () => {
    console.log(`Servidor corriendo desde el puerto: ${PORT}`);
});