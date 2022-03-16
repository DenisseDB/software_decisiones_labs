// extensiones a utilizar
const express = require('express');
const router = express.Router();
//const isAuth = require('../util/is-auth.js');

// llamamos al controller que es donde se "leen" las funciones
const animalesController = require('../controllers/animales_controller');

// ejecucciones
router.get('/', animalesController.listar)
router.get('/nuevoAnimal', animalesController.get_nuevo);
router.post('/nuevoAnimal', animalesController.post_nuevo);

module.exports = router;