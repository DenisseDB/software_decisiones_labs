const express = require('express');
const path = require('path');
const router = express.Router();
const filesystem = require('fs');
const mod2Controller = require("../controllers/mod2_controller");



router.get('/', mod2Controller.listar)

router.get("/agregarAnimal", mod2Controller.get_agregarAnimal);

router.post('/agregarAnimal', mod2Controller.post_agregarAnimal);

router.get("/peliculaFavorita", mod2Controller.get_peliculaFavorita);

router.post('/peliculaFavorita', mod2Controller.post_peliculaFavorita);

module.exports = router;
