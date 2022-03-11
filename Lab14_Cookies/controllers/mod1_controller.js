// poner la funcoon anonima de mi get 

// en rutas hacer un cpybarascontroller = requiere("../controllers/capybaras_controller")

// de RUTAS PASA A CONTROLLER

const path = require('path');
const Color = require("../models/color"); // controlador incluye el modelo

exports.listar = (request, response, next) => {
    console.log('Ruta principal');
    // console.log(request.get('Cookie').split(';')[1]); // desplegar cookie en terminal
    console.log(request.cookies); // obtiene los objetos de mi aplicacion
    const info = request.session.info ? request.session.info : '';
    request.session.info = '';
    //console.log(request.cookies.ultimo_color ? request.cookies.ultimo_color : '');
    response.render('inicio', { // funcion que recibe la vista 
        //Color.fetchAll()
        username: request.session.username ? request.session.username : '' ,
        ultimo_color: request.cookies.ultimo_color ? request.cookies.ultimo_color : '',
          // decir si exite la cookie ulitmo color hacemos x accion, si
        // no esta, la hacemos  ' ' y lo mandamos al inicio.ejs donde ahi se realiza la accion
        info: info //El primer info es la variable del template, el segundo la constante creada arriba
    });
};

exports.get_colorFavorito =  (request, response) => {
    console.log('GET nuevo color');
    // el segundo argumento es un objeto con las variables que vas a querer usar en tu template
    //response.render('colorFavorito.ejs',{colores:Color.fetchAll()});
    response.render('colorFavorito', {
        username: request.session.username,
        //info: '',
        colores: Color.fetchAll()
    });
};

exports.post_colorFavorito = (request, response, next) => {
    console.log('POST nuevo color');
    console.log(request.body);
    //paso el push a models
    const color  = new Color(request.body.color);
    // lo guardamos al metodo save 
    color.save();
    //request.session.info = capybara.nombre + ' fue registrado con éxito';
    response.setHeader('Set-Cookie', 'ultimo__color'+ color.nombre + '; HttpOnly'); // agregamos cookie color principal es de a const // con HttpOnly evitamos el acceso a nuestra cookie 
    response.redirect('/colorFavorito');
};

