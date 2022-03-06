const filesystem = require('fs');
const express = require('express');
const router = express.Router()

const animales_favoritos = ["Koala", "Perezoso", "Ballena", "Elefante"];
const pleiculas_favoritas = ["Luca", "Greatest Showman", "Bourlesque"];

// animales
router.get('/agregarAnimal', (request, response, next) => {
    response.write('<!DOCTYPE html>');
    response.write('<html lang="es-mx"><head>');
    response.write('<title>Mi Lista de animales favorito</title>');
    response.write('</head><body>');
    response.write('<h1 id="principal">Aqui encontraras mis animales favoritos</h1>');
    response.write('<h2>Agregar nuevo animal</h2>');
    response.write('<form action="agregarAnimal" method="POST">');
    response.write('<label for="animal">Nombre: </label> ');
    response.write('<input type="text" id="nombre" name="animal">');
    response.write('<br><br>');
    response.write('<input type="submit" value="Enviar">');
    response.write('</form>');
    response.write('<br><br>');
    response.write('<a href="/mod2">Regresar a mi lista de animales</a>');
    response.write('</body>');
    response.end();
});

router.post('/agregarAnimal', (request, response, next) => {
    console.log('POSTING');
    console.log(request.body);
    let nuevo_dato = request.body.nombre;
    console.log(nuevo_dato)
    animales_favoritos.push(nuevo_dato);
    filesystem.writeFileSync('animales.txt', animales_favoritos.toString());
    response.redirect('/agregarAnimal');
    response.end();
       
});

// peliculas
router.get('/peliculaFavorita', (request, response, next) => {
    response.write('<!DOCTYPE html>');
    response.write('<html lang="es-mx"><head>');
    response.write('<title>Mi Lista de peliculas favorito</title>');
    response.write('</head><body>');
    response.write('<h1 id="principal">Aqui encontraras mis peliculas favoritos</h1>');
    response.write('<h2>Agregar nueva pelicula</h2>');
    response.write('<form action="peliculaFavorita" method="POST">');
    response.write('<label for="peliculanew">Pelicula: </label> ');
    response.write('<input type="text" id="nombre" name="peliculanew">');
    response.write('<br><br>');
    response.write('<input type="submit" value="Enviar">');
    response.write('</form>');
    response.write('<br><br>');
    response.write('<a href="/mod2">Regresar a mi listas de cosas favoritas</a>');
    response.write('</body>');
    response.end();
});

router.post('/peliculaFavorita', (request, response, next) => {
    console.log('POSTING');
    console.log(request.body);
    let nuevo_dato = request.body.nombre;
    console.log(nuevo_dato)
    pleiculas_favoritas.push(nuevo_dato);
    filesystem.writeFileSync('pelicula.txt', pleiculas_favoritas.toString());
    response.redirect('/peliculaFavorita');
    response.end();
       
});

// principal
router.use('/', (request, response, next) => {
    console.log('Ruta principal');
    response.write('<!DOCTYPE html>');
    response.write('<html><head>');
    response.write('<title>Mi Lista de colores favoritos</title>');
    response.write('</head><body>');
    response.write('<h1 id="principal">Aqui encontraras mis colores favoritos</h1>');
    response.write('<p>Mis colores favoritos</p>');
    response.write('<ul>');
    for (let i in colores_favoritos) {
        respuesta += '<li>' + colores_favoritos[i] + '</li>';
    }
    respuesta += '</ul><br><br><a href="/mod1/colorFavorito">Agregar un nuevo color</a></body></html>';
    for (let i in comida_favorita) {
        respuesta += '<li>' + comida_favorita[i] + '</li>';
    }
    respuesta += '</ul><br><br><a href="/mod1/comidaFavorita">Agregar un nuevo platillo</a></body></html>';
    response.send(respuesta); 
});


module.exports = router;