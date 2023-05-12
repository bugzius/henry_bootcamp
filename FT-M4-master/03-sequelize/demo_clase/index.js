require('dotenv').config();
const { database } = require('./src/db.js');

const express = require('express');
const morgan = require('morgan');
const server = require('./src/server.js');
const { findAllEpisode } = require('./src/controllers/findAllEpisode.js');
const { createEpisode } = require('./src/controllers/createEpisode.js');

server.use(morgan('dev'));
server.use(express.json());

//Rutas
server.get('/character', (req,res) => {
    res.status(200).send('Todos los caracteres');
});

server.get('/episode', async (req,res) => {
    try {
        const data = await findAllEpisode();
        res.status(200).json(data);
    } catch ({message}) {
        res.status(500).json({error:message})
    }
});

server.post('/episode', async (req,res) => {
    try {
        const {name} = req.body;
        const episode = await createEpisode({name});
        res.status(200).json(episode);
    } catch ({message}) {
        res.status(500).json({error:message})
    };
});

//Sincroniza nuestra base de datos con la aplicación
/* //! EXPLAIN FORCE */
database.sync({alter:true})
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