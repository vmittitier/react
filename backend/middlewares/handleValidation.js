// validate all registration errors
const { validationResult } = require("express-validator")

const validate = (req, res, next) => {
    // toda requisicao que tiver o middleware de validacao,ira retornar os possiveis erros na request
    const errors = validationResult(req)
    if(errors.isEmpty()){
        // Se nao encontrar erro, prossegue com next
        return next()
    }

    // se tiver erros extraidos da requisicao
    const extractedErrors = []
    // transforma em array, faz um map
    // chama cada erro de ERR
    // e coloca a msg de erro em cada ERR
    errors.array().map((err) => extractedErrors.push(err.msg))
    
    return res.status(422).json({
        errors: extractedErrors
    })
}

module.exports = validate