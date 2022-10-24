import './Home.css'

// import { useContext } from "react"
// import CounterContext from '../context/CounterContext'
import ChangeCounter from '../context/ChangeCounter'

// refatorando com hook
import { useCounterContext } from '../hooks/useCounterContext'

// context mais complexo
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // context mais complexo
  const { color, dispatch} = useTitleColorContext();

  //  alterando state complexo
  const setTitleColor = (color) => {
    dispatch({ type: color});
  }
  return (
    <div>
    <h1 style={{color: color}}>Home</h1>
    <p>Valor do Contador: {counter}</p>
    {/* Alterando valor contexto */}
    <ChangeCounter />
    {/* alterando contexto complexo */}
    <button onClick={() => setTitleColor("RED")}>Vermelho</button>
    <button onClick={() => setTitleColor("BLUE")}>Vermelho</button>
    </div>
    
  )
}

export default Home