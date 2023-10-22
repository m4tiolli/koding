const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "imagens/"); //destination folder
  },
  filename: function (req, file, cb) {
    const date = new Date();
    const nome = date.getDate() + "-" + file.originalname;
    cb(null, nome); //filename
  },
});

const upload = multer({ storage });

module.exports = function (app) {
  app.use(cors());

  const db = mysql.createPool({
    host: "koding.mysql.database.azure.com",
    user: "tccbarto",
    password: "Koding2023",
    database: "koding",
  });

  app.get("/responsavel", (req, res) => {
    db.query("SELECT * FROM responsavel", (err, result) => {
      if (err) {
        console.error("Erro ao buscar usuários", err);
        res.status(500).json({ error: "Erro ao buscar usuários" });
      } else {
        res.json(result);
      }
    });
  });

  app.post("/responsavel", upload.single("imagem"), (req, res) => {
    const { nome, cpf, telefone, email, senha } = req.body;
    const imagem = req.file.filename; // O nome do arquivo de imagem enviado

    db.query(
      "INSERT INTO responsavel (nome, cpf, telefone, email, senha, imagem) VALUES (?, ?, ?, ?, ?, ?)",
      [nome, cpf, telefone, email, senha, "imagens/" + imagem],
      (err, result) => {
        if (err) {
          console.error("Erro ao cadastrar usuário", err);
          res.status(500).json({ error: "Erro ao cadastrar usuário" });
        } else {
          res.json({
            message: "Usuário cadastrado com sucesso",
            id: result.insertId,
          });
        }
      }
    );
  });

  app.put("/responsavel/:id", upload.single("imagem"), (req, res) => {
    const { nome, cpf, telefone, email, senha } = req.body;
    const imagem = req.file.filename; // O nome do arquivo de imagem enviado
    const userId = req.params.id;

    db.query(
      "UPDATE responsavel SET nome = ?, cpf = ?, telefone = ?, email = ?, senha = ?, imagem = ? WHERE id = ?",
      [nome, cpf, telefone, email, senha, imagem, userId],
      (err, result) => {
        if (err) {
          console.error("Erro ao alterar usuário", err);
          res.status(500).json({ error: "Erro ao alterar usuário" });
        } else {
          res.json({ message: "Usuário alterado com sucesso" });
        }
      }
    );
  });

  app.delete("/responsavel/:id", (req, res) => {
    const userId = req.params.id;

    db.query(
      "DELETE FROM responsavel WHERE id = ?",
      [userId],
      (err, result) => {
        if (err) {
          console.error("Erro ao deletar usuário", err);
          res.status(500).json({ error: "Erro ao deletar usuário" });
        } else {
          res.json({ message: "Usuário deletado com sucesso" });
        }
      }
    );
  });

  app.put("/responsavel/esqueciSenha/:id", (req, res) => {
    const { senha } = req.body;
    const userId = req.params.id;

    db.query(
      "UPDATE responsavel SET senha = ? WHERE id = ?",
      [senha, userId],
      (err, result) => {
        if (err) {
          console.error("Erro ao alterar senha da criança", err);
          res.status(500).json({ error: "Erro ao alterar senha da criança" });
        } else {
          res.json({ message: "Senha da criança alterada com sucesso" });
        }
      }
    );
  });

  // Login - responsável
  app.post("/responsavel/login", (req, res) => {
    const { email, senha } = req.body;
    db.query(
      "SELECT * FROM responsavel WHERE email = ? AND senha = ?",
      [email, senha],
      (err, result) => {
        if (err) {
          console.error("Erro ao fazer login", err);
          res.status(500).json({ error: "Erro ao fazer login" });
        } else if (result.length === 0) {
          res.status(401).json({ error: "Credenciais inválidas" });
        } else {
          res.json(result[0]);
        }
      }
    );
  });

  // CRUD - criança
  app.get("/crianca", (req, res) => {
    db.query("SELECT * FROM crianca", (err, result) => {
      if (err) {
        console.error("Erro ao buscar usuários", err);
        res.status(500).json({ error: "Erro ao buscar usuários" });
      } else {
        res.json(result);
      }
    });
  });

  app.get("/criancaR/:responsavel", (req, res) => {
    const responsavelId = req.params.responsavel;
    db.query(
      "SELECT crianca.id AS IdCrianca, crianca.nome AS NomeCrianca, crianca.username, " +
      "crianca.email AS EmailCrianca, crianca.senha AS SenhaCrianca, responsavel.id AS IdResponsavel, " +
      "responsavel.nome AS NomeResponsavel, responsavel.cpf, responsavel.telefone, responsavel.email AS EmailResponsavel, responsavel.senha AS SenhaResponsavel, " +
      "SUM(pontuacoes.pontuacao) AS SomaPontuacao " +
      "FROM crianca " +
      "INNER JOIN responsavel ON responsavel.id = crianca.responsavel " +
      "INNER JOIN pontuacoes ON pontuacoes.crianca = crianca.id " +
      "WHERE crianca.responsavel = ? " +
      "GROUP BY crianca.id",
      [responsavelId],
      (err, result) => {
        if (err) {
          console.error("Erro ao buscar criança(as)", err);
          res.status(500).json({ error: "Erro ao buscar criança(as)" });
        } else {
          res.json(result);
        }
      }
    );
  });

  app.post("/crianca", async (req, res) => {
    // const responsavelId = localStorage.idResponsavel;
    const responsavelId = req.session.responsavelId;
    const { nome, username, email, senha } = req.body;
    if (!responsavelId) {
      return res.status(401).json({
        error: "ID do responsável não encontrado",
      });
    }
    db.query(
      "INSERT INTO crianca (nome, username, email, senha, responsavel) VALUES (?, ?, ?, ?, ?)",
      [nome, username, email, senha, responsavelId],
      (err, result) => {
        if (err) {
          console.error("Erro ao cadastrar usuário", err);
          res.status(500).json({ error: "Erro ao cadastrar usuário" });
        } else {
          res.json({
            message: "Usuário cadastrado com sucesso",
            id: result.insertId,
          });
        }
      }
    );
  });

  app.put("/crianca/:id", (req, res) => {
    const { username, email, senha } = req.body;
    const userId = req.params.id;

    db.query(
      "UPDATE crianca SET username = ?, email = ?, senha = ? WHERE id = ?",
      [username, email, senha, userId],
      (err, result) => {
        if (err) {
          console.error("Erro ao alterar usuário", err);
          res.status(500).json({ error: "Erro ao alterar usuário" });
        } else {
          res.json({ message: "Usuário alterado com sucesso" });
        }
      }
    );
  });

  app.delete("/crianca/:id", (req, res) => {
    const userId = req.params.id;

    db.query("DELETE FROM crianca WHERE id = ?", [userId], (err, result) => {
      if (err) {
        console.error("Erro ao deletar usuário", err);
        res.status(500).json({ error: "Erro ao deletar usuário" });
      } else {
        res.json({ message: "Usuário deletado com sucesso" });
      }
    });
  });

  app.put("/crianca/esqueciSenha/:id", (req, res) => {
    const { senha } = req.body;
    const userId = req.params.id;

    db.query(
      "UPDATE crianca SET senha = ? WHERE id = ?",
      [senha, userId],
      (err, result) => {
        if (err) {
          console.error("Erro ao alterar senha da criança", err);
          res.status(500).json({ error: "Erro ao alterar senha da criança" });
        } else {
          res.json({ message: "Senha da criança alterada com sucesso" });
        }
      }
    );
  });

  //verifica email existente
  app.get("/email/:email", (req, res) => {
    const { email } = req.params;

    db.query(
      "SELECT COUNT(*) AS count FROM responsavel WHERE email = ?",
      [email],
      (err, results) => {
        if (err) {
          console.error("Error querying database:", err);
          res.status(500).json({ error: "Erro no servidor" });
        } else {
          const exists = results[0].count > 0;
          res.json({ exists });
        }
      }
    );
  });

  // Login - criança
  app.post("/crianca/login", (req, res) => {
    const { email, senha } = req.body;
    db.query(
      "SELECT * FROM crianca WHERE email = ? AND senha = ?",
      [email, senha],
      (err, result) => {
        if (err) {
          console.error("Erro ao fazer login", err);
          res.status(500).json({ error: "Erro ao fazer login" });
        } else if (result.length === 0) {
          res.status(401).json({ error: "Credenciais inválidas" });
        } else {
          res.json(result[0]);
        }
      }
    );
  });

  // LogoutcriancaId
  app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error("Erro ao fazer logout", err);
        res.status(500).json({ error: "Erro ao fazer logout" });
      } else {
        // localStorage.removeItem("JWT");
        // localStorage.removeItem("idResponsavel");
        // localStorage.removeItem("idCrianca");
        res.json({ message: "Logout realizado com sucesso" });
      }
    });
  });

  // Sistema pontuações - criança
  app.post("/crianca/pontuacao", (req, res) => {
    const { crianca, pontuacao } = req.body;
    const data = new Date();

    db.query(
      "INSERT INTO pontuacoes (crianca, pontuacao, data) VALUES (?, ?, ?)",
      [crianca, pontuacao, data],
      (err, result) => {
        if (err) {
          console.error("Erro ao registrar a pontuação", err);
          res.status(500).json({ error: "Erro ao registrar a pontuação" });
        } else {
          res.json({ message: "Pontuação registrada com sucesso" });
        }
      }
    );
  });

  app.get("/crianca/pontuacao/:crianca", (req, res) => {
    // const crianca = localStorage.idCrianca;
    const crianca = req.params.crianca;
    db.query(
      "SELECT * FROM pontuacoes WHERE crianca = ?",
      [crianca],
      (err, result) => {
        if (err) {
          console.error("Erro ao obter a pontuação", err);
          res.status(500).json({ error: "Erro ao obter a pontuação" });
        } else {
          res.json(result);
        }
      }
    );
  });

  app.get("/responsavel/:responsavel/pontuacoes", (req, res) => {
    // const responsavelId = localStorage.idResponsavel;
    const responsavelId = req.params.responsavel;
    db.query(
      "SELECT crianca.username, pontuacoes.pontuacao, pontuacoes.data " +
        "FROM crianca " +
        "INNER JOIN pontuacoes ON pontuacoes.crianca = crianca.id " +
        "WHERE crianca.responsavel = ?",
      [responsavelId],
      (err, result) => {
        if (err) {
          console.error("Erro ao obter as pontuações das crianças", err);
          res
            .status(500)
            .json({ error: "Erro ao obter as pontuações das crianças" });
        } else {
          res.json(result);
        }
      }
    );
  });

  //linguagens
  app.get("/linguagens", (req, res) => {
    db.query("SELECT * FROM linguagens", (err, result) => {
      if (err) {
        console.error("Erro ao obter as linguagens", err);
        res.status(500).json({ error: "Erro ao obter as linguagens" });
      } else {
        res.json(result);
      }
    });
  });

  app.get("/crianca/:crianca/linguagensAprendidas", (req, res) => {
    // const criancaId = localStorage.idCrianca;
    const criancaId = req.params.crianca;

    db.query(
      "SELECT COUNT(*) AS quantidadeLinguagens " +
        "FROM LinguagensCrianca " +
        "WHERE crianca = ?",
      [criancaId],
      (err, result) => {
        if (err) {
          console.error(
            "Erro ao obter o número de linguagens aprendidas pela criança",
            err
          );
          res
            .status(500)
            .json({ error: "Erro ao obter o número de linguagens aprendidas" });
        } else {
          res.json(result);
        }
      }
    );
  });

  //capitulos e aulas
  app.get("/capitulos", (req, res) => {
    db.query("SELECT * FROM capitulos", (err, result) => {
      if (err) {
        console.error("Erro ao buscar capítulos", err);
        res.status(500).json({ error: "Erro ao buscar capítulos" });
      } else {
        res.json(result);
      }
    });
  });

  app.get("/capitulos/:id", (req, res) => {
    const linguagem = req.params.id;
    db.query(
      "SELECT * FROM capitulos WHERE linguagem = ?",
      [linguagem],
      (err, result) => {
        if (err) {
          console.error("Erro ao obter os capítulos", err);
          res.status(500).json({ error: "Erro ao obter os capítulos" });
        } else {
          res.json(result);
        }
      }
    );
  });

  app.get("/aulas/:id", (req, res) => {
    const capitulo = req.params.id;
    db.query(
      "SELECT * FROM aulas WHERE capitulo = ?",
      [capitulo],
      (err, result) => {
        if (err) {
          console.error("Erro ao obter as aulas", err);
          res.status(500).json({ error: "Erro ao obter as aulas" });
        } else {
          res.json(result);
        }
      }
    );
  });
};
