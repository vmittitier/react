// invoca o framework de criacao de uma api
const express = require("express")

// invoca um router como instancia desse express
const router = express()

// para nao baguncar o arquivo principal e isolar, deixa as rotas definidas aqui
// no app.js soh invoca as rotas

// test router
router.get("/", (req,res) =>{
    res.send("API Working!")
})

module.exports = router
