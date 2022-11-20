// importa o mongoose
const mongoose = require("mongoose");

// conecta no banco no mongoDB atlas

// pegamos o user e o pass do .env, pq la no meio de producao sera outro user e outro pass
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

//funcao assincrona com try catch q vai conseguir ou nao conectar no banco
// nova variavel dbConn utiliza o metodo do mongoose com a string de conexao do MongoDbAtlas 

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://${dbUser}:${dbPassword}@reactgramdb.us09lan.mongodb.net/?retryWrites=true&w=majority`
        )
            console.log("Conectou ao bando de dados!")
            return dbConn
    } catch (error) {
        console.log(error)
    }
}

conn()
module.exports = conn;