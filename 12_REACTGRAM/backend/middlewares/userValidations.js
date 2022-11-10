// biblioteca express-validator atinge os campos de erro
// extrai o request body com o express validator, que traz todo o corpo do request sendo enviada pro back
const {body} = require ("express-validator")

const userCreateValidation = () => {
    return [
        // Validador Campo Name, Email, Pass, Confirm Pass
        body("name")
        .isString()
        .withMessage("O nome eh obrigatorio.")
        .isLength({min:3})
        .withMessage("O nome precisa ter no minimo 3 caracteres"),
        body("email")
        .isString()
        .withMessage("O email eh obrigatorio")
        .isEmail()
        .withMessage("Insida um email valido."),
        body("password")
        .isString()
        .withMessage("A senha eh obrigatoria.")
        .isLength({min:5})
        .withMessage("A senha precisa ter no minimo 5 caracteres"),
        body("confirmpassword")
        .isString()
        .withMessage("A confirmacao da senha eh obrigatoria.")
        // recebe valor atual do input de confirmacao
        // compara com o valor do password do body da request
        .custom((value, {req}) => {
            if(value != req.body.password){
                throw new Error("As senhas nao sao iguais.")
            }
            return true;
        })
    ]
}

const loginValidation = () => {
    return [
        body("email")
            .isString()
            .withMessage("O email eh obrigatorio.")
            .isEmail()
            .withMessage("Insira um email valido."),
        body("password")
            .isString()
            .withMessage("A senha eh obrigatoria.")
    ]
}

module.exports = {
    userCreateValidation, 
    loginValidation,
}