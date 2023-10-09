DROP DATABASE if EXISTS koding;
CREATE DATABASE koding;
USE koding;

CREATE TABLE IF NOT EXISTS responsavel(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    cpf VARCHAR(255),
    telefone VARCHAR(255),
    email VARCHAR(255),
    senha VARCHAR(255)
);
 
CREATE TABLE IF NOT EXISTS crianca(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    username VARCHAR(255),
    email VARCHAR(255),
    senha VARCHAR(255), 
    responsavel INT NOT NULL,
    FOREIGN KEY (responsavel) REFERENCES responsavel (id)
);

CREATE TABLE IF NOT EXISTS pontuacoes(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	crianca INT NOT NULL,
	pontuacao INT, 
    data DATE,
	FOREIGN KEY (crianca) REFERENCES crianca (id)
);

CREATE TABLE IF NOT EXISTS linguagens(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS capitulos(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    linguagem INT,
    FOREIGN KEY (linguagem) REFERENCES linguagens(id)
);

CREATE TABLE IF NOT EXISTS tags(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS aulas(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255),
	descricao VARCHAR(255),
	conteudo LONGTEXT,
	imagem LONGTEXT,
   capitulo INT,
   FOREIGN KEY (capitulo) REFERENCES capitulos(id)
);

CREATE TABLE IF NOT EXISTS LinguagensCrianca(
	crianca INT, 
	linguagens INT,
	FOREIGN KEY (crianca) REFERENCES crianca(id),
	FOREIGN KEY (linguagens) REFERENCES linguagens(id)
);

CREATE TABLE IF NOT EXISTS TagsAula(
	tag INT,
	aula INT,
	FOREIGN KEY (tag) REFERENCES tags (id),
	FOREIGN KEY (aula) REFERENCES aulas (id)
);

CREATE TABLE IF NOT EXISTS jogos(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255),
	linguagem INT,
	FOREIGN KEY (linguagem) REFERENCES linguagens (id)
);

CREATE TABLE IF NOT EXISTS JogosCrianca(
	crianca INT, 
	jogo INT, 
	situacao BOOL,
	FOREIGN KEY (crianca) REFERENCES crianca (id),
	FOREIGN KEY (jogo) REFERENCES jogos (id)
);

INSERT INTO responsavel VALUES (DEFAULT, 'ju', '13142413', '7236294', 'ju@gmail.com', '321');

INSERT INTO crianca VALUES (DEFAULT, 'matias', 'marcao', 'koding@gmail.com', '123', 1);

INSERT INTO pontuacoes VALUES (DEFAULT, 1, 100, '2023-10-08');

INSERT INTO linguagens VALUES (DEFAULT, 'HTML');

INSERT INTO tags VALUES (DEFAULT, 'HTML');

INSERT INTO capitulos VALUES (DEFAULT, 'Introdução ao HTML', 1);

INSERT INTO aulas VALUES (DEFAULT, 'Aula 00', 'Aula referente a HTML e suas tags', 'longlonglonglonglonglongloblob', 'html.png', 1);

INSERT INTO TagsAula VALUES (1, 1);

SELECT crianca.username, crianca.responsavel, pontuacoes.pontuacao AS Pontuação
FROM crianca INNER JOIN pontuacoes ON pontuacoes.crianca = crianca.id;

SELECT responsavel.nome, crianca.username, pontuacoes.pontuacao, pontuacoes.data
FROM responsavel 
INNER JOIN crianca ON crianca.responsavel = responsavel.id
INNER JOIN pontuacoes ON pontuacoes.crianca = crianca.id; 
