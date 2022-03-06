const express = require('express');
const path = require('path');
const router = express.Router();
const filesystem = require('fs');

const colores_favoritos = ["Amarillo", "Morado", "Azul"];
const comida_favorita = ["Pokes", "Paella", "Rabioles"];

router.get('/', (request, response, next) => {
    console.log('Ruta principal');
    response.render('inicio.ejs'); 
});

router.get("/colorFavorito", (request, response) => {
    console.log('GET nuevo color');
    // el segundo argumento es un objeto con las variables que vas a querer usar en tu template
    response.render('colorFavorito.ejs',{colores:colores_favoritos});
});

router.post('/colorFavorito', (request, response, next) => {
    console.log('POST nuevo color');
    console.log(request.body);
    colores_favoritos.push(request.body.color);
    response.redirect('/colorFavorito');
    response.end()
});


router.get("/comidaFavorita", (request, response) => {
    console.log('GET nuevo platillo');
    response.render('comidaFavorita.ejs');
});

router.post('/comidaFavorita', (request, response, next) => {
    console.log('POST nuevo platillo');
    console.log(request.body);
    comida_favorita.push({nombre: request.body.nombre});
    response.redirect('/mod1');
    response.end()
});

module.exports = router;