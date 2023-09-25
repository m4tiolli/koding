const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session"); 
const LocalStorage = require("node-localstorage").LocalStorage
localStorage = new LocalStorage('./index')
const jwt = require("jsonwebtoken");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "koding",
});

const port = 3005;

app.use(cors());
app.use(express.json());

app.use(
  session({
    secret: "koding",
    resave: false,
    saveUninitialized: true,
  })
);

// JWT

const jwtSecret = "KodingTOP";

function generateToken(user) {
  const jwtUser = jwt.sign(user, jwtSecret, { expiresIn: "1d" });
  console.log(jwtUser);
  localStorage.setItem('JWT', jwtUser);
  return jwtUser;
}

function verifyToken(req, res, next) {
  const token = localStorage.getItem('JWT');
  if (!token) {
    return res.status(401).json({ error: "Token não fornecido" });
  }
  jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        localStorage.removeItem('JWT');
        return res.redirect('/login'); 
      }
      return res.status(403).json({ error: "Token inválido" });
    }
    req.decoded = decoded;
    next();
  });
}

// app.get("/rota-protegida", verifyToken, (req, res) => {
//   res.json({ message: "Acesso permitido" });
// });

// CRUD - responsável
app.get("/responsavel", verifyToken, (req, res) => {
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

function saveId(id) {
  localStorage.setItem('idResponsavel', id);
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
        const token = generateToken(user);
        req.session.responsavelId = result[0].id;
        saveId(req.session.responsavelId)
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
app.get("/crianca", verifyToken, (req, res) => {
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
      error: "ID do responsável não encontrado"
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
        const token = generateToken(user);
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