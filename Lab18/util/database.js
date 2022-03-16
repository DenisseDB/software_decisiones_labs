const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'DenisseDB',
    database: 'animales', // el nombre de la data base
    password: ''
});

module.exports = pool.promise();