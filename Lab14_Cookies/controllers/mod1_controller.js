// poner la funcoon anonima de mi get 

// en rutas hacer un cpybarascontroller = requiere("../controllers/capybaras_controller")

// de RUTAS PASA A CONTROLLER

const path = require('path');
const Color = require("../models/color"); // controlador incluye el modelo

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
    response.setHeader('Set-Cookie', 'ultimo__color'+ color.color + '; HttpOnly'); // agregamos cookie color principal es de a const // con HttpOnly evitamos el acceso a nuestra cookie 
    response.redirect('/colorFavorito');
};

exports.listar = (request, response, next) => {
    console.log('Ruta principal');
    // console.log(request.get('Cookie').split(';')[1]); // desplegar cookie en terminal
    // console.log(request.cookies); // obtiene los objetos de mi aplicacion
    console.log(request.cookies.ultimo_color ? request.cookies.ultimo_color : '');
    response.render('inicio', { // funcion que recibe la vista 
        //Color.fetchAll()
        ultimo_color: request.cookies.ultimo_color ? request.cookies.ultimo_color : ''  // decir si exite la cookie ulitmo color hacemos x accion, si
        // no esta, la hacemos  ' ' y lo mandamos al inicio.ejs donde ahi se realiza la accion
    });
};