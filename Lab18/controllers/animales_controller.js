const path = require('path');
const Animal = require('../models/animal');

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo', {
        username: request.session.username ? request.session.username : ''
    }); 
};

exports.post_nuevo = (request, response, next) => {
    console.log(request.body);
    //paso el push a models
    const animal  = new Animal(request.body.nombre);
    // lo guardamos al metodo save 
    animal.save();
    response.setHeader('Set-Cookie', 'ultimo__animal'+ animal.nombre + '; HttpOnly'); // agregamos cookie color principal es de a const // con HttpOnly evitamos el acceso a nuestra cookie 
    response.redirect('/animales');
    
};



exports.listar = (request, response, next) => {
    //animales: Animal.fetchAll(),
    Animal.fetchAll()
    .then(([rows, fieldData]) => {
        console.log(rows);
        response.render('lista', {
            animales: rows, // id si es el nombre de la tabla? o de a carpeta?
            username: request.session.username ? request.session.username : '',
            ultimo_animal: request.cookies.ultimo_animal ? request.cookies.ultimo_animal : ''
        }); 
    })
    .catch(err => {
        console.log(err);
    });  
}