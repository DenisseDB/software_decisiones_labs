// filesystem
const filesystem = require('fs');

// express
const express  = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// Ruta a mod1    
const mod1Router = require('./routes/mod1');
app.use('/mod1', mod1Router); 

// Ruta a mod2    
const mod2Router = require('./routes/mod2');
app.use('/mod2', mod2Router); 

app.get('/', (request, response) => {
    response.write('<!DOCTYPE html><html lang="es-mx"><head><title>Ricardos Favorites</title><meta charset="utf-8"></meta></head>');
    response.write('<body>');
    response.write('<main>');
    response.write("<h1>Mis cosas Favoritas</h1>");
    response.write('<h1 id="inicio">Aqui encontraras mis cosas favoritas, comida, colores, animales y peliculas</h1><br>');
    response.write('<a href="/mod1"><button type="button">Lista de colores y comida favoritos </button></a>');
    response.write('<br><br>');
    response.write('<a href="/mod2"><button type="button">Lista de peliculas y animales favoritos </button></a>');
    response.write('</main>');
    response.write('</body>');
    response.end();
});

app.use((request, response,next) => {
    response.statusCode = 404;
    response.write('<title>Page | Not found</title>');
    response.write('<h1 id="principal">ERROR 404</h1>');
    response.end();
});


app.listen(3000);