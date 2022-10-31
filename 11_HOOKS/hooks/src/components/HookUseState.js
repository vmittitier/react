import React from 'react'
import { useState } from 'react'

const HookUseState = () => {
    
    // 1 - useState
    let userName = "Joao";
    const [name, setName] = useState("Matheus")

    const changeNames = () => {
        userName = "joao souza"
        setName("Vini Mittitier")
    }

    // 2 - usestate e input
    const [age, setAge] = useState(18)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        // envio a uma API
        console.log(age)
    }
    
  return (
    <div>
        {/* 1 - useState */}
        <h2>useState:</h2>
        <p>Variavel: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={changeNames}>Mudar nome com hook!</button>
        <hr />
        {/* 2 - useState e input */}
        <p>Digite sua idade:</p>
        <form onSubmit={handleSubmit}>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        <input type="submit" value="Enviar" />
        </form>
        <p>Sua idade e: {age}</p>
    </div>
  )
}

export default HookUseState