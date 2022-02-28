// servidor
const http = require('http');
const fs=require('fs')

const server = http.createServer( (request, response) => {
  fs.createReadStream("lab1.html").pipe(response); // creamos un stream de lectura y con pipe lo "convierte"

})

server.listen(3000);