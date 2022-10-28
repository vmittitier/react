import styles from "./Login.module.css"

import { useState, useEffect } from "react"
import { useAuthentication } from "../../hooks/useAuthentication"

const Login = () => {
   // Iniciando os States como vazios para o form 
   const [email, setEmail] = useState("")
   const [password, setPassword] = useState("")
   const [error, setError] = useState("")

   const {login, error: authError, loading} = useAuthentication();

   // Reunir todos os dados e enviar no formulario pelo submit para substituir o value dos elementos
   const handleSubmit = async (e) => {
       // Para nao enviar o formulario antes
       e.preventDefault()

       // Quando enviar o form, zera os erros
       setError("")

       // Forma o user baseado na estrutura dos states dos inputs
       const user = {
           email,
           password
       }

       const res = await login(user)
       console.log(res);

   }

   useEffect(() => {

       if(authError){
           setError(authError)
       }
   }, [authError])
  
  return (
    <div className={styles.login}> 
        <h1>Efetue o Login!</h1>
        <p>Entre para utilizar o sistema!</p>
        <form onSubmit={handleSubmit}>           
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
            {!loading && <button className="btn">Entrar</button>}
            {loading && <button className="btn" disabled>Aguarde...</button>}
            {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}

export default Login