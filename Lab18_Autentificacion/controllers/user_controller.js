const User = require('../models/user');

exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username ? request.session.username : '', 
        info: ''
    });
};

exports.post_login = (request, response, next) => {
    User.findOne(request.body.username)

    if (User.login(request.body.username, request.body.password)) {
        request.session.username = request.body.username;
        response.redirect('/mod1'); 
    } else {
        response.redirect('/user/login'); 
    }
};


exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/user/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.root = (request, response, next) => {
    response.redirect('/mod1'); 
};

exports.get_signup = (request, response, next) => {
    response.render('signup', {
        username: request.session.username ? request.session.username : '', 
        info: ''
    });
};

exports.post_signup = (request, response, next) => {
    const user = new User(request.body.nombre, request.body.username, request.body.password )
    user.save()
    .then(()=>{
        response.redirect('/users/login')
    })
    .catch((error)=>{
        console.log(error);
    })
};

// FINDONE puede encontrar o no a un usuario, si no encuentra usuarios los regresa al login
// EL BYCRIPT compara el usuario contraseña 
// compare hace la comparacion entre contraseñas y usuario, si el usario existe pero la contra no es correcta, se va al login
// si el usuario y contraseña son correctas, se va a la pagina inicial