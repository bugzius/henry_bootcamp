const express = require("express");

let publications = [];

const server = express();

server.use(express.json());
//Test 1
server.post('/posts', (req, res) => {
    
    try {
        const { author, title, contents, id } = req.body;
        const publicacion = {author, title, contents};
        const validate = Object.values(publicacion).some( val => !Boolean(val));

        if(validate) throw new Error('No se recibieron los parámetros necesarios para crear la publicación');
        
        publicacion.id = id;
        
        publications.push(publicacion);
        
        res.status(200).json(publicacion);
    } catch ({message}) {
        res.status(400).json({error:message});
    }
});

//Test 2
server.get('/posts', (req, res) => {
    try {
        const { author, title } = req.query;
        const dataFilter = publications.filter(
            (post) => post.author === author && post.title === title
        );

        if(!dataFilter.length)  throw new Error('No existe ninguna publicación con dicho título y autor indicado');
        res.status(200).json(dataFilter);
    } catch ({message}) {
        res.status(400).json({error:message})
    }
})

//Test 3

server.get('/posts/:author', (req,res) => {
    try {
        const { author } = req.params;
        const element = publications.find( p => p.author === author);

        if(!element) throw new Error('No existe ninguna publicación del autor indicado')
        res.status(200).json(element);
    } catch ({message}) {
        res.status(400).json({error:message});
    }
})

//Test 4
server.put('/posts/:id', (req,res) => {
    try{
        let validation = false;
        let newPublication = {};
        const { id } = req.params;

        publications = publications.map( p => {
            if(p.id === id){
                validation = true;
                newPublication = {...p, ...req.body};
                return newPublication;
            }
            return p;
        });

        if(!validation) throw new Error('No se recibió el id correcto necesario para modificar la publicación')
        res.status(200).json(newPublication);
    }catch({message}){
        res.status(400).json({error:message});
    };
});

//Test 5
server.delete('/posts/:id', (req,res) => {
    try {
        const { id } = req.params;
        
        const lengthPublications = publications.length;
        publications = publications.filter( p => p.id !== id);

        if(lengthPublications === publications.length) throw new Error('No se recibió el id correcto necesario para eliminar la publicación');
        
        res.status(200).json({success: true});
    } catch ({message}) {
        res.status(400).json({error:message});
    };
});

server.listen(3000, 'localhost', () => {
    console.log('Servidor corriendo');
})

//NO MODIFICAR EL CODIGO DE ABAJO. SE USA PARA EXPORTAR EL SERVIDOR Y CORRER LOS TESTS
module.exports = { publications, server };
