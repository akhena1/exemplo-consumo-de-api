var express = require('express');
var router = express.Router();
var locationsController = require("../controllers/locationsController")

router.get('/', locationsController.listagemDeLocais);

module.exports = router;
