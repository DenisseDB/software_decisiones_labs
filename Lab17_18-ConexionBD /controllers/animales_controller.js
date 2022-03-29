const path = require('path');
const Animal = require('../models/animal');

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo', {
        username: request.session.username ? request.session.username : ''
    }); 
};

exports.post_nuevo = (request, response, next) => {
    console.log(request.body);
    const animal = 
        new Animal(request.body.nombre, request.body.descripcion, request.body.imagen);
    animal.save()
        .then(() => {
            request.session.info = animal.nombre + ' fue registrado con éxito';
            response.setHeader('Set-Cookie', 
                'ultimo_animal='+animal.nombre+'; HttpOnly');
            response.redirect('/animales');
        })
        .catch(err => console.log(err));
    
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