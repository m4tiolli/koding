const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "koding",
});

app.use(cors());
app.use(express.json());

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

  db.query("DELETE FROM responsavel WHERE id = ?", [userId], (err, result) => {
    if (err) {
      console.error("Erro ao deletar usuário", err);
      res.status(500).json({ error: "Erro ao deletar usuário" });
    } else {
      res.json({ message: "Usuário deletado com sucesso" });
    }
  });
});
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

app.post("/crianca", (req, res) => {
  const { nome, username, email, senha } = req.body;
  db.query(
    "INSERT INTO crianca (nome, username, email, senha) VALUES (?, ?, ?, ?)",
    [nome, username, email, senha],
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

app.listen(3005, () => {
  console.log("rodando servidor");
});
