var personaModel = require("../models/personaModel");

function listar(req, res) {

 
    personaModel
      .listar()
      .then((resultado) => {
         res.status(200).json(resultado)
      })
      .catch();
}

function personasFavoritos(req, res) {
  personaModel.personasFavoritos().then(resultado => {
    res.status(200).json(resultado)
  })
  .catch()
}

module.exports = {
  listar,
  personasFavoritos
};
