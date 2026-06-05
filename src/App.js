import { useState } from "react";
import pokemonDB from "./data/pokemon.json";

import ResultSection from "./components/ResultSection.js"
import EndQuizz from "./components/EndQuizz.js"
import QuestionSection from "./components/QuestionSection.js"
import QuizzScreen from "./components/QuizzScreen.js"
import TitleScreenSection from "./components/TitleScreenSection.js"

const GEN_RANGES = {
  Gen1:   [1,   150],
  Gen2:   [152, 251],
  Gen3:   [253, 386],
  Gen4:   [388, 493],
  Gen5:   [494, 649],
  Gen6:   [650, 721],
  Gen7:   [722, 809],
  Gen8:   [810, 905],
  Gen9:   [906, 1010],
  AllGen: [1,   1010],
};

function randInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickPokemon(gen) {
  const [min, max] = GEN_RANGES[gen];
  let pokemon = null;
  let tries = 0;
  while (!pokemon && tries < 20) {
    const id = randInRange(min, max);
    pokemon = pokemonDB.find(p => p.id === id);
    tries++;
  }
  return pokemon;
}

const App = () => {
  const [quizz, SetQuizz] = useState(false);
  const [select, SetSelect] = useState(false);
  const [result, SetResult] = useState(false);
  const [resultDiv, SetResultDiv] = useState(false);
  const [endQuizz, SetEndQuizz] = useState(false);
  const [pokemonsToGuess, SetPokemonsToGuess] = useState([]);

  const [anwser, SetAnwser] = useState('');
  const [correct, SetCorrect] = useState(true);
  const [round, SetRound] = useState(1);
  const [score, SetScore] = useState(0);

  const [currentPokemon, SetCurrentPokemon] = useState(null);
  const [currentGenPoke, SetCurrentGenPoke] = useState("");

  const pokemonName    = currentPokemon?.name    ?? '';
  const pokemonSprites = currentPokemon?.sprite   ?? '';
  const pokemonType1   = currentPokemon?.types[0] ?? '';
  const pokemonType2   = currentPokemon?.types[1] ?? '';

  const NewPokemon = (gen) => {
    const pokemon = pickPokemon(gen);
    SetCurrentPokemon(pokemon);
    SetCurrentGenPoke(gen);
  };

  const typeImages = {
    Eau:      require("./assets/image/water.png"),
    Normal:   require("./assets/image/normal.png"),
    Feu:      require("./assets/image/fire.png"),
    Électrik: require("./assets/image/electric.png"),
    Plante:   require("./assets/image/grass.png"),
    Ténébres: require("./assets/image/dark.png"),
    Combat:   require("./assets/image/fighting.png"),
    Psy:      require("./assets/image/psychic.png"),
    Poison:   require("./assets/image/poison.png"),
    Acier:    require("./assets/image/steel.png"),
    Fée:      require("./assets/image/fairy.png"),
    Dragon:   require("./assets/image/dragon.png"),
    Glace:    require("./assets/image/ice.png"),
    Sol:      require("./assets/image/ground.png"),
    Insecte:  require("./assets/image/bug.png"),
    Spectre:  require("./assets/image/ghost.png"),
    Roche:    require("./assets/image/rock.png"),
    Vol:      require("./assets/image/flying.png"),
  };

  function Show(stateToChange, SetStateToChange) {
    SetStateToChange(!stateToChange);
  }

  function ReturnToTitleScreen() {
    Show(quizz, SetQuizz);
    SetSelect(false);
  }

  return (<>
    <div className="appContainer">

      <div className="menuScreen" style={{ display: quizz ? 'none' : 'block' }}>
        <TitleScreenSection
          SetQuizz={SetQuizz}
          SetRound={SetRound}
          SetEndQuizz={SetEndQuizz}
          SetScore={SetScore}
          SetResult={SetResult}
          SetPokemonsToGuess={SetPokemonsToGuess}
          NewPokemon={NewPokemon}
          select={select}
          SetSelect={SetSelect}
        />
      </div>

      <div className="mainDiv" style={{ display: quizz ? 'block' : 'none' }}>
        <div className="quizzContainer">
          <div className="quizzResponsive">
            <div className="quizzDiv" style={{ display: endQuizz ? 'none' : 'block' }}>
              <QuizzScreen
                round={round}
                pokemonSprites={pokemonSprites}
                result={result}
                ReturnToTitleScreen={ReturnToTitleScreen}
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
                    SetAnwser={SetAnwser}
                    SetRound={SetRound}
                    round={round}
                    SetEndQuizz={SetEndQuizz}
                    score={score}
                    SetPokemonsToGuess={SetPokemonsToGuess}
                    pokemonsToGuess={pokemonsToGuess}
                    NewPokemon={NewPokemon}
                    currentGenPoke={currentGenPoke}
                    typeImages={typeImages}
                  />
                }
              </div>
            </div>
          </div>
          {endQuizz && !result &&
            <EndQuizz
              score={score}
              ReturnToTitleScreen={ReturnToTitleScreen}
              SetPokemonsToGuess={SetPokemonsToGuess}
              pokemonsToGuess={pokemonsToGuess}
              round={round}
              typeImages={typeImages}
            />
          }
        </div>
      </div>
    </div>
  </>);
}
export default App;
