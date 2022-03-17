// extensiones a utilizar
const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth.js'); // para proteger las rutas y que no puedan acceder sin hacer el login

// llamamos al controller que es donde se "leen" las funciones
const animalesController = require('../controllers/animales_controller');

// ejecucciones
// los que tienen isAUTH son rutas protegidas
router.get('/', isAuth, animalesController.listar)
router.get('/nuevoAnimal', isAuth, animalesController.get_nuevo);
router.post('/nuevoAnimal', animalesController.post_nuevo);

module.exports = router;