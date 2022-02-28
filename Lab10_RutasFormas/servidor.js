// servidor
const http = require('http');
const fs=require('fs')

const server = http.createServer( (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    if (request.url === '/') {
        const data = fs.readFileSync('lab1copy.html', 'utf8'); // creamos un stream de lectura y con pipe lo "convierte"
        response.write(data);
        return response.end();
    }else if(request.url === "/ruta2"){
        const data = fs.readFileSync('index_cine.html', 'utf8'); // creamos un stream de lectura y con pipe lo "convierte"
        response.write(data);
        return response.end();
    }else if(request.url === "/ruta3"){
        const data = fs.readFileSync('javaScript.html', 'utf8'); // creamos un stream de lectura y con pipe lo "convierte"
        response.write(data);
        return response.end();
    }else{
        response.statusCode = 404; 
        response.end();
    }
})

server.listen(3000);