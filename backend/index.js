const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
// const jwt = require("jsonwebtoken");

// const jwtSecret = "KodingTOP";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "koding",
});

const port = 3005;

app.use(cors());
app.use(express.json());

// function generateToken(user) {
//   return jwt.sign(user, jwtSecret, { expiresIn: "1m" });
// }

// CRUD - responsável
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
        // const user = { id: result[0].id, email: result[0].email };
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
        // const user = { id: result[0].id, email: result[0].email };
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

app.get("/", (req, res) => {
  res.json({
    status: "Servidor executando!",
  });
});

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}!`);
});


