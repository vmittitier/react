const User = require("../models/User")

const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")

const jwtSecret = process.env.JWT_SECRET;

// Generate user token
const generateToken = (id) => {
    return jwt.sign({id},jwtSecret, {
        expiresIn: "7d"
    })
}

// Register user and sign in
const register = async(req,res) => {
    
    // pega esses campos que chegam do request
    const {name, email, password } = req.body

    // check if user exits (mongoose method)
    const user = await User.findOne({email})

    if(user){
        res.status(422).json({errors: ["Por favor, utilize outro email"]})
        return
    }

    // agora que sabemos que ele nao existe pq ja foi validado, geramos um hash pass
    // teste123 -> se torna iex: 2732873#2h8h#*@H (bcrypt)

    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)

    // Create user (metodo mongoose)
    const newUser = await User.create({
        name,
        email,
        password: passwordHash
    })

    // If user was created sucessfully, return the token

    if(!newUser){
        res.status(422).json({errors: ["Houve um erro, por favor tente mais tarde."]})
    }
    res.status(201).json({
        _id: newUser._id,
        token: generateToken(newUser._id)
    })
}

// Sign user in
const login = async (req, res) => {
    
    const {email, password} = req.body

    const user = await User.findOne({email})

    // check if user exists
    if(!user){
        res.status(404).json({errors: ["Usuario nao encontrado."]})
        return
    }

    // check if password matches
    if(!(await bcrypt.compare(password, user.password))){
        res.status(422).json({errors: ["Senha invalida"]})
        return
    }

    // return user with token
    res.status(201).json({
        _id: user._id,
        profileImage: user.profileImage,
        token: generateToken(user._id)
    })

}

module.exports = {
    register,
    login,
}