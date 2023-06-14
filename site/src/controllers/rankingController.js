var rankingModel = require("../models/rankingModel");

function listar(req, res) {
  rankingModel
    .listar()
    .then((resultado) => {
      res.status(200).json(resultado);
    })
    .catch();
}

function cadastrar(req, res) {
  let fkUsuario = req.body.fkUsuario;
  let pontuacao = req.body.pontuacao;
  rankingModel
    .cadastrar(fkUsuario, pontuacao)
    .then((resultado) => {
      res.status(200).json(resultado);
    })
    .catch();
}

function atualizar(req, res) {
  let fkUsuario = req.params.fkUsuario;
  let pontuacao = req.body.pontuacao;
  rankingModel
    .atualizar(fkUsuario, pontuacao)
    .then((resultado) => {
      res.status(200).json(resultado);
    })
    .catch();
}

module.exports = {
  listar,
  cadastrar,
  atualizar,
};
