const path = require('path');
const Animal = require('../models/animal');

exports.get_nuevo = (request, response, next) => {
    response.render('nuevo', {
        username: request.session.username ? request.session.username : '',
        info: ''
    }); 
};

exports.post_nuevo = (request, response, next) => {
    console.log(request.body);
    //paso el push a models
    const animal  = new Animal(request.body.nombre);
    // lo guardamos al metodo save 
    animal.save();
    request.session.info = animal.nombre + ' fue registrado con éxito';
    response.setHeader('Set-Cookie', 'ultimo__animal'+ animal.nombre + '; HttpOnly'); // agregamos cookie color principal es de a const // con HttpOnly evitamos el acceso a nuestra cookie 
    response.redirect('/animales');
    
};

/*
console.log(request.body);
    const animal = 
        new Animal(request.body.nombre, request.body.descripcion, request.body.imagen);
    animal.save()
        .then(() => {
            request.session.info = animal.nombre + ' fue registrado con éxito';
            response.setHeader('Set-Cookie', 
                'ultimo_capybara='+animal.nombre+'; HttpOnly');
            response.redirect('/capybaras');
        })
        .catch(err => console.log(err));
*/



exports.listar = (request, response, next) => {
    const info = request.session.info ? request.session.info : '';
    request.session.info = '';
    response.render('lista', { // funcion que recibe la vista 
        animales: Animal.fetchAll(),
        username: request.session.username ? request.session.username : '',
        ultimo_animal: request.cookies.ultimo_animal ? request.cookies.ultimo_animal : '',
          // decir si exite la cookie ulitmo color hacemos x accion, si
        // no esta, la hacemos  ' ' y lo mandamos al inicio.ejs donde ahi se realiza la accion
        info: info, //El primer info es la variable del template, el segundo la constante creada arriba
    });
}