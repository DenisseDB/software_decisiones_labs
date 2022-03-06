// este js es una base para realizar el trabajo de express con rutas y en el js nombrado "servidor.js"

// filesystem
const filesystem = require('fs');

// express
const express  = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));



// definimos nuestra cadena original
const animales_favoritos = ["Koala", "Perezoso", "Ballena", "Elefante"];
const comida_favorita = ["Pokes", "Paella", "Rabioles"];
const colores_favoritos = ["Amarillo", "Morado", "Azul"];
const pleiculas_favoritas = ["Luca", "Greatest Showman", "Bourlesque"];

filesystem.writeFileSync('animales.txt', animales_favoritos.toString());
filesystem.writeFileSync('comida.txt', comida_favorita.toString());
filesystem.writeFileSync('colores.txt', colores_favoritos.toString());
filesystem.writeFileSync('peliculas.txt', pleiculas_favoritas.toString());

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
         response.write('<p>Mis comidas favoritos</p>');
         response.write('<ul>');
         for (let i in comida_favorita) {
            response.write('<li>' + comida_favorita[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<p>Mis colores favoritos</p>');
        response.write('<ul>');
        for (let i in colores_favoritos) {
            response.write('<li>' + colores_favoritos[i] + '</li>');
        }
        response.write('</ul>');
        response.write('<p>Mis peliculas favoritos</p>');
        response.write('<ul>');
        for (let i in pleiculas_favoritas) {
            response.write('<li>' + pleiculas_favoritas[i] + '</li>');
        }
         response.write('</ul>');
         response.write('<br><br>');
         response.write('<a href="agregarAnimal">Agregar Animal</a>');
         response.write('<br><br>');
         response.write('<a href="comidaFavorita">Agregar Comida</a>');
         response.write('<br><br>');
         response.write('<a href="colorFavorito">Agregar Color</a>');
         response.write('<br><br>');
         response.write('<a href="peliculaFavorita">Lista de peliculas favoritas</a>');
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
        })
    }else if (request.url === '/comidaFavorita' && request.method === 'GET') {
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es-mx"><head>');
            response.write('<title>Mi Lista de platillos favorito</title>');
            response.write('</head><body>');
            response.write('<h1 id="principal">Aqui encontraras mis platillos favoritos</h1>');
            response.write('<h2>Agregar nuevo platillo</h2>');
            response.write('<form action="comidaFavorita" method="POST">');
            response.write('<label for="plato">Plato: </label> ');
            response.write('<input type="text" id="nombre" name="plato">');
            response.write('<br><br>');
            response.write('<input type="submit" value="Enviar">');
            response.write('</form>');
            response.write('<br><br>');
            response.write('<a href="/">Regresar a mi lista de animales</a>');
            response.write('</body>');
            response.end();
        } else if (request.url === '/comidaFavorita' && request.method === 'POST') {  
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
               comida_favorita.push(nuevo_dato);
               // agregamos al txt el nuevo animal
               filesystem.appendFileSync('comida.txt', `,${nuevo_dato}`);
               response.setHeader('Content-Type', 'text/html');
               response.write('<!DOCTYPE html>');
               response.write('<title>Mi Lista de platillos favorito</title>');
              response.write('</head><body>');
               response.write('<h1 id="principal">Aqui encontraras mis platillos favoritos</h1>');
               response.write('<p>Mis platillos favoritos:</p>');
               response.write('<ul>');
               for (let i in comida_favorita) {
                   response.write('<li>' + comida_favorita[i] + '</li>');
               }
               response.write('</ul>');
               response.write('<br><br>');
               response.write('<a href="/">Ver Lista</a>');
               response.write('</body>');
               return response.end();
           })
         }else if (request.url === '/colorFavorito' && request.method === 'GET') {
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es-mx"><head>');
            response.write('<title>Mi Lista de colores favorito</title>');
            response.write('</head><body>');
            response.write('<h1 id="principal">Aqui encontraras mis colores favoritos</h1>');
            response.write('<h2>Agregar nuevo color</h2>');
            response.write('<form action="colorFavorito" method="POST">');
            response.write('<label for="color">Color: </label> ');
            response.write('<input type="text" id="nombre" name="color">');
            response.write('<br><br>');
            response.write('<input type="submit" value="Enviar">');
            response.write('</form>');
            response.write('<br><br>');
            response.write('<a href="/">Regresar a mi lista de colores</a>');
            response.write('</body>');
            response.end();
        } else if (request.url === '/colorFavorito' && request.method === 'POST') {  
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
               colores_favoritos.push(nuevo_dato);
               // agregamos al txt el nuevo animal
               filesystem.appendFileSync('colores.txt', `,${nuevo_dato}`);
               response.setHeader('Content-Type', 'text/html');
               response.write('<!DOCTYPE html>');
               response.write('<title>Mi Lista de colores favoritos</title>');
              response.write('</head><body>');
               response.write('<h1 id="principal">Aqui encontraras mis colores favoritos</h1>');
               response.write('<p>Mis colores favoritos:</p>');
               response.write('<ul>');
               for (let i in colores_favoritos) {
                   response.write('<li>' + colores_favoritos[i] + '</li>');
               }
               response.write('</ul>');
               response.write('<br><br>');
               response.write('<a href="/">Ver Lista</a>');
               response.write('</body>');
               return response.end();
           })
        }else if (request.url === '/peliculaFavorita' && request.method === 'GET') {
            response.setHeader('Content-Type', 'text/html');
            response.write('<!DOCTYPE html>');
            response.write('<html lang="es-mx"><head>');
            response.write('<title>Mi Lista de peliculas favorito</title>');
            response.write('</head><body>');
            response.write('<h1 id="principal">Aqui encontraras mis peliculas favoritas</h1>');
            response.write('<h2>Agregar nuevo pelicula</h2>');
            response.write('<form action="peliculaFavorita" method="POST">');
            response.write('<label for="peli">Pelicula: </label> ');
            response.write('<input type="text" id="nombre" name="peli">');
            response.write('<br><br>');
            response.write('<input type="submit" value="Enviar">');
            response.write('</form>');
            response.write('<br><br>');
            response.write('<a href="/">Regresar a mi lista de peliculas</a>');
            response.write('</body>');
            response.end();
        } else if (request.url === '/peliculaFavorita' && request.method === 'POST') {  
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
               pleiculas_favoritas.push(nuevo_dato);
               // agregamos al txt el nuevo animal
               filesystem.appendFileSync('peliculas.txt', `,${nuevo_dato}`);
               response.setHeader('Content-Type', 'text/html');
               response.write('<!DOCTYPE html>');
               response.write('<title>Mi Lista de peliculas favoritos</title>');
              response.write('</head><body>');
               response.write('<h1 id="principal">Aqui encontraras mis peliculas favoritos</h1>');
               response.write('<p>Mis colores favoritos:</p>');
               response.write('<ul>');
               for (let i in pleiculas_favoritas) {
                   response.write('<li>' + pleiculas_favoritas[i] + '</li>');
               }
               response.write('</ul>');
               response.write('<br><br>');
               response.write('<a href="/">Ver Lista</a>');
               response.write('</body>');
               return response.end();
           })
        }else {
         response.statusCode = 404;
         response.write('<title>Page | Not found</title>');
         response.write('<h1 id="principal">ERROR 404</h1>');
         response.end();
     }
});
 
server.listen(3000)