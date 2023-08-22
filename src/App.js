import { useState, useEffect } from "react";
import axios from "axios";

import ResultSection from "./components/ResultSection.js"
import EndQuizz from "./components/EndQuizz.js"
import QuestionSection from "./components/QuestionSection.js"
import QuizzSection from "./components/QuizzSection.js"
import TitleScreenSection from "./components/TitleScreenSection.js"

const App = () => {
  const [quizz, SetQuizz] = useState(false);
  const [reload, SetReload] = useState(true);

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

  const typeImages = {
    Eau: require("./assets/image/water.png"),
    Normal: require("./assets/image/normal.png"),
    Feu: require("./assets/image/fire.png"),
    Électrik: require("./assets/image/electric.png"),
    Plante: require("./assets/image/grass.png"),
    Ténèbres: require("./assets/image/dark.png"),
    Combat: require("./assets/image/fighting.png"),
    Psy: require("./assets/image/psychic.png"),
    Poison: require("./assets/image/poison.png"),
    Acier: require("./assets/image/steel.png"),
    Fée: require("./assets/image/fairy.png"),
    Dragon: require("./assets/image/dragon.png"),
    Glace: require("./assets/image/ice.png"),
    Sol: require("./assets/image/ground.png"),
    Insect: require("./assets/image/bug.png"),
    Spectre: require("./assets/image/ghost.png"),
    Roche: require("./assets/image/rock.png"),
    Vol: require("./assets/image/flying.png"),
  };

  const Show = (stateToChange, SetStateToChange) => {
    !stateToChange ? SetStateToChange(!stateToChange) : SetStateToChange(!stateToChange)
  }


  useEffect(() => {
    const randpoke = Math.floor(Math.random() * 150) + 1;
    axios.get(`https://api-pokemon-fr.vercel.app/api/v1/pokemon/${randpoke}`)
      .then((response) => {
        console.log(response)
        SetPokeID(randpoke)
        const name = response.data.name.fr;
        console.log(name)
        SetPokemonName(name)

        const type1 = response.data.types[0].name;
        console.log(type1)
        SetPokemonType1(type1)
        const type2 = response.data.types[1]?.name;
        SetPokemonType2(type2)
        console.log(type2)

        const imgType1 = response.data.types[0].image;
        console.log(imgType1)
        SetPokemonImgType1(imgType1)
        const imgType2 = response.data.types[1]?.image;
        SetPokemonImgType2(imgType2)
        console.log(imgType2)
        
        const sprites = response.data.sprites.regular
        SetPokemonSprites(sprites)
      }
      )
  }, [reload])


  return (<>

  <div className="appContainer" >

      <div className="menuScreen" style={{ display: quizz ? 'none' : 'block' }}>
      <TitleScreenSection 
        Show={Show}
        quizz={quizz}
        SetQuizz={SetQuizz}
        SetRound={SetRound}
        SetEndQuizz={SetEndQuizz}
        SetScore={SetScore}
        SetResult={SetResult}
        SetReload={SetReload}
        reload={reload}
        SetPokemonsToGuess={SetPokemonsToGuess}
        
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
                SetReload={SetReload}
                reload={reload}
                SetAnwser={SetAnwser}
                SetRound={SetRound}
                round={round}
                SetEndQuizz={SetEndQuizz}
                score={score}
                SetPokemonsToGuess={SetPokemonsToGuess}
                pokemonsToGuess={pokemonsToGuess}
                typeImages={typeImages}

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
              typeImages={typeImages}

            />
          }
        </div>
      </div>
    </div>
  </>
  );
}
export default App;