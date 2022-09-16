const express = require("express");
const bodyParser = require("body-parser"); // Necessário para interpretar o corpo das requisições HTTP
const cors = require("cors");
const AuthenticationRoutes = require("./src/routes/AuthenticationRoutes") 
const UserRoutes = require("./src/routes/UserRoutes") 
const app = express();

//Configuração dos middlewares
app.use(cors());
app.use(bodyParser.json()); // Converterá qualquer corpo em JSON em um objeto javascript

app.use(UserRoutes);
app.use(AuthenticationRoutes);

//Exporta o aplicativo express configurado
module.exports = app;