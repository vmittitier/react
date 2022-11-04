require("dotenv").config() 


//  framework backend
const express = require("express");

// nodeJs pra utilizar e deifnir onde vai ser o diretorio das imagens
const path = require("path");

// utiliza para acessar o projeto da propria aplicacaso frontend
const cors = require("cors");

// recurso a ser pego pelo dotenv
// const port = 5000; substitui pelo .env criado pra alterar o prod env
const port = process.env.PORT

// inicializa a aplicacao invocando o framework
const app = express();

// config JSON and form data response, que recebera texto do json e imagem pelo form data

// inicializa para aceitar json
app.use(express.json())

// inicializa para aceitar imagens pelo form data
app.use(express.urlencoded({extended: false}))

// solve cors (middleware) quando executa requisicao pelo mesmo dominio
// depende onde vai ficar o projeto frontend
app.use(cors({credentials: true, origin: "http://localhost:3000"}))

// diretorio do upload (middleware) 
// use em uploads que eh a pasta
// diz que a pasta contem arquivos estaticos
// pathjoin junta o dirname+upload
app.use("/uploads", express.static(path.join(__dirname,"/uploads")));

// DB connection
require("./config/db.js")

// rotas invocadas
const router = require("./routes/Router.js")
app.use(router)

// inicializa a aplicacao
app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})
