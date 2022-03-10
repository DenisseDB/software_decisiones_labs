// middelware
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser'); // Usamos cookies
const session = require('express-session');
const rutas_color = require('./routes/mod1.routes.js');
const rutas_users = require('./routes/user.routes.js');
// enviar archivos html por express
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// agregar css y js al servidor
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(session({
    secret: 'cefrgyjhgredvbhytredghtr',  //mi string secreto que debe ser un string aleatorio muy largo, no como éste'
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

app.use('/mod1', rutas_color);
app.use('/user', rutas_users);


app.use((request, response, next) => {
    response.redirect('/mod1');   // funcion que recibe la vista 
    
});


app.use((request, response,next) => {
    response.statusCode = 404;
    response.end();
});

app.listen(3000);