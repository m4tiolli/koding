DROP DATABASE if EXISTS koding;
CREATE DATABASE koding;
USE koding;

CREATE TABLE responsavel (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255),
	cpf VARCHAR(255),
	telefone VARCHAR(255),
	email VARCHAR(255),
	senha VARCHAR(255)
	);