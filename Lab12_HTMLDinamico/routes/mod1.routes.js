const express = require('express');
const path = require('path');
const router = express.Router();
const filesystem = require('fs');

const colores_favoritos = ["Amarillo", "Morado", "Azul"];
const comida_favorita = ["Pokes", "Paella", "Rabioles"];


router.get("/colorFavorito", (request, response) => {
    console.log('GET nuevo color');
    response.render('colorFavorito');
});

router.post('/colorFavorito', (request, response, next) => {
    console.log('POST nuevo color');
    console.log(request.body);
    colores_favoritos.push({nombre: request.body.nombre});
    response.redirect('/mod1');
    response.end()
});


router.get("/comidaFavorita", (request, response) => {
    console.log('GET nuevo platillo');
    response.render('comidaFavorita');
});

router.post('/comidaFavorita', (request, response, next) => {
    console.log('POST nuevo platillo');
    console.log(request.body);
    comida_favorita.push({nombre: request.body.nombre});
    response.redirect('/mod1');
    response.end()
});

router.use('/', (request, response, next) => {
    console.log('Ruta principal');
    response.render('mod1', {mod1: mod1}); 
});

module.exports = router;