import { useState } from 'react';
import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';

function App() {
  //const name = "Joaquim";
  const [userName] = useState("Maria");

  /* lista objetos */
  const cars = [
    {id: 1, brand:"ferrari", color: "amarelo", newCar: true, km: 0},
    {id: 2, brand:"lamborghini", color: "branco", newCar: false, km: 123},
    {id: 3, brand:"mercedes", color: "azul", newCar: false, km: 12345},
  ];

  function showMessage(){
    console.log("evento do componente pai")
  };

  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
  setMessage(msg);
  };

  const Pessoas = [
  {id: 1, nome: "joao", idade:20, profissao: "programador"},
  
  {id: 2, nome: "maria", idade:16, profissao: "estudante"},
  
  {id: 3, nome: "marcelo", idade:234, profissao: "tartaruga"},
  ]


  return (
    <div className="App">
      <h1>Novo Projeto - desafio 3</h1>
      { /*imagem em public*/ }
      <div>
        <img src="/img1.jpg" alt="paisagem" />
      </div>
      { /*imagem em assets*/ }
      <div>
        <img src={City} alt="cidade" />
      </div>
      {/* hook state */}
      <ManageData/>
      {/* state em lista */}
      <ListRender/>
      {/* render condicional */}
      <ConditionalRender/>
      {/* props */}
      <ShowUserName name={userName} />
      {/* destructuring props */}
      <CarDetails brand="VW" km={1000} color="Azul" newCar={false}/>
      {/* reaproveitando */}
      <CarDetails brand="Ford" color="vermelho" km={0} newCar={true}/>
        {/* loop em array de obj */}
        {cars.map((car) => (
          <CarDetails 
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar} />
        ))}
      {/* fragment */}
      <Fragment propFragment="teste" />
      {/* children prop com html dentro precisa abrir e fechar*/}
      <Container myValue="testing">
          <p>este eh o ocnteudo</p>
          <h3>Testando container</h3>
      </Container>
      {/* executar funcao */}
      <ExecuteFunction myFunction={showMessage}/>    

      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

      {/* Desafio 4 */}
      {Pessoas.map((pessoas) => (
        <UserDetails
        id={pessoas.id}
        nome={pessoas.nome}
        idade={pessoas.idade}
        profissao={pessoas.profissao} />      
      ))}


      </div>
      );
    }

export default App;
