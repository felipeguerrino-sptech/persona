var express = require("express");
var router = express.Router();

var rankingController = require("../controllers/rankingController");

router.get("/listar", function (req, res) {
    rankingController.listar(req, res);
})

router.post("/cadastrar", function (req, res) {
    rankingController.cadastrar(req, res)
})

router.post("/atualizar/:fkUsuario", function (req, res) {
    rankingController.atualizar(req, res)
})

module.exports = router;