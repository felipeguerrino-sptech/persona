var express = require("express");
var router = express.Router();

var personaController = require("../controllers/personaController");

router.get("/listar", function (req, res) {
    personaController.listar(req, res);
})

router.get("/favoritos", function (req, res) {
    personaController.personasFavoritos(req, res);
})

module.exports = router;