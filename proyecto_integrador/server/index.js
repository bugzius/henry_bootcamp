const http = require('http');

//* Import Routes
const {getACharacter, ROUTE_NAME_GET_CHARACTER} = require('./controllers/getACharacter.js');

//Creación del Servidor
http.createServer((req,res) => {
    //Control de Acceso
    res.setHeader('Access-Control-Allow-Origin','*');

    //* End Points
    const elementsUrl = req.url.slice(1).split("/");
    
    //! Routes with only one parameter
    if(elementsUrl.length === 1){
        console.log(elementsUrl[0]);
    };

    //! Route Dinamics with two parameters
    if(elementsUrl.length === 2){
        //* Creation Routes
        const routes = ({
            //TODO: Write Here all Routes with two params
            [`${ROUTE_NAME_GET_CHARACTER}`]: () => getACharacter(res, elementsUrl[1])
        });
        
        //* Validate Route in request
        const staticRoute = routes[elementsUrl.join('/')];
        
        //? if not exist a static route with two paths, This route will be a Dinamic Route
        if(!staticRoute){
            routes[elementsUrl[0]]()
            return;
        }

        //? If exist a static route in the Object
        staticRoute();
    };

    //* Home or Base Response
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.end(JSON.stringify({nombre:'EA'}));

}).listen(3001,'localhost');

/**
 * Routes
 * 
 */