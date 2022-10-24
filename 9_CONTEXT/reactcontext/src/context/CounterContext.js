// criar context
import { createContext, useState } from "react";

export const CounterContext = createContext();

// criar provider 
// children serve pra poder encapsular elementos e continuar imprimindo
// conteudo deles dentro de um outro componentes
export const CounterContextProvider = ({ children }) => {
    // aqui vai ser compartilhado entre os componentes
    const [counter, setCounter] = useState(5);

    return(
        <CounterContext.Provider value={{counter, setCounter}}>
            {children}
        </CounterContext.Provider>
    )

}

export default CounterContext