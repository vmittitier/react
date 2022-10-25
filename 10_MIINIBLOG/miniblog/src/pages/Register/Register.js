import styles from "./Register.module.css"

import { useState, useEffect } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"

const Register = () => {
    // Iniciando os States como vazios para o form 
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const {createUser, error: authError, loading} = useAuthentication();

    // Reunir todos os dados e enviar no formulario pelo submit para substituir o value dos elementos
    const handleSubmit = async (e) => {
        // Para nao enviar o formulario antes
        e.preventDefault()

        // Quando enviar o form, zera os erros
        setError("")

        // Forma o user baseado na estrutura dos states dos inputs
        const user = {
            displayName,
            email,
            password
        }

        // Validacao
        if(password !== confirmPassword){
            setError("As senhas precisam ser iguais!")
            return
        }

        const res = await createUser(user)
        console.log(res);

    }

    useEffect(() => {

        if(authError){
            setError(authError)
        }
    }, [authError])

  return (
    <div className={styles.register}>
        <h1>Cadastre para postar!</h1>
        <p>Crie sua conta e compartilhe suas fotos!</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input 
                type="text"
                name="displayName" 
                required placeholder="Nome do usuario"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}/>
            </label>
            <label>
                <span>Email:</span>
                <input 
                type="email"
                name="email" 
                required placeholder="E-mail do usuario"
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
            </label>
            <label>
                <span>Nova Senha:</span>
                <input 
                type="password"
                name="password" 
                required placeholder="Insira uma senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <label>
                <span>Confirme sua senha:</span>
                <input 
                type="password"
                name="confirmPassword" 
                required placeholder="Confirme sua senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>
            {!loading && <button className="btn">Cadastrar</button>}
            {loading && <button className="btn" disabled>Aguarde...</button>}
            {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Register