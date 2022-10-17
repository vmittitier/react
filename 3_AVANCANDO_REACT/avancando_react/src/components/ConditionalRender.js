import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false);

    const[name, setName] = useState("Joaos")

  return (
    <div>
        <h1>Isso sera exibido?</h1>
        {/* valindando um x se eh falso ou nao*/}
        {x && <p>Se x for true, sim!</p> }
        
        {!x && <p>Agora x eh falso</p> }       
        
        {/* if ternario */}
        {name === "Joao" ? (
            <div>
                <p>O nome eh joao</p>
            </div>            
        ) : (
            
            <div>
                <p>O nome nao foi encontrado.</p>
            </div>
        )}
        <button onClick={() => setName("Joao")}>Clica muda nome</button> 
    </div>
  )
}

export default ConditionalRender