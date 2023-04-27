const express = require("express");

let publications = [];

const server = express();

server.use(express.json());

server.post('/posts', (req, res) => {
    
    try {
        const { author, title, contents } = req.body;
        const publicacion = {author, title, contents};
        const validate = Object.values(publicacion).some( val => !Boolean(val));

        if(validate) throw new Error('No se recibieron los parámetros necesarios para crear la publicación');
        
        publicacion.id = Date.now();

        publications = [...publications, publicacion];

        res.status(200).json(publicacion);
    } catch ({message}) {
        res.status(400).json({error:message});
    }
})

server.listen(3000, 'localhost', () => {
    console.log('Servidor corriendo');
})

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
