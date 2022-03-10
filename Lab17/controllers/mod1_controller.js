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
    const color  = new Color(request.body.color, request.body.descripcion, rquest.body.imagen);
    // lo guardamos al metodo save 
    color.save() // nos regresa la promesa
        .then(() => {

        }

        )
        .catch(err => console.log(err));
    response.setHeader('Set-Cookie', 'ultimo__color'+ color.color + '; HttpOnly'); // agregamos cookie color principal es de a const // con HttpOnly evitamos el acceso a nuestra cookie 
    response.redirect('/colorFavorito');
};

exports.listar = (request, response, next) => {
    console.log('Ruta principal');
    // console.log(request.get('Cookie').split(';')[1]); // desplegar cookie en terminal
    // console.log(request.cookies); // obtiene los objetos de mi aplicacion
    Color.fetchAll()
    .then(([rows, fieldData]) => { // lo que ocurre cuando si no se cumple la 
        //promesa me regresa un row recuperando datos de la base de datos, con fieldata no hacemos nada
    console.log(rows);
    response.render('inicio'); {
        ultimo_color = request.cookies.ultimo_color ? request.cookie.ultimo_color : ' '  // decir si exite la cookie ulitmo color hacemos x accion, si
                                                                                        // no esta, la hacemos  ' ' y lo mandamos al inicio.ejs donde ahi se realiza la accion
    }

    
}


// no hacer el render hasta que la base de datos ns haya respondido
// hacer lista.ejs