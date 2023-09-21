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

INSERT INTO responsavel VALUES (DEFAULT, 'ju', '13142413', '7236294', '29efu@gmail.com', '321');

INSERT INTO crianca VALUES (DEFAULT, 'matias', 'marcao', 'koding@gmail.com', '123', 1);