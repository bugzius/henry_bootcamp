const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
    const {url} = req;

    //Enviar texto Plano

    if(url === '/'){
        res.writeHead(200, {"Content-Type":"text/plain"});
        return res.end("Esa es mi papá");
    }
    if(url === '/students'){
        res.writeHead(200, {'Content-Type':'application/json'});
        const data = [
            {
                id: 1,
                name:'Daniel',
                salarium: 5000
            },
            {
                id: 1,
                name:'Alejandro',
                salarium: 5000
            },
            {
                id: 1,
                name:'Nestor',
                salarium: 5000
            }
        ];
        return res.end(JSON.stringify(data));
    };
    if(url === '/viewstudents'){
        res.writeHead(200, {'Content-Type':'text/html'});
        const html = fs.readFileSync(__dirname + '/index.html', 'utf-8');
        const page = html.replaceAll('{first_element}','Esa es mi papá')
                         .replaceAll('{title_page}','Severa');
        return res.end(page);
    }
    //Si no encuentra ninguna ruta en la validación, cae
    res.writeHead(404,{'Content-Type':'text/plain'});
    res.end('URL Not Found');

}).listen(1337,'localhost');