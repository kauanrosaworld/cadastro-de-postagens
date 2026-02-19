const express = require("express");
const app = express();
require("dotenv").config();

const db = require('./models/db.js')
const Post = require('./models/Post.js')

const { engine } = require("express-handlebars");


//Config handlebars
app.engine("handlebars", engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

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

db.sequelize.authenticate()
.then(()=>{
  console.log('Conectado ao MySQL!');
})
.catch((err)=>{ 
  console.log('Erro na conexão:',err)
});

db.sequelize.sync()
  .then(()=>{
    console.log('Tabelas Criadas!');
  })


app.listen(8000, function () {
  console.log("Servidor rodando");
});
