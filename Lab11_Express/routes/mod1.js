const filesystem = require('fs');
const express = require('express');
const router = express.Router()

const colores_favoritos = ["Amarillo", "Morado", "Azul"];
const comida_favorita = ["Pokes", "Paella", "Rabioles"];

// colores
router.get('/colorFavorito', (request, response, next) => {
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
    response.write('<a href="/mod1">Regresar a mi lista de colores</a>');
    response.write('</body>');
    response.end();
});

router.post('/colorFavorito', (request, response, next) => {
    console.log('POSTING');
    console.log(request.body);
    let nuevo_dato = request.body.nombre;
    console.log(nuevo_dato)
    colores_favoritos.push(nuevo_dato);
    filesystem.writeFileSync('colores.txt', colores_favoritos.toString());
    response.redirect('/colorFavorito');
    response.end();
       
});

// comida
router.get('/comidaFavorita', (request, response, next) => {
    response.write('<!DOCTYPE html>');
    response.write('<html lang="es-mx"><head>');
    response.write('<title>Mi Lista de platillos favorito</title>');
    response.write('</head><body>');
    response.write('<h1 id="principal">Aqui encontraras mis platillos favoritos</h1>');
    response.write('<h2>Agregar nuevo platillo</h2>');
    response.write('<form action="comidaFavorita" method="POST">');
    response.write('<label for="comidafav">Platillo: </label> ');
    response.write('<input type="text" id="nombre" name="comidafav">');
    response.write('<br><br>');
    response.write('<input type="submit" value="Enviar">');
    response.write('</form>');
    response.write('<br><br>');
    response.write('<a href="/mod1">Regresar a mi listas de cosas favoritas</a>');
    response.write('</body>');
    response.end();
});

router.post('/comidaFavorita', (request, response, next) => {
    console.log('POSTING');
    console.log(request.body);
    let nuevo_dato = request.body.nombre;
    console.log(nuevo_dato)
    comida_favorita.push(nuevo_dato);
    filesystem.writeFileSync('comida.txt', comida_favorita.toString());
    response.redirect('/comidaFavorita');
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