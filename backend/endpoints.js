const mysql = require("mysql");
const LocalStorage = require("node-localstorage").LocalStorage;
localStorage = new LocalStorage("./index");
module.exports = function (app) {
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

  app.post("/responsavel", (req, res) => {
    const { nome, cpf, telefone, email, senha } = req.body;
    db.query(
      "INSERT INTO responsavel (nome, cpf, telefone, email, senha) VALUES (?, ?, ?, ?, ?)",
      [nome, cpf, telefone, email, senha],
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

  app.put("/responsavel/:id", (req, res) => {
    const { nome, senha } = req.body;
    const userId = req.params.id;

    db.query(
      "UPDATE responsavel SET nome = ?, senha = ? WHERE id = ?",
      [nome, senha, userId],
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

  function saveId(id) {
    localStorage.setItem("idResponsavel", id);
  }

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
          const user = { id: result[0].id, email: result[0].email };
          // const token = generateToken(user);
          req.session.responsavelId = result[0].id;
          saveId(req.session.responsavelId);
          console.log("ID do responsável:", req.session.responsavelId);
          res.json({
            message: "Login realizado com sucesso!",
            // token: token,
            user: result[0],
          });
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

  app.post("/crianca", async (req, res) => {
    const responsavelId = localStorage.idResponsavel;
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
    const { nome, senha } = req.body;
    const userId = req.params.id;

    db.query(
      "UPDATE crianca SET nome = ?, senha = ? WHERE id = ?",
      [nome, senha, userId],
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
          const user = { id: result[0].id, email: result[0].email };
          // const token = generateToken(user);
          res.json({
            message: "Login realizado com sucesso!",
            // token: token,
            user: result[0],
          });
        }
      }
    );
  });

  // Logout
  app.get("/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error("Erro ao fazer logout", err);
        res.status(500).json({ error: "Erro ao fazer logout" });
      } else {
        localStorage.removeItem("JWT");
        localStorage.removeItem("idResponsavel");
        res.json({ message: "Logout realizado com sucesso" });
      }
    });
  });

  // Sistema pontuações - criança
  app.post("/crianca/pontuacao", (req, res) => {
    const { crianca, pontuacao } = req.body;
    db.query(
      "INSERT INTO pontuacoes (crianca, pontuacao) VALUES (?, ?)",
      [crianca, pontuacao],
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
    const crianca = localStorage.idCrianca;
    // const crianca = req.params.crianca;
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
    const responsavelId = localStorage.idResponsavel;
    // const responsavelId = req.params.responsavel;
    db.query(
      "SELECT crianca.username, pontuacoes.pontuacao AS Pontuacao " +
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

  //capitulos
  app.get("/capitulos", (req, res) => {
    const { linguagem } = req.body;
    db.query(
      "SELECT * FROM capitulos WHERE linguagem = ?"[linguagem],
      (err, result) => {
        if (err) {
          console.error("Erro ao obter as linguagens", err);
          res.status(500).json({ error: "Erro ao obter as linguagens" });
        } else {
          res.json(result);
        }
      }
    );
  });
};
