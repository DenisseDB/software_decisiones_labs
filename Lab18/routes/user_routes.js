const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth.js'); // proteger las rutas

const userController = require('../controllers/user_controller');

// los que tienen isauth son rutas protegidas, no se puede ingresar a ellas sin hacer el login
router.get('/login', userController.get_login);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/signup', isAuth, userController.get_signup);
router.post('/signup', userController.post_signup);
router.get('/', userController.root);

module.exports = router;