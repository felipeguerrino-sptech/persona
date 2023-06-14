var database = require("../database/config")

function listar() {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        SELECT *, u.nome FROM Ranking AS r
        JOIN Usuario AS u ON u.id = fkUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(fkUsuario, pontuacao) {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO Ranking (fkUsuario, pontuacao) VALUES (${fkUsuario}, ${pontuacao});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function atualizar(fkUsuario, pontuacao) {
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        UPDATE Ranking SET pontuacao = ${pontuacao} WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listar, 
    cadastrar,
    atualizar
};