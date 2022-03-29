// primero definimos las extensiones a utilizar
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');
const app = express();
// csrf ayuda a evitar ataques, hackers
// por medio de tokens, donde manda uno y espera que el mismo sea regresado
// para acceder
const csrf = require('csurf');
const csrfProtection = csrf();

// pasamos a las rutas 
const rutas_animales = require('./routes/animales_routes.js');
const rutas_users = require('./routes/user_routes');


app.set('view engine', 'ejs');
app.set('views', 'views');

// agregar css y js al servidor
app.use(express.static(path.join(__dirname, 'public')));

// cookies
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(session({
    secret: 'oiuhghklkjhghjnbghjnbghjnbvghjbvghjy', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

// proteccion 
app.use(csrfProtection); 

app.use((request, response, next) => {
    response.locals.csrfToken = request.csrfToken();
    next();
});

// usar las rutas
app.use('/animales', rutas_animales);
app.use('/users', rutas_users);


// pasar a la pagina principal
app.use((request, response, next) => {
    response.redirect('/users');
    next();
});

app.use((request, response,next) => {
    response.statusCode = 404;
    response.end();
});


app.listen(3000);