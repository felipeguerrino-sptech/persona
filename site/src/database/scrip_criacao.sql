CREATE DATABASE persona;
USE persona;
CREATE TABLE Persona(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30),
    imagem TEXT
);

CREATE TABLE Usuario(
	id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    senha VARCHAR(50),
    email VARCHAR(50) UNIQUE,
    fkPersona INT,
    FOREIGN KEY (fkPersona) REFERENCES Persona(id)
);

CREATE TABLE Ranking(
	id INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT UNIQUE,
    pontuacao INT,
    FOREIGN KEY (fkUsuario) REFERENCES Usuario(id)
);