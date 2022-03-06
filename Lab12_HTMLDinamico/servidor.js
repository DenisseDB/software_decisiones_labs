const express = require('express');
const bodyParser = require('body-parser');
const rutas_comidaColores = require('./routes/mod1.routes.js');
const rutas_animalesPeliculas = require('./routes/mod2.routes');
// enviar archivos html por express
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// agregar css y js al servidor
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use('/mod1', rutas_comidaColores);
app.use('/mod2', rutas_animalesPeliculas);

app.use((request, response,next) => {
    response.statusCode = 404;
    response.write('<title>Page | Not found</title>');
    response.write('<h1 id="principal">ERROR 404</h1>');
    response.end();
});

app.listen(3000);