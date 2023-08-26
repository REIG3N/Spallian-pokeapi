import { useState, useEffect } from "react";
import axios, { Axios } from "axios";

import ResultSection from "./components/ResultSection.js"
import EndQuizz from "./components/EndQuizz.js"
import QuestionSection from "./components/QuestionSection.js"
import QuizzSection from "./components/QuizzSection.js"
import TitleScreenSection from "./components/TitleScreenSection.js"
import MenuScreenSection from "./components/MenuScreenSection.js"

const App = () => {
  const [quizz, SetQuizz] = useState(false);
  const [CallAPI, SetCallAPI] = useState(true);

  const [pokeID, SetPokeID] = useState("");
  const [pokemonName, SetPokemonName] = useState('');
  const [pokemonSprites, SetPokemonSprites] = useState('')
  const [pokemonType1, SetPokemonType1] = useState("");
  const [pokemonType2, SetPokemonType2] = useState("");
  const [pokemonImgType1, SetPokemonImgType1] = useState("");
  const [pokemonImgType2, SetPokemonImgType2] = useState("");

  const [anwser, SetAnwser] = useState('');
  const [correct, SetCorrect] = useState(true);
  const [round, SetRound] = useState(1);
  const [score, SetScore] = useState(0);

  const [result, SetResult] = useState(false);
  const [resultDiv, SetResultDiv] = useState(false);
  const [endQuizz, SetEndQuizz] = useState(false);
  const [pokemonsToGuess, SetPokemonsToGuess] = useState([]);
  const [GenPoke, SetGenPoke] = useState(0);

  const [currentGenPoke, SetCurrentGenPoke] = useState("");


  function Show (stateToChange, SetStateToChange){
    !stateToChange ? SetStateToChange(!stateToChange) : SetStateToChange(!stateToChange)
  };

  const RandAllGen = Math.floor(Math.random() * 1010) + 1;
  const RandGen1 = Math.floor(Math.random() * 150) + 1;
  const RandGen2 = Math.floor(Math.random() * 100) + 151 + 1;
  const RandGen3 = Math.floor(Math.random() * 134) + 252 + 1;
  const RandGen4 = Math.floor(Math.random() * 106) + 387 + 1;
  const RandGen5 = Math.floor(Math.random() * 155) + 494 + 1;
  const RandGen6 = Math.floor(Math.random() * 71) + 650 + 1;
  const RandGen7 = Math.floor(Math.random() * 87) + 722 + 1;
  const RandGen8 = Math.floor(Math.random() * 95) + 810 + 1;
  const RandGen9 = Math.floor(Math.random() * 103) + 906 + 1;


  const NewPokemon = (Gen) => {
    if(Gen === "Gen1"){
      SetGenPoke(RandGen1)
      SetCurrentGenPoke("Gen1")
    }
    else if(Gen === "Gen2"){
      SetGenPoke(RandGen2)
      SetCurrentGenPoke("Gen2")
  
    }
    else if(Gen === "Gen3"){
      SetGenPoke(RandGen3)
      SetCurrentGenPoke("Gen3")
    }
    else if(Gen === "Gen4"){
      SetGenPoke(RandGen4)
      SetCurrentGenPoke("Gen4")
  
    }
    else if(Gen === "Gen5"){
      SetGenPoke(RandGen5)
      SetCurrentGenPoke("Gen5")
  
    }
    else if(Gen === "Gen6"){
      SetGenPoke(RandGen6)
      SetCurrentGenPoke("Gen6")
  
    }
    else if(Gen === "Gen7"){
      SetGenPoke(RandGen7)
      SetCurrentGenPoke("Gen7")
  
    }
    else if(Gen === "Gen8"){
      SetGenPoke(RandGen8)
      SetCurrentGenPoke("Gen8")
    }
    else if(Gen === "Gen9"){
      SetGenPoke(RandGen9)
      SetCurrentGenPoke("Gen9")
    }
    else if(Gen === "AllGen"){
      SetGenPoke(RandAllGen)
      SetCurrentGenPoke("AllGen")
    }
  }

useEffect(() => {

  // const RandGen1 = Math.floor(Math.random() * 150) + 1;
  // axios.get(`https://api-pokemon-fr.vercel.app/api/v1/{GenPoke}`)
  axios.get(`https://pokeapi.co/api/v2/pokemon/${GenPoke}`)
    .then((response) => {
      console.log(response)
      SetPokeID(GenPoke)
      const name = response.data.name;
      console.log(name)
      SetPokemonName(name)
      const type1 = response.data.types[0].type.name
      SetPokemonType1(type1)
      const type2 = response.data.types[1]?.type.name
      SetPokemonType2(type2)

      const sprites = response.data.sprites.front_default
      SetPokemonSprites(sprites)
    }).catch(error => { console.error('Erreur Axios :', error); })
},[CallAPI])

  return (<>
    <div className="appContainer" >

      <div className="menuScreen" style={{ display: quizz ? 'none' : 'block' }}>
        <TitleScreenSection
          SetQuizz={SetQuizz}
          SetRound={SetRound}
          SetEndQuizz={SetEndQuizz}
          SetScore={SetScore}
          SetResult={SetResult}
          CallAPI={CallAPI}
          SetCallAPI={SetCallAPI}
          SetPokemonsToGuess={SetPokemonsToGuess}
          NewPokemon={NewPokemon}
        />
      </div>


      <div className="mainDiv" style={{ display: quizz ? 'block' : 'none' }}>
        <div className="quizzContainer"  >
          <div className="quizzDiv" style={{ display: endQuizz ? 'none' : 'block' }} >
            <QuizzSection
              Show={Show}
              quizz={quizz}
              SetQuizz={SetQuizz}
              round={round}
              pokemonSprites={pokemonSprites}
              result={result}
            />
          </div>
          <div className="FormDiv" style={{ display: endQuizz ? 'none' : 'block' }}>
            <QuestionSection
              result={result}
              anwser={anwser}
              SetAnwser={SetAnwser}
              SetResult={SetResult}
              pokemonName={pokemonName}
              SetCorrect={SetCorrect}
              SetScore={SetScore}
              score={score}
            />
            <div className="resultSection">
              {result && !endQuizz &&
                <ResultSection
                  Show={Show}
                  resultDiv={resultDiv}
                  SetResultDiv={SetResultDiv}
                  correct={correct}
                  pokemonName={pokemonName}
                  pokemonType1={pokemonType1}
                  pokemonType2={pokemonType2}
                  SetResult={SetResult}
                  CallAPI={CallAPI}
                  SetCallAPI={SetCallAPI}
                  SetAnwser={SetAnwser}
                  SetRound={SetRound}
                  round={round}
                  SetEndQuizz={SetEndQuizz}
                  score={score}
                  SetPokemonsToGuess={SetPokemonsToGuess}
                  pokemonsToGuess={pokemonsToGuess}
                  NewPokemon={NewPokemon}
                  currentGenPoke={currentGenPoke}
                />
              }
            </div>
          </div>
          {endQuizz && !result &&
            <EndQuizz
              score={score}
              Show={Show}
              quizz={quizz}
              SetQuizz={SetQuizz}
              SetPokemonsToGuess={SetPokemonsToGuess}
              pokemonsToGuess={pokemonsToGuess}
              round={round}
              endQuizz={endQuizz}
            />
          }
        </div>
      </div>
    </div>
  </>
  );
}
export default App;