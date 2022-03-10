const express = require('express');
const path = require('path');
const router = express.Router();
const filesystem = require('fs');
const mod1Controller = require("../controllers/mod1_controller")


router.get('/', mod1Controller.listar)

//router.get("/colorFavorito", capybarasContoller.cerveza

router.get("/colorFavorito", mod1Controller.get_colorFavorito);

router.post('/colorFavorito', mod1Controller.post_colorFavorito);

module.exports = router;