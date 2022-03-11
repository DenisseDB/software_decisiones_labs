const User = require('../models/user');

exports.get_login = (request, response, next) => {
    response.render('login'); 
};

exports.login = (request, response, next) => {
    response.redirect('/mod1'); 
};

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/users/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.root = (request, response, next) => {
    response.redirect('/users/login'); 
};