import { createServer } from 'http';
import fs from 'fs';

createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    
    if(req.url === '/students'){
        res.writeHead(200, {'Content-Type':'application/json'});
        const students = fs.readFileSync('./data.json','utf-8');
        res.end(students);
    }
    
}).listen(3001, 'localhost');