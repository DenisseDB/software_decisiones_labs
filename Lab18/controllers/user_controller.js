const bcrypt = require('bcryptjs');
const User = require('../models/user');

exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username ? request.session.username : ''
    }); 
};

exports.login = (request, response, next) => {
    // busquemos un usuario con su username recuperado del body
    User.findOne(request.body.username)
    .then(([rows, fielData])=>{
        
        // si se intento registar con un username de una letra
        if (rows.length < 1) {
            // no se le permite entrar y se queda en el login
            return response.redirect('/users/login');
        }

        // las rows a necesitar de la tabla usuarios 
        const user = new User(rows[0].nombre, rows[0].username, rows[0].password);
        // comparamos la contra ingresada en el body con la registrada en la bd
        bcrypt.compare(request.body.password, user.password)
            .then(doMatch => {
                if (doMatch) {
                    // si todo coincide con la bd se permite el acceso
                    request.session.isLoggedIn = true;
                    request.session.user = user;
                    request.session.username = user.nombre;
                    return request.session.save(err => {
                        response.redirect('/animales');
                    });
                }
                // si no, se permanece en login
                response.redirect('/users/login');
            }).catch(err => {
                response.redirect('/users/login');
            });
    }).catch((error)=>{
        console.log(error)
    });

};
    
// regitrar nuevo usuario en la base de datos
exports.get_signup = (request, response, next) => {
    response.render('signup', {
        username: request.session.username ? request.session.username : '',
        info: ''
    }); 
};

    
exports.post_signup = (request, response, next) => {
    const user = 
        new User(request.body.nombre, request.body.username, request.body.password);
    user.save()
        .then(()=>{
            response.redirect('/users/login'); 
        }).catch((error)=>{
            console.log(error);
        });
};
    

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.root = (request, response, next) => {
    response.redirect('/users/login'); 
};