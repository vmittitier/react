import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext";
import "./About.css"
// import { useContext } from "react"
// import CounterContext from '../context/CounterContext'

const About = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // contexto mais complexo
  const { color } = useTitleColorContext();

  return (
    <div>
      <p style={{color: color}}>Sobre</p>
      <p>Valor do Contador: {counter}</p>

    </div>
  )
}

export default About