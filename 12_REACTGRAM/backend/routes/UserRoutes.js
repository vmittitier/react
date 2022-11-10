// invoca o framework de criacao de uma api
const express = require("express");

// invoca um router como instancia desse express
const router = express.Router();

// Controller
const {register, login} = require("../controllers/UserController");

// Middlewares
const validate = require("../middlewares/handleValidation")
const {userCreateValidation,
    loginValidation} = require("../middlewares/userValidations")

// Routes
router.post("/register", userCreateValidation(), validate, register);
router.post("/login", loginValidation(), validate, login);


module.exports = router;