const express = require("express");
const app = express();
const cors = require("cors");
const session = require("express-session");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");
// const jwt = require("jsonwebtoken");

const port = process.env.PORT || 3000;

app.use(cors({
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
}));
app.use(express.json());

app.use(
  session({
    secret: "koding",
    resave: false,
    saveUninitialized: true,
  })
);

app.use('/', swaggerUi.serve);
app.get('/', swaggerUi.setup(swaggerFile));

require("./endpoints")(app);

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}!`);
});
