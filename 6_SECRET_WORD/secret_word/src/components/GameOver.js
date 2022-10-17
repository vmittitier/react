import React from 'react'
import './GameOver.css'

// componente recebe a funcao por pros e aplica no botao
//entre chaves pq eh uma funcao javascript e nao um parametro regular
const GameOver = ({ retry, score }) => {

  return (
    <div>
        <h1>Fim de jogo!</h1>
        <h2>A sua pontuacao foi: <span>{score}</span>
        </h2>
        <button onClick={retry}>Reseta Jogo</button>
    </div>
  )
}

export default GameOver