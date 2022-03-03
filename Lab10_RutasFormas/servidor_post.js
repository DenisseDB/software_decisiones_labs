const filesystem = require('fs');
// definimos nuestra cadena original
const animales_favoritos = ["Koala", "Perezoso", "Ballena", "Elefante"];
filesystem.writeFileSync('animales.txt', animales_favoritos.toString());

const http = require('http');
 
 const server = http.createServer( (request, response) => {
     
     if (request.url === '/') {
         response.setHeader('Content-Type', 'text/html');
         response.write('<!DOCTYPE html>');
         response.write('<html><head>');
         response.write('<title>Mi Lista de animales favoritos</title>');
         response.write('</head><body>');
         response.write('<h1 id="principal">Aqui encontraras mis animales favoritos</h1>');
         response.write('<p>Mis animales favoritos</p>');
         response.write('<ul>');
         for (let i in animales_favoritos) {
             response.write('<li>' + animales_favoritos[i] + '</li>');
         }
         response.write('</ul>');
         response.write('<br><br>');
         response.write('<a href="agregarAnimal">¿Me gusta otro animal?</a>');
         response.write('</body>');
         response.end();
     } else if (request.url === '/agregarAnimal' && request.method === 'GET') {
         response.setHeader('Content-Type', 'text/html');
         response.write('<!DOCTYPE html>');
         response.write('<html lang="es-mx"><head>');
         response.write('<title>Mi Lista de animales favorito</title>');
         response.write('</head><body>');
         response.write('<h1 id="principal">Aqui encontraras mis animales favoritos</h1>');
         response.write('<h2>Agregar nuevo animal</h2>');
         response.write('<form action="agregarAnimal" method="POST">');
         response.write('<label for="animal">Animal: </label> ');
         response.write('<input type="text" id="nombre" name="animal">');
         response.write('<br><br>');
         response.write('<input type="submit" value="Enviar">');
         response.write('</form>');
         response.write('<br><br>');
         response.write('<a href="/">Regresar a mi lista de animales</a>');
         response.write('</body>');
         response.end();
     } else if (request.url === '/agregarAnimal' && request.method === 'POST') {  
         console.log("POST");
        
        const datos = [];
        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });
        return request.on('end', () => {
            console.log(datos);
            const datos_completos = Buffer.concat(datos).toString();
            console.log(datos_completos);
            const nuevo_dato = datos_completos.split('=')[1];
            console.log(nuevo_dato);
            animales_favoritos.push(nuevo_dato);
            // agregamos al txt el nuevo animal
            filesystem.appendFileSync('animales.txt', `,${nuevo_dato}`);
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write('<title>Mi Lista de animales favorito</title>');
           response.write('</head><body>');
            response.write('<h1 id="principal">Aqui encontraras mis animales favoritos</h1>');
            response.write('<p>Mis animales favoritos:</p>');
            response.write('<ul>');
            for (let i in animales_favoritos) {
                response.write('<li>' + animales_favoritos[i] + '</li>');
            }
            response.write('</ul>');
            response.write('<br><br>');
            response.write('<a href="/">Ver Lista</a>');
            response.write('</body>');
            return response.end();
        });
     } else {
         response.statusCode = 404;
         response.end();
     }
});
 
server.listen(3000);