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

  const [pokemonName, SetPokemonName] = useState('');
  const [pokemonSprites, SetPokemonSprites] = useState('')
  const [pokemonType1, SetPokemonType1] = useState("");
  const [pokemonType2, SetPokemonType2] = useState("");
  const [pokemonAbilities, SetPokemonAbilities] = useState([]);

  const [anwser, SetAnwser] = useState('');
  const [correct, SetCorrect] = useState(true);
  const [result, SetResult] = useState(false);
  const [resultDiv, SetResultDiv] = useState(false);
  const [round, SetRound] = useState(1);
  const [score, SetScore] = useState(0);
  const [endQuizz, SetEndQuizz] = useState(false);

  const Show = (stateToChange, SetStateToChange) => {
    !stateToChange ? SetStateToChange(!stateToChange) : SetStateToChange(!stateToChange)
  }

  // useEffect(() => {
  //   const randpoke = Math.floor(Math.random() * 1009) + 1;
  //   axios.get(`https://pokeapi.co/api/v2/pokemon/${randpoke}`)
  //     .then((response) => {
  //       console.log(response)
  //       const name = response.data.name;
  //       console.log(name)
  //       SetPokemonName(name)
  //       const type1 = response.data.types[0].type.name;
  //       SetPokemonType1(type1)
  //       const type2 = response.data.types[1]?.type.name;
  //       SetPokemonType2(type2)
  //       const sprites = response.data.sprites.front_default
  //       SetPokemonSprites(sprites)
  //       // const abilities = response.data.abilities.map(ability => ability.ability.name);
  //       // SetPokemonAbilities(abilities)
  //     }
  //     )
  // }, [reload])

  useEffect(() => {
    const randpoke = Math.floor(Math.random() * 1009) + 1;
    axios.get(`https://api-pokemon-fr.vercel.app/api/v1/pokemon/${randpoke}`)
      .then((response) => {
        console.log(response)
        const ID = response.data.name.fr;


        const name = response.data.name.fr;
        console.log(name)
        SetPokemonName(name)

        const type1 = response.data.types[0].name;
        console.log(type1)

        SetPokemonType1(type1)
        const type2 = response.data.types[1]?.name;
        SetPokemonType2(type2)
        console.log(type2)

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
            />
          }
        </div>
      </div>
    </div>
  </>
  );
}
export default App;