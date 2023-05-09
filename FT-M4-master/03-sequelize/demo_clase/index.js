require('dotenv').config();
const { database, Episode } = require('./src/db.js');

const express = require('express');
const morgan = require('morgan');
const server = require('./src/server.js');

server.use(morgan('dev'));
server.use(express.json());

//Rutas
server.get('/characters', (req,res) => {
    res.status(200).send('Todos los caracteres');
});

server.get('/episode', (req,res) => {

});

server.post('/episode', (req,res) => {
    
});

//Sincroniza nuestra base de datos con la aplicación
/* //! EXPLAIN FORCE */
database.sync({force:true})
    .then(() => {
        //! Levantamos el servidor
        server.listen(3001, 'localhost', () => {
            console.log('Servidor corriendo...');
        });

        console.log("Estámo' redi'");
    });

/* Hacer uso de la promesa para levantar nuestro servidor
cuando se haya realizado la conexión con la base de datos.

Apenas se sincroniza, se levanta el servidor.

*/