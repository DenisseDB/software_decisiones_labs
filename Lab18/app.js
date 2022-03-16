// primero definimos las extensiones a utilizar
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// pasamos a las rutas 
const rutas_animales = require('./routes/animales_routes.js');
const rutas_users = require('./routes/user_routes');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// agregar css y js al servidor
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'oiuhghklkjhghjnbghjnbghjnbvghjbvghjy', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

//app.use(csrfProtection); 

/*
app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});
*/

app.use('/animales', rutas_animales);
app.use('/users', rutas_users);

app.use((request, response, next) => {
    response.redirect('/users'); // funcion que recibe la vista    
    next() 
});

app.use((request, response,next) => {
    response.statusCode = 404;
    response.end();
});


app.listen(3000);