const express = require('express');

const server = express();

let users = [];
let id = 0;

server.use(express.json());

server.get('/', (req,res) => {
    res.status(200).send('code');
});

server.post('/users', (req, res) => {
    users.push({...req.body, id:id++});
    res.status(200).send(true);
});

server.get('/users/:id',(req,res) => {
    const idParam = Number(req.params.id);
    const user = users.find( (user) => user.id === idParam);
    if(!user) return res.status(404).json({error:'el elemento no ha sido encontrado'});
    res.status(200).json(user);
});

server.get('/users', (req,res) => {
    res.status(200).json(users);
});

function deleteAll(){
    users = [];
};

module.exports = {deleteAll,server};