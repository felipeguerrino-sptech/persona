var database = require("../database/config");

function listar() {
  var instrucao = `
        SELECT * FROM Persona;
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function personasFavoritos() {
  var instrucao = `
  SELECT p.nome,  (SELECT COUNT(DISTINCT fkPersona) FROM Usuario AS u JOIN Persona ON fkPersona = p.id) AS personasFavoritos FROM Persona AS p ORDER BY personasFavoritos DESC LIMIT 5;
`;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

module.exports = {
  listar,
  personasFavoritos
};
