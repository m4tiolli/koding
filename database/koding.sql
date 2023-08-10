DROP DATABASE if EXISTS koding;
CREATE DATABASE koding;
USE koding;

CREATE TABLE responsavel(
	id INT not null AUTO_INCREMENT primary key,
	nome VARCHAR(255),
	cpf VARCHAR(255),
	telefone VARCHAR(255),
	email VARCHAR(255),
	senha VARCHAR(255)
);

CREATE TABLE crianca(
	id INT not null AUTO_INCREMENT primary key,
	nome VARCHAR(255),
	apelido VARCHAR(255),
	email VARCHAR(255),
	senha VARCHAR(255)
);

