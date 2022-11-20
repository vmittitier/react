// 4 importaing components

import { createContext } from "react";
import Context from "./components/Context";
import Destructuring, { Category } from "./components/Destructuring";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import State from "./components/State";

// context
interface IAppContext {
  languague: string,
  framework: string,
  projects: number,
};

// type
type textOrNull = string | null;

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1 - variaveis
  const name: string = "Vinicius";
  const age: number = 30;
  const isWorking: boolean = true;
  const myText: textOrNull = "Tem algum texto aqui";
  const mySecondText: textOrNull = null;

  // 2 funcoes
  const userGreeting = (name: string): string => {
    return `Olá, ${name}`;
  };

  // context
const contextValue: IAppContext = {
  languague: "Javascript",
  framework: "Express",
  projects: 5,
};

  return (
    <AppContext.Provider value={contextValue}>
    <div>
      <h1>TypeScript com React</h1>
      <h2>Nome: {name} </h2>
      <p>Idade: {age}</p>
      {isWorking && <p>Está trabalhando!</p>}
      <p>{userGreeting(name)}</p>
      <FirstComponent />
      <SecondComponent name={name} />
      <Destructuring
        title="Primeiro post"
        content="Algum conteúdo"
        commentsQty={10}
        tags={["ts", "javascript"]}
        category={Category.TS}
      />
      <Destructuring
        title="Segundo post"
        content="Outro conteúdo"
        commentsQty={9}
        tags={["React", "TypeScript"]}
        category={Category.JS}
      />
      <State />
      <Context/>
    </div>
    </AppContext.Provider>
  );
}

export default App;
