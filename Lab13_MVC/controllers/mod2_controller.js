const path = require('path');
const Animal = require("../models/animal"); // controlador incluye el modelo
const Pelicula = require("../models/pelicula"); // controlador incluye el modelo


exports.listar = (request, response, next) => {
    console.log('Ruta principal');
    response.render('inicio.ejs'); 
};

exports.get_agregarAnimal =  (request, response) => {
    console.log('GET nuevo animal');
    response.render('agregarAnimal.ejs', {animales:Animal.fetchAll()});
};

exports.post_agregarAnimal = (request, response, next) => {
    console.log('POST nuevo animal');
    console.log(request.body);
    //paso el push a models
    const animal  = new Animal(request.body.animal);
    // lo guardamos al metodo save 
    animal.save();
    response.redirect('/agregarAnimal');
};

exports.get_peliculaFavorita =  (request, response) => {
    console.log('GET nueva pelicula');
    response.render('peliculaFavorita.ejs', {peliculas:Pelicula.fetchAll()});
};

exports.post_peliculaFavorita = (request, response, next) => {
    console.log('POST nueva pelicula');
    console.log(request.body);
    //paso el push a models
    const pelicula  = new Pelicula(request.body.pelicula);
    // lo guardamos al metodo save 
    pelicula.save();
    response.redirect('/peliculaFavorita');
};