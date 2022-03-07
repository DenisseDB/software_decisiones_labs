// poner la funcoon anonima de mi get 

// en rutas hacer un cpybarascontroller = requiere("../controllers/capybaras_controller")

// de RUTAS PASA A CONTROLLER

const path = require('path');
const Color = require("../models/color"); // controlador incluye el modelo
const Comida = require("../models/comida"); // controlador incluye el modelo

exports.listar = (request, response, next) => {
    console.log('Ruta principal');
    response.render('inicio'); 
};

exports.get_colorFavorito =  (request, response) => {
    console.log('GET nuevo color');
    // el segundo argumento es un objeto con las variables que vas a querer usar en tu template
    response.render('colorFavorito.ejs',{colores:Color.fetchAll()});
};

exports.post_colorFavorito = (request, response, next) => {
    console.log('POST nuevo color');
    console.log(request.body);
    //paso el push a models
    const color  = new Color(request.body.color);
    // lo guardamos al metodo save 
    color.save();
    response.redirect('/colorFavorito');
};

exports.get_comidaFavorita = (request, response) => {
    console.log('GET nuevo platillo');
    response.render('comidaFavorita.ejs',{platillos:Comida.fetchAll()});
};

exports.post_comidaFavorita = (request, response, next) => {
    console.log('POST nuevo platillo');
    console.log(request.body);
    //paso el push a models
    const comida  = new Comida(request.body.platillo);
    // lo guardamos al metodo save 
    comida.save();
    response.redirect('/comidaFavorita');
};
