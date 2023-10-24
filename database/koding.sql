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
    imagem LONGTEXT,
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

CREATE TABLE feedbacks(
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    responsavel INT,
    conteudo LONGTEXT,
	FOREIGN KEY (responsavel) REFERENCES responsavel (id)
);

INSERT INTO responsavel VALUES 
(DEFAULT, 'ju', '13142413', '7236294', 'ju@gmail.com', '321'),
(DEFAULT, 'matiolli', '13142413', '7236294', 'matias@gmail.com', '321'),
(DEFAULT, 'marcos', '13142413', '7236294', 'marcos@gmail.com', '321');

INSERT INTO crianca VALUES 
(DEFAULT, 'matiolli junior', 'matiasjr', 'matiasjr@gmail.com', '123', 1, default),
(DEFAULT, 'marcos', 'marcos', 'marcos@gmail.com', '123', 2, default),
(DEFAULT, 'matiolli', 'matiolli', 'marcos1@gmail.com', '123', 2, default),
(DEFAULT, 'ju', 'ju', 'ju@gmail.com', '123', 3, default);

INSERT INTO pontuacoes VALUES (DEFAULT, 1, 100, '2023-10-07');
INSERT INTO pontuacoes VALUES (DEFAULT, 2, 200, '2023-10-08');
INSERT INTO pontuacoes VALUES (DEFAULT, 3, 300, '2023-10-09');

INSERT INTO linguagens VALUES
(DEFAULT, 'HTML'),
(DEFAULT, 'CSS'),
(DEFAULT, 'JavaScript'),
(DEFAULT, 'PHP');

INSERT INTO tags VALUES 
(DEFAULT, 'HTML'),
(DEFAULT, 'CSS'),
(DEFAULT, 'JavaScript'),
(DEFAULT, 'PHP'),
(DEFAULT, 'Estrutura'),
(DEFAULT, 'Flexbox'),
(DEFAULT, 'Input'),
(DEFAULT, 'Quiz'),
(DEFAULT, 'Sentença'),
(DEFAULT, 'Introdução');

INSERT INTO capitulos VALUES 
(DEFAULT, 'HTML - Introdução', 1),
(DEFAULT, 'HTML - Técnicas Avançadas', 1),
(DEFAULT, 'HTML - Projeto Prático', 1),
(DEFAULT, 'HTML - Design Responsivo', 1),
(DEFAULT, 'CSS - Introdução', 2),
(DEFAULT, 'CSS - Animações e Transições', 2),
(DEFAULT, 'CSS - Frameworks de Estilo', 2),
(DEFAULT, 'CSS - Layouts Flexíveis', 2),
(DEFAULT, 'JavaScript - Introdução', 3),
(DEFAULT, 'JavaScript - Programação Assíncrona', 3),
(DEFAULT, 'JavaScript - Frameworks Front-end', 3),
(DEFAULT, 'JavaScript - Testes e Depuração', 3),
(DEFAULT, 'PHP - Introdução', 4),
(DEFAULT, 'PHP - Programação Orientada a Objetos', 4),
(DEFAULT, 'PHP - Banco de Dados com MySQL', 4),
(DEFAULT, 'PHP - Frameworks PHP', 4);

INSERT INTO aulas VALUES 
(DEFAULT, 'Aula 00 - Fundamentos do HTML', 'Nesta aula, você irá aprender os conceitos básicos do HTML', 
'O que é HTML
Estrutura de um documento HTML
Tags HTML básicas
Estrutura de um elemento HTML
Cabeçalho HTML
Corpo HTML
Visualização de uma página HTML em um navegador', 
'html.png', 1),
(DEFAULT, 'Aula 01 - Tags HTML e Estrutura Básica', 'Nesta aula daremos continuiddade sobre as tags HTML, sua sintaxe e como criar uma estrutura básica de página da web.', 
'Tags de título e parágrafo
Listas não ordenadas e ordenadas
Links e âncoras
Imagens
Comentários HTML
Estrutura básica de uma página HTML
Prática: Criar uma página HTML simples', 
'html.png', 1),
(DEFAULT, 'Aula 02 - Formatação de Texto e Elementos Avançados', 'Iremos aprofundar mais nos recursos de formatação de texto do HTML e introduzir alguns elementos HTML mais avançados.', 
'Formatação de texto (negrito, itálico, sublinhado)
Cabeçalhos e subtítulos
Tabelas
Formulários básicos
Elementos de multimídia (áudio e vídeo)
Estruturação de uma página com divisões (divs e spans)
Prática: Criar uma página mais avançada usando os conceitos aprendidos', 
'html.png', 1),
(DEFAULT, 'Aula 00 - Semântico', 'Nesta aula abordaremos o conceito de HTML semântico e como ele pode melhorar a estrutura e acessibilidade de uma página da web.', 
'Introdução ao HTML semântico
Elementos semânticos, como <header>, <nav>, <article>, <section>, etc.
Benefícios de usar HTML semântico
Exemplos práticos de como aplicar elementos semânticos em uma página', 
'html.png', 2),
(DEFAULT, 'Aula 01 - Formulários Avançados', 'Nesta aula iremos aprofundar nos formulários HTML e explorar técnicas avançadas, como validação de entrada e personalização de campos.', 
'Formulários HTML e seus elementos
Validação de formulários usando HTML5
Personalização de campos de formulário
Uso de elementos <input> avançados, como <input type="date>, <input type=color>, etc.
Prática: Criar um formulário avançado com validação', 
'html.png', 2),
(DEFAULT, 'Aula 02 - HTML e Multimídia', 'Nesta aula você irá aprender como incorporar conteúdo multimídia, como áudio e vídeo, em uma página da web, bem como a otimização de imagens e técnicas de responsividade. ', 
'Incorporando áudio e vídeo em páginas da web
Otimização de imagens para carregamento mais rápido
Técnicas de responsividade para diferentes dispositivos
Uso de atributos srcset e sizes para imagens responsivas
Prática: Criar uma página que contenha elementos de áudio, vídeo e imagens otimizadas', 
'html.png', 2),
(DEFAULT, 'Aula 00 - Escolha do Projeto e Planejamento', 'Nesta aula iremos te orientar na escolha de um projeto prático em HTML e no planejamento inicial.', 
'Apresentação de ideias de projetos práticos em HTML
Discussão e seleção de um projeto para trabalhar
Planejamento inicial do projeto, incluindo estrutura e conteúdo
Criação de um esboço ou wireframe do projeto
Definição de metas e objetivos do projeto', 
'html.png', 3),
(DEFAULT, 'Aula 01 - Desenvolvimento e Implementação', 'Nesta aula você começará a desenvolver o projeto prático em HTML.', 
'Criação da estrutura de páginas do projeto
Inserção de conteúdo, imagens e elementos multimídia
Uso de CSS para estilizar o projeto
Implementação de interatividade, se aplicável
Testes e depuração', 
'html.png', 3),
(DEFAULT, 'Aula 02 - Aprimoramento e Publicação', 'Você irá aprimorar o projeto e aprenderá a publicá-lo na web', 'evisão e refinamento do projeto
Otimização de desempenho
Preparação para dispositivos móveis (responsividade)
Registro de um domínio (se aplicável) e configuração de hospedagem
Publicação do projeto na web
Compartilhamento e apresentação dos projetos entre os alunos', 
'html.png', 3),
(DEFAULT, 'Aula 00 - Introdução ao Design Responsivo', 'Nesta aula inicial será introduzido o conceito de design responsivo e irá aprender por que é importante.', 
'O que é design responsivo e por que é relevante
Diferenças entre design fixo e design responsivo
Viewports e metatags para dispositivos móveis
Media queries e breakpoints
Prática: Adaptação de um site simples para design responsivo', 
'html.png', 4),
(DEFAULT, 'Aula 01 - Layouts Flexíveis e Grids', 'Iremos aprofundar em layouts flexíveis e grades para criar designs responsivos.', 
'Layouts flexíveis com CSS (usando unidades flexíveis e porcentagens)
Introdução ao CSS Grid para layouts responsivos
Estilização de layouts de várias colunas
Exemplos de layouts responsivos com grids
Prática: Criar um layout responsivo usando grids e flexbox', 
'html.png', 4),
(DEFAULT, 'Aula 02 - Imagens Responsivas e Testes em Diferentes Dispositivos', 'Você irá aprender como lidar com imagens em design responsivo e como testar o design em vários dispositivos.', 
'Imagens responsivas com atributo srcset
Imagens SVG para escalabilidade
Testes em dispositivos móveis e em desktop
Ferramentas de desenvolvedor para design responsivo
Prática: Otimização de imagens e teste em diferentes dispositivos', 
'html.png', 4),
(DEFAULT, 'Aula 00 Fundamentos do CSS', 'Nesta aula, você irá aprender os conceitos básicos do CSS, incluindo a sintaxe e sua importância na estilização de páginas da web.', 
'O que é CSS e sua função
Sintaxe básica do CSS
Seletores e propriedades CSS
Aplicação de estilos a elementos HTML
Exemplos práticos de formatação de texto e cores
Visualização de resultados em um navegador', 
'html.png', 5),
(DEFAULT, 'Aula 01 -  Estilização de Layout com CSS', ' Nesta aula, você irá explorar a estilização de layouts usando CSS, incluindo posicionamento, margens e preenchimentos.', 
'Posicionamento de elementos com CSS (static, relative, absolute, fixed)
Margens e preenchimentos (margins, paddings)
Box model e sua importância no design de layout
Controle de tamanhos de elementos
Exemplos práticos de criação de layouts simples com CSS', 
'html.png', 5),
(DEFAULT, 'Aula 02 -  Estilização Avançada com CSS', 'Nesta aula avançada, você aprenderá técnicas de estilização avançadas com CSS, como estilos para texto, links e animações.', 
'Estilização de texto (fonte, tamanho, espaçamento)
Estilização de links (links, links visitados, links ativos)
Animações CSS básicas (transições e animações)
Transformações (rotação, escala, inclinação)
Prática: Criação de um botão estilizado e animado', 
'html.png', 5),
(DEFAULT, 'Aula 00 - Conceitos Básicos de Animações em CSS', 'Nesta aula, você irá aprender os conceitos básicos das animações em CSS e como elas podem ser aplicadas a elementos HTML.', 
'Introdução às animações em CSS
Propriedades CSS para animações (animation, keyframes)
Criando animações simples
Temporização e controle de animações
Exemplos práticos de animações de elementos', 
'html.png', 6),
(DEFAULT, 'Aula 01 - Transições em CSS para Efeitos de Hover', 'Nesta aula, você irá explorar como usar transições em CSS para criar efeitos de hover e interatividade em elementos HTML.', 
'Introdução às transições em CSS
Propriedades CSS para transições (transition, transform)
Criando efeitos de hover com transições
Personalização de efeitos de transição
Exemplos práticos de botões e elementos interativos', 
'html.png', 6),
(DEFAULT, 'Aula 02 - Animações Avançadas em CSS', 'Nesta aula avançada, você irá aprender a criar animações mais complexas e dinâmicas em CSS, incluindo animações de caminhos e animações baseadas em eventos.', 
'Animações de caminhos (motion paths)
Animações baseadas em eventos (hover, clique)
Controle avançado de animações (delay, direção, contagem, etc.)
Prática: Criando uma animação interativa avançada', 
'html.png', 6),
(DEFAULT, 'Aula 00 - Introdução a Frameworks de Estilo em CSS', 'Nesta aula, você irá aprender o que são os Frameworks de Estilo em CSS e por que eles são úteis na criação de páginas da web.', 
'O que é um Framework de Estilo
Vantagens de usar Frameworks de Estilo
Introdução a Frameworks populares (por exemplo, Bootstrap, Foundation)
Como incluir e usar um Framework em um projeto
Exemplos práticos de uso de componentes de Framework', 
'html.png', 7),
(DEFAULT, 'Aula 01 - Personalização de Frameworks de Estilo', 'Nesta aula, você aprenderá como personalizar Frameworks de Estilo para se adequar ao design específico de um projeto.', 
'Como personalizar cores, tipografia e estilos do Framework
Substituição de componentes padrão do Framework por designs personalizados
Criação de temas personalizados
Integração de Frameworks personalizados em projetos
Exemplos práticos de personalização de Frameworks', 
'html.png', 7),
(DEFAULT, 'Aula 02 - Desenvolvimento de Projetos com Frameworks de Estilo', 'Nesta aula, você aplicará o conhecimento sobre Frameworks de Estilo em um projeto prático e aprenderá a criar layouts e elementos com eficiência.', 
'Estrutura de projetos usando Frameworks de Estilo
Criação de um layout responsivo com o Framework
Uso de componentes e estilização de elementos
Práticas recomendadas no desenvolvimento com Frameworks
Exercício prático: Construção de um site simples usando um Framework de Estilo', 
'html.png', 7),
(DEFAULT, 'Aula 00 - Introdução a Layouts Flexíveis em CSS', 'Nesta aula, você irá aprender os conceitos básicos de layouts flexíveis em CSS e como eles podem ser usados para criar designs responsivos.', 
'O que são layouts flexíveis e por que são importantes
Propriedades CSS para criar layouts flexíveis (display, flexbox)
Estrutura básica de um layout flexível
Alinhamento e distribuição de elementos em um layout flexível
Exemplos práticos de criação de layouts flexíveis', 
'html.png', 8),
(DEFAULT, 'Aula 01 - Layouts de Grade em CSS', 'Nesta aula, você irá explorar como criar layouts de grade em CSS usando a propriedade grid, uma técnica poderosa para criar designs flexíveis e alinhados.', 
'Introdução aos layouts de grade em CSS
Propriedades CSS para criar layouts de grade (display: grid)
Criação de grades e colunas
Posicionamento de elementos dentro de uma grade
Exemplos práticos de layouts de grade responsivos', 
'html.png', 8),
(DEFAULT, 'Aula 02 - Layouts Flexíveis Avançados e Combinação de Técnicas', 'Nesta aula avançada, você irá aprofundar-se em layouts flexíveis e aprenderá a combinar técnicas para criar designs complexos e responsivos.', 
'Aninhamento de layouts flexíveis
Criação de layouts responsivos complexos
Combinação de flexbox e layouts de grade
Uso de media queries para layouts adaptativos
Prática: Criar um layout avançado e responsivo', 
'html.png', 8),
(DEFAULT, 'Aula 00 -  Fundamentos do JavaScript', 'Nesta aula, você irá aprender os conceitos básicos do JavaScript e sua importância na criação de páginas web interativas.', 'O que é JavaScript e por que é usado
Sintaxe básica do JavaScript
Variáveis, tipos de dados e operadores
Estruturas de controle de fluxo (condicionais e loops)
Exemplos práticos de código JavaScript simples', 
'html.png', 9),
(DEFAULT, 'Aula 01 - Manipulação do Documento com JavaScript', 'Nesta aula, você irá explorar como o JavaScript pode ser usado para interagir com o DOM (Document Object Model) e fazer alterações dinâmicas nas páginas web.', 
'Introdução ao DOM e sua estrutura
Seleção de elementos HTML com JavaScript
Manipulação de conteúdo, estilos e atributos
Eventos JavaScript para interatividade
Exemplos práticos de manipulação do DOM', 
'html.png', 9),
(DEFAULT, 'Aula 02 -  Introdução a Funções e Eventos', 'Nesta aula, você irá aprender sobre funções em JavaScript e como lidar com eventos para criar interatividade em páginas web.', 
'O conceito de funções em JavaScript
Declaração de funções e passagem de parâmetros
Uso de funções para reutilização de código
Introdução aos eventos e tratamento de eventos em JavaScript
Prática: Criar funções e lidar com eventos em um projeto simples', 
'html.png', 9),
(DEFAULT, 'Aula 00 - Introdução à Programação Assíncrona em JavaScript', 'Nesta aula, você irá aprender os conceitos básicos da programação assíncrona em JavaScript e por que ela é importante para criar aplicativos web dinâmicos.', 
'O que é programação assíncrona
Callbacks e funções assíncronas
Uso de setTimeout para atrasos
Manipulação de eventos
Exemplos práticos de código assíncrono', 
'html.png', 10),
(DEFAULT, 'Aula 01 - Promises em JavaScript', 'Nesta aula, você irá aprofundar-se nas Promises em JavaScript, uma maneira mais avançada de lidar com a programação assíncrona e resolver problemas de callback hell.', 
'O que são Promises e como funcionam
Criação e resolução de Promises
Encadeamento de Promises
Tratamento de erros com Promises
Exemplos práticos de uso de Promises', 
'html.png', 10),
(DEFAULT, 'Aula 02 - Async/Await e Fetch API', 'Nesta aula avançada, você irá explorar o uso de async/await e a Fetch API para simplificar a programação assíncrona e realizar solicitações a servidores web.', 
'Introdução ao async/await como alternativa às Promises
Utilização da Fetch API para fazer solicitações HTTP
Manipulação de dados JSON retornados de um servidor
Tratamento de erros em solicitações assíncronas
Prática: Criar uma aplicação que faz solicitações assíncronas e exibe os resultados', 
'html.png', 10),
(DEFAULT, 'Aula 00 - Introdução a Frameworks Front-end em JavaScript', 'Nesta aula, você irá aprender o que são Frameworks Front-end em JavaScript e por que eles são amplamente utilizados no desenvolvimento web.', 
'O que é um Framework Front-end
Vantagens de usar Frameworks Front-end
Introdução aos Frameworks populares (por exemplo, React, Angular, Vue.js)
Como iniciar um projeto com um Framework
Exemplos práticos de componentes e estrutura básica', 
'html.png', 11),
(DEFAULT, 'Aula 01- Componentes e Roteamento em Frameworks Front-end', 'Nesta aula, você irá explorar a criação de componentes reutilizáveis e o roteamento de páginas em Frameworks Front-end.', 
'Criação e uso de componentes em um Framework
Organização de componentes em uma aplicação
Introdução ao roteamento e navegação entre páginas
Exemplos práticos de criação de componentes e configuração de rotas', 
'html.png', 11),
(DEFAULT, 'Aula 02 - Comunicação com APIs e Estado da Aplicação', 'Nesta aula avançada, você irá aprender a se comunicar com APIs externas e gerenciar o estado da aplicação em Frameworks Front-end.', 
'Uso de chamadas de API para obter dados externos
Gerenciamento de estado da aplicação
Fluxo de dados unidirecional (one-way data flow)
Atualização de componentes com base em mudanças de estado
Prática: Criar uma aplicação que se conecta a uma API e gerencia o estado da aplicação', 
'html.png', 11),
(DEFAULT, 'Aula 00 - Introdução a Testes e Depuração em JavaScript', 'Nesta aula, você irá aprender a importância dos testes e técnicas de depuração em JavaScript para garantir a qualidade do código.', 
'Por que testar e depurar o código JavaScript
Tipos de testes (testes unitários, testes de integração, testes de aceitação)
Ferramentas de depuração no navegador
Instruções para adicionar pontos de interrupção (breakpoints)
Exemplos práticos de depuração', 
'html.png', 12),
(DEFAULT, 'Aula 01 - Testes Unitários e Frameworks de Testes em JavaScript', 'Nesta aula, você irá explorar testes unitários em JavaScript e aprender a usar frameworks de testes populares.', 
'Introdução aos testes unitários
Uso de frameworks de testes, como Mocha, Jasmine ou Jest
Estrutura de testes e asserções (assertions)
Execução de testes unitários em funções e componentes
Exemplos práticos de testes unitários', 
'html.png', 12),
(DEFAULT, 'Aula 02 - Depuração Avançada e Boas Práticas de Testes', 'Nesta aula avançada, você irá aprofundar-se na depuração de problemas complexos e aprender boas práticas de testes em JavaScript.', 
'Depuração de erros assíncronos e complexos
Uso de ferramentas de terceiros para testes (por exemplo, Selenium para testes de interface)
Estratégias para evitar problemas comuns de código
Cobertura de código e relatórios de testes
Prática: Depurar e testar um projeto real', 
'html.png', 12),
(DEFAULT, 'Aula 00 - Introdução ao PHP', 'Nesta aula, você irá aprender os conceitos básicos do PHP e sua importância no desenvolvimento web.', 
'O que é PHP e sua história
Configuração do ambiente de desenvolvimento
Sintaxe básica do PHP
Exemplos práticos de scripts PHP', 
'html.png', 13),
(DEFAULT, 'Aula 01 - Estruturas de Controle em PHP', 'Nesta aula, você irá explorar as estruturas de controle em PHP, como condicionais e loops, para criar lógica em seus scripts.', 
'Condicionais (if, else, switch)
Loops (for, while, foreach)
Controle de fluxo
Exemplos práticos de uso de estruturas de controle', 
'html.png', 13),
(DEFAULT, 'Aula 02 - Interação com Formulários em PHP', 'Nesta aula, você irá aprender como interagir com formulários HTML usando PHP para processar dados do usuário.', 
'Recebendo dados de formulários
Validação de entrada de usuário
Tratamento de envio de dados
Exemplos práticos de processamento de formulários', 
'html.png', 13),
(DEFAULT, 'Aula 00 - Introdução à Programação Orientada a Objetos em PHP', 'Nesta aula, você irá aprender os princípios da programação orientada a objetos (POO) e como aplicá-los em PHP.', 
'Conceitos de POO
Classes e objetos em PHP
Encapsulamento e herança
Exemplos práticos de POO em PHP', 
'html.png', 14),
(DEFAULT, 'Aula 01 - Herança e Polimorfismo em PHP', 'Nesta aula, você irá aprofundar-se em conceitos avançados de POO, como herança e polimorfismo, e como aplicá-los em PHP.', 
'Herança e classes abstratas
Polimorfismo em PHP
Interfaces
Exemplos práticos de herança e polimorfismo', 
'html.png', 14),
(DEFAULT, 'Aula 02 - Trabalhando com Abstração e Design de Classes em PHP', 'Nesta aula avançada, você aprenderá a criar classes abstratas e a aplicar princípios de design de classes em POO em PHP.', 
'Criação de classes abstratas e métodos abstratos
Princípios SOLID (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion)
Exemplo prático: Aplicando princípios de design de classes para criar um sistema de gestão de produtos', 
'html.png', 14),
(DEFAULT, 'Aula 00 - Introdução ao PHP e MySQL', 'Nesta aula introdutória, você aprenderá como usar o PHP para se conectar a um banco de dados MySQL e realizar operações básicas.', 
'Configuração da conexão com o banco de dados
Realização de consultas SQL básicas com o PHP
Recuperação e exibição de dados do banco de dados
Exemplo prático: Criando uma página para exibir dados de um banco de dados MySQL com PHP.', 
'html.png', 15),
(DEFAULT, 'Aula 01 -  Inserção, Atualização e Exclusão de Dados no MySQL com PHP', 'Nesta aula, você explorará como inserir, atualizar e excluir dados em um banco de dados MySQL usando o PHP.', 
'Inserção de dados em tabelas MySQL com PHP
Atualização de registros existentes
Exclusão de registros
Medidas de segurança e prevenção contra injeção de SQL
Exemplo prático: Desenvolvendo um formulário para inserção e atualização de dados no banco de dados.', 
'html.png', 15),
(DEFAULT, 'Aula 02 - Interagindo com Bancos de Dados Avançados em PHP e MySQL', 'Nesta aula avançada, você aprenderá a realizar operações avançadas com bancos de dados, como transações e consultas parametrizadas.', 
'Uso de transações para operações em lote
Consultas parametrizadas para prevenir injeção de SQL
Gerenciamento de erros e exceções em operações de banco de dados
Exemplo prático: Criando um sistema de carrinho de compras que utiliza transações e consultas parametrizadas.', 
'html.png', 15),
(DEFAULT, 'Aula 00 - Introdução a Frameworks PHP', 'Nesta aula, você será introduzido aos frameworks PHP e suas vantagens no desenvolvimento web.', 
'O que são frameworks PHP e por que usá-los
Visão geral de frameworks populares (por exemplo, Laravel, Symfony)
Instalação e configuração de um framework PHP
Exemplo prático: Criando uma aplicação web simples com um framework PHP', 
'html.png', 16),
(DEFAULT, 'Aula 01 - Desenvolvimento de Aplicações com Frameworks PHP', 'Nesta aula, você aprenderá a desenvolver uma aplicação web completa usando um framework PHP.', 
'Roteamento de URLs e controle de rotas em um framework
Criação de controladores e visualizações
Integração de um banco de dados com um framework
Exemplo prático: Desenvolvimento de um blog com um framework PHP', 
'html.png', 16),
(DEFAULT, 'Aula 02 - Segurança e Melhores Práticas com Frameworks PHP', 'Nesta aula avançada, você explorará as melhores práticas de segurança e desenvolvimento com frameworks PHP.', 
'Prevenção de vulnerabilidades comuns, como CSRF e XSS
Autenticação e autorização em uma aplicação com framework
Testes e depuração em um ambiente de framework
Prática: Reforçando a segurança e aprimorando uma aplicação de comércio eletrônico com um framework PHP', 
'html.png', 16);

INSERT INTO TagsAula VALUES 
(1, 1),
(1, 2),
(2, 3),
(2, 4),
(3, 5),
(3, 6),
(4, 7),
(4, 8);

INSERT INTO feedbacks VALUES
(DEFAULT, 1, 'Matiolli metidinho, mas é bonzinho e gosta do sistema'),
(DEFAULT, 2, 'Marcos tá gostando e é bom'),
(DEFAULT, 3, 'Julinha bem ruim, mas gosta e se diverte com o sistema');

SELECT crianca.username, crianca.responsavel, pontuacoes.pontuacao AS Pontuação
FROM crianca INNER JOIN pontuacoes ON pontuacoes.crianca = crianca.id;

SELECT responsavel.nome, crianca.username, pontuacoes.pontuacao, pontuacoes.data
FROM responsavel 
INNER JOIN crianca ON crianca.responsavel = responsavel.id
INNER JOIN pontuacoes ON pontuacoes.crianca = crianca.id; 

SELECT 
    crianca.id AS IdCrianca, 
    crianca.nome AS NomeCrianca, 
    crianca.username, 
    crianca.email AS EmailCrianca, 
    crianca.senha AS SenhaCrianca, 
    responsavel.id AS IdResponsavel, 
    responsavel.nome AS NomeResponsavel, 
    responsavel.cpf, 
    responsavel.telefone, 
    responsavel.email AS EmailResponsavel, 
    responsavel.senha AS SenhaResponsavel,
    (
        SELECT SUM(pontuacao) 
        FROM pontuacoes 
        WHERE pontuacoes.crianca = crianca.id
    ) AS SomaPontuacao
FROM crianca
INNER JOIN responsavel ON responsavel.id = crianca.responsavel;