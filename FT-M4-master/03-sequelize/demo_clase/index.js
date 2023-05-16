require('dotenv').config();
const { database } = require('./src/db.js');

const express = require('express');
const morgan = require('morgan');
const server = require('./src/server.js');
const { findAllEpisode } = require('./src/controllers/findAllEpisode.js');
const { createEpisode } = require('./src/controllers/createEpisode.js');
const findAllCharacters = require('./src/controllers/findAllCharacters.js');
const createCharacter = require('./src/controllers/createCharacter.js');
const findCharacterById = require('./src/controllers/findCharacterById.js');

server.use(morgan('dev'));
server.use(express.json());

//Rutas
server.get('/character', async (req,res) => {
    try {
        //! Generate valid querys
        const props = ['status','name','origin','species','gender'];
        const query = Object.entries(req.query).reduce( (init,[key,val]) => {
            if(val && props.includes(key)){
                return {...init,[key]:val};
            };
            return init;
        },{});
        
        //! Get filter values
        const characters = await findAllCharacters(query);
        res.status(200).json(characters);
    } catch ({message}) {
        res.status(400).json({error:message});
    };
});

server.get('/character/:id', async (req,res) => {
    try {
        const {id} = req.params;  
        const character = await findCharacterById(id);
        res.status(200).json(character);
    } catch ({message}) {
        res.status(400).json({error:message});
    };
});

server.post('/character', async (req,res) => {
    try {
        const {name,gender,status, origin, species, episodes} = req.body;
        const charater = await createCharacter({name,gender,status, origin, species,episodes});
        res.status(200).json(charater);
    } catch ({message}) {
        res.status(400).json({error:message});
    };
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
        server.listen(3002, 'localhost', () => {
            console.log('Servidor corriendo...');
            console.log("Estámo' redi'");
        });
    });

/* Hacer uso de la promesa para levantar nuestro servidor
cuando se haya realizado la conexión con la base de datos.

Apenas se sincroniza, se levanta el servidor.

*/