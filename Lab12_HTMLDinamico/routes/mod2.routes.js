const express = require('express');
const path = require('path');
const router = express.Router();
const filesystem = require('fs');

const animales_favoritos = ["Koala", "Perezoso", "Ballena", "Elefante"];
const pleiculas_favoritas = ["Luca", "Greatest Showman", "Bourlesque"];

router.get('/', (request, response, next) => {
    console.log('Ruta principal');
    response.render('inicio.ejs'); 
});

router.get("/agregarAnimal", (request, response) => {
    console.log('GET nuevo animal');
    response.render('agregarAnimal.ejs', {animales:animales_favoritos});
});

router.post('/agregarAnimal', (request, response, next) => {
    console.log('POST nuevo animal');
    console.log(request.body);
    animales_favoritos.push(request.body.animal);
    response.redirect('/agregarAnimal');
    response.end()
});


router.get("/peliculaFavorita", (request, response) => {
    console.log('GET nueva pelicula');
    response.render('peliculaFavorita.ejs', {peliculas:pleiculas_favoritas});
});

router.post('/peliculaFavorita', (request, response, next) => {
    console.log('POST nueva pelicula');
    console.log(request.body);
    pleiculas_favoritas.push(request.body.pelicula);
    response.redirect('/peliculaFavorita');
    response.end()
});

module.exports = router;