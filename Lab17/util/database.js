// CONFIGURAR CONEXION A LA BASE DE DATOS

// no necesitamos mantener la base de datos abierta
// cada que hago una consulta, abro la base de datos, termina la consulta y se cierra la base de datos
// un solo servidor de base de datos con x cantidad de instancias 

const mysql = require('mysql2');

const pool = mysql.createPool({ // pool de conexiones con la base de datos 
    host: 'localhost',
    user: 'root',
    // checar estos datos 
    database: 'Prueba',
    password: ' '
});

module.exports = pool.promise(); // de pool de conexiones exportamos una promesa s