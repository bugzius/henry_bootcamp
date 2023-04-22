const express = require('express');


const postsRouter = express.Router();


postsRouter.get('/', (req,res) => {
    res.send('/posts, te envío todos los posts');
});

postsRouter.post('/', (req,res) => {
    //Obtenemos de la request un body
    const {name,id} = req.body;
    //res.json(data);//Enviamos valores en JSON
    res.send(`El ${name} con id: ${id} ha sido editado`);
});

module.exports = postsRouter