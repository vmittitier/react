// invoca o framework de criacao de uma api
const express = require("express")

// invoca um router como instancia desse express
const router = express()

router.use("/api/users", require("./UserRoutes"))

// para nao baguncar o arquivo principal e isolar, deixa as rotas definidas aqui
// no app.js soh invoca as rotas

router.use("/api/photos", require("./PhotoRoutes"));

module.exports = router;

