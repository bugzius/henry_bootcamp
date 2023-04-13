const fs = require("fs");
const http = require("http");
/* ⚠️ NO MODIFICAR NADA POR ENCIMA DE ESTA LÍNEA ⚠️ */
/* AQUÍ DEBAJO PUEDES ESCRIBIR LA CONSTANTE DEL PUERTO */
const PORT = 3001;

const server = http.createServer((req,res) => {
  console.log(`Server raised in port ${PORT}`);

  //Importaciones
  const { url } = req;
  
  //Acceso CORS
  res.setHeader('Access-Control-Allow-Origin',"*");

  //=-----------------Definiendo End Points------------=
  //Get all elements of file JSON
  if(url === '/api'){
    fs.readFile(__dirname + '/utils/dogsData.json', (err, data)=>{
      
      if(err){
        res.writeHead(404,{'Content-Type':'text/plain'});
        return res.end('json not found');
      };

      res.writeHead(200,{'Content-Type':'application/json'});
      res.end(data);
    });
    return 
  }
  
  //Alldogs get HTML file to Directory
  if(url.toLowerCase() === '/alldogs'){
    fs.readFile(__dirname + '/utils/allDogs.html','utf-8', (err, data) => {
      if(err){
        res.writeHead(404,{'Content-Type':'text/plain'});
        return res.end('html not found');
      }
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(data);
    });
    return 
  };

  //If the path is not registred - is default action
  res.writeHead(404,{'Content-Type':'text/plain'});
  res.end('Route not found');

}).listen(PORT, 'localhost');
/* ⚠️ LA LÍNEA SIGUIENTE TIENE QUE QUEDAR COMO ESTÁ PARA PODER EXPORTAR EL SERVIDOR ⚠️ */
module.exports =
  /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
  server;
