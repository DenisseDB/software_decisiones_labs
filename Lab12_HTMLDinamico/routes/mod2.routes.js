const express = require('express');
const path = require('path');
const router = express.Router();
const filesystem = require('fs');

const animales_favoritos = ["Koala", "Perezoso", "Ballena", "Elefante"];
const pleiculas_favoritas = ["Luca", "Greatest Showman", "Bourlesque"];


router.get("/agregarAnimal", (request, response) => {
    console.log('GET nuevo animal');
    response.render('agregarAnimal.ejs');
});

router.post('/agregarAnimal', (request, response, next) => {
    console.log('POST nuevo animal');
    console.log(request.body);
    animales_favoritos.push({nombre: request.body.nombre});
    response.redirect('/mod2');
    response.end()
});


router.get("/peliculaFavorita", (request, response) => {
    console.log('GET nueva pelicula');
    response.render('peliculaFavorita.ejs');
});

router.post('/peliculaFavorita', (request, response, next) => {
    console.log('POST nueva pelicula');
    console.log(request.body);
    pleiculas_favoritas.push({nombre: request.body.nombre});
    response.redirect('/mod2');
    response.end()
});

router.use('/', (request, response, next) => {
    console.log('Ruta principal');
    response.render('mod2', {mod2: mod2}); 
});

module.exports = router;