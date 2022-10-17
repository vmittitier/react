//css
import './App.css';

//react
import { useCallback, useEffect, useState } from 'react';

//data
import { wordsList } from './data/words';

//components
import StartScreen from './components/StartScreen';
import Game from './components/Game';
import GameOver from './components/GameOver';

//jogo tera 3 estagios
const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
]

const guessesQty = 5;


function App() {
//controlar o progresso, pontuacao e estagio com o hoook State
const [gameStage, setGameStage] = useState(stages[0].name)
//ja iniciar o state das Words
const [words] = useState(wordsList);

//criar mais 3 states
const[pickedWord, setPickedWord] = useState("");
const[pickedCategory, setPickedCategory] = useState("");
const[letters, setLetters] = useState([]);

const [guessedLetters, setGuessedLetters] = useState([]);
const [wrongLetters, setWrongLetters] = useState([]);
const [guesses, setGuesses] = useState(5);
const [score, setScore] = useState(0);

console.log(score)

const pickWordAndCategory = useCallback(() => {
  
  //picking a random category
  const categories = Object.keys(words)
  const category = categories[Math.floor(
    Math.random() * Object.keys(categories).length)];
    // console.log(category);

  // picking a random word
  const word = words[category][Math.floor(
    Math.random() * words[category].length)];
    // console.log(word);

    //retorna como objeto pra poder desestruturar depois
    return{ word, category }
},[words]);

//start secret word game
const startGame = useCallback(() => {

  //clear all letters
  clearLetterStates();
  

  //pick word and pick category from destruction of the function return
  const {word, category} = pickWordAndCategory();

  // criar vetor de letras
  let wordLetters = word.split("");
  wordLetters = wordLetters.map((l) => l.toLowerCase());

  // preenche os estados
  setPickedWord(word)
  setPickedCategory(category)
  setLetters(wordLetters)

  setGameStage(stages[1].name)
},[pickWordAndCategory]);

// processa o ultimo input
const verifyLetter = (letter) => {  
  const normalizedLetter = letter.toLowerCase();

  // check if letter has been used
  if (
    guessedLetters.includes(normalizedLetter) || 
    wrongLetters.includes(normalizedLetter)
  ) {
    return;
  }

  //push guesses letter or remove a guess
  if(letters.includes(normalizedLetter)) {
    setGuessedLetters((actualGuessedLetters) => [
      ...actualGuessedLetters, 
      letter,
    ]);
  } else {
    setWrongLetters((actualWrongLetters) => [
      ...actualWrongLetters,
      normalizedLetter,
    ]);

    setGuesses((actualGuesses) => actualGuesses - 1);

  }  
 
}

 const clearLetterStates = () => {
  setGuessedLetters([]);
  setWrongLetters([]);
}


//monitora um dado e altera, no caso queremos monitorar guesses
useEffect(() => {

  
  if(guesses <= 0){
    //dar gameover e resetar os states pra voltar zerado
    clearLetterStates();

    setGameStage(stages[2].name);
  }

}, [guesses])

// check win condition
useEffect(() => {
  //checar se existe a letra em mais de um lugar
  //SET cria um novo array de letras unicas com o spread operator
  const uniqueLetters = [ ...new Set(letters)]

  //win condition 
  //quando o numero de tentativas for igual ao numero de casas do vetor de letras unicas
  if(guessedLetters.length === uniqueLetters.length) {
    // add score
    
    setScore((actualScore) => actualScore += 100);

    //restart game with new word
    startGame();
    
  }

}, [guessedLetters, letters, startGame]);

// reinicia o jogo
const retry = () => {
  setScore(0);
  setGuesses(guessesQty);
  setGameStage(stages[0].name)
}

//inicializa o componente de acordo com o estagio
  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame} />}
      {gameStage === 'game' && (
      <Game 
        verifyLetter={verifyLetter}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters} 
        guessedLetters={guessedLetters}
        wrongLetters={wrongLetters}
        guesses={guesses}
        score={score}
       />
       )}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  );
}

export default App;
