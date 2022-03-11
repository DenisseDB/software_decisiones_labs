const User = require('../models/user');

exports.get_login = (request, response, next) => {
    response.render('login', {
        username: request.session.username ? request.session.username : '', 
        info: ''
    });
};

// post login 



exports.post_login = (request, response, next) => {
    if (User.login(request.body.username, request.body.password)) {
        request.session.username = request.body.username;
        response.redirect('/mod1'); 
    } else {
        response.redirect('/user/login'); 
    }
};


/*
exports.post_login = (request, response, next) => {
    request.session.isLoggedIn = true;
    request.session.usuario = request.body.usuario

    response.redirect('/mod1');

};
*/

exports.logout = (request, response, next) => {
    request.session.destroy(() => {
        response.redirect('/user/login'); //Este código se ejecuta cuando la sesión se elimina.
    });
};

exports.root = (request, response, next) => {
    response.redirect('/mod1'); 
};