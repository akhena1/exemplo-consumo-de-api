var express = require('express');
var router = express.Router();
var charactersController = require("../controllers/charactersController")

router.get('/', charactersController.listarPersonagens);
router.get('/:id', charactersController.buscarPersonagem)

module.exports = router;
