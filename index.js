const express = require("express");
const app = express();
const { engine } = require("express-handlebars");
require("dotenv").config();

//Config handlebars
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Conexão com o banco de dados Mysql
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
);

// Rotas
app.get("/cadastros", function (req, res) {
  res.render("formulario");
});

// Rota com middleware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/addform", function (req, res) {
  console.log(req.body);
  res.send("Formulário recebido!");
});

app.listen(8000, function () {
  console.log("Servidor rodando");
});
