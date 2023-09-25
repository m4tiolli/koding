DROP DATABASE if EXISTS koding;
CREATE DATABASE koding;
USE koding;

CREATE TABLE responsavel(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    cpf VARCHAR(255),
    telefone VARCHAR(255),
    email VARCHAR(255),
    senha VARCHAR(255)
);
 
CREATE TABLE crianca(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    username VARCHAR(255),
    email VARCHAR(255),
    senha VARCHAR(255), 
    responsavel INT NOT NULL,
    FOREIGN KEY (responsavel) REFERENCES responsavel (id)
);

CREATE TABLE pontuacoes(
	crianca INT NOT NULL,
	pontuacao INT, 
	FOREIGN KEY (crianca) REFERENCES crianca (id)
);

CREATE TABLE linguagens(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255)
);

CREATE TABLE tags(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255)
);

CREATE TABLE aulas(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255),
	descricao VARCHAR(255),
	conteudo LONGTEXT,
	imagem LONGTEXT 
);

CREATE TABLE LinguagensCrianca(
	crianca INT, 
	linguagens INT,
	FOREIGN KEY (crianca) REFERENCES crianca (id),
	FOREIGN KEY (linguagens) REFERENCES linguagens (id)
);

CREATE TABLE TagsAula(
	tag INT,
	aula INT,
	FOREIGN KEY (tag) REFERENCES tags (id),
	FOREIGN KEY (aula) REFERENCES aulas (id)
);

CREATE TABLE jogos(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	nome VARCHAR(255),
	linguagem INT,
	FOREIGN KEY (linguagem) REFERENCES linguagens (id)
);

CREATE TABLE JogosCrianca(
	crianca INT, 
	jogo INT, 
	situacao BOOL,
	FOREIGN KEY (crianca) REFERENCES crianca (id),
	FOREIGN KEY (jogo) REFERENCES jogos (id)
);

INSERT INTO responsavel VALUES (DEFAULT, 'ju', '13142413', '7236294', 'ju@gmail.com', '321');

INSERT INTO crianca VALUES (DEFAULT, 'matias', 'marcao', 'koding@gmail.com', '123', 1);

INSERT INTO pontuacoes VALUES (1, 100);

INSERT INTO linguagens VALUES (DEFAULT, 'HTML');

INSERT INTO tags VALUES (DEFAULT, 'HTML');

INSERT INTO aulas VALUES (DEFAULT, 'Aula 00', 'Aula referente a HTML e suas tags', 'longlonglonglonglonglongloblob', 'html.png');

INSERT INTO LinguagensCrianca VALUES (1, 1);

INSERT INTO TagsAula VALUES (1, 1);

SELECT crianca.username, crianca.responsavel, pontuacoes.pontuacao AS Pontuação
FROM crianca INNER JOIN pontuacoes ON pontuacoes.crianca = crianca.id;

SELECT responsavel.nome, crianca.username, pontuacoes.pontuacao
FROM responsavel 
INNER JOIN crianca ON crianca.responsavel = responsavel.id
INNER JOIN pontuacoes ON pontuacoes.crianca = crianca.id; 