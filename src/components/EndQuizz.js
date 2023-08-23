import { useState, useEffect } from "react";
import ResultDiv from "./ResultDiv.js"

export default function EndQuizz({
  score,
  Show,
  quizz,
  SetQuizz,
  pokemonsToGuess,
  endQuizz,
}) {

  const [pokedexPage, SetPokedexPage] = useState(false);

  const OpenPokedexPage = () => {
    SetPokedexPage(true)
    console.log("-------------OPEN-------------")
    console.log(pokedexPage)
  }
  useEffect(() => {
      console.log("-------------OPEN-------------");
      console.log(pokedexPage)
    

  }, [pokedexPage]);

  const typeImages = {
    Eau: require("../assets/image/water.png"),
    Normal: require("../assets/image/normal.png"),
    Feu: require("../assets/image/fire.png"),
    Électrik: require("../assets/image/electric.png"),
    Plante: require("../assets/image/grass.png"),
    Ténèbres: require("../assets/image/dark.png"),
    Combat: require("../assets/image/fighting.png"),
    Psy: require("../assets/image/psychic.png"),
    Poison: require("../assets/image/poison.png"),
    Acier: require("../assets/image/steel.png"),
    Fée: require("../assets/image/fairy.png"),
    Dragon: require("../assets/image/dragon.png"),
    Glace: require("../assets/image/ice.png"),
    Sol: require("../assets/image/ground.png"),
    Insect: require("../assets/image/bug.png"),
    Spectre: require("../assets/image/ghost.png"),
    Roche: require("../assets/image/rock.png"),
    Vol: require("../assets/image/flying.png"),
  };


  return (
    <>
      <div className="endQuizz">
      <button OnClick={() => { OpenPokedexPage() }}  className="">pokemon.name</button>
              <button OnClick={() => {SetPokedexPage(true)}}  className="">Open</button>
        <h3>You got {score} out of 5 correct answers !</h3>
        <button onClick={(e) => { Show(quizz, SetQuizz) }} className='Button'>GO TO MENU</button>
        <h4>Listes des Pokémons a deviné:</h4>

        {pokemonsToGuess && pokemonsToGuess.map(pokemon => {
          return (
            <>
              <button OnClick={() => { OpenPokedexPage() }} key={pokemon.id} className="">{pokemon.name}</button>
              <button OnClick={() => {SetPokedexPage(true)}}  className="">Open</button>
              {/* <button OnClick={() => {SetPokedexPage(true)}  className="">Open</button> */}


            </>
          );
        })}
      </div>
      {pokedexPage &&
        <div>
          <button className="">Close</button>
          <div className="">Page pokedex du pokemon</div>
        </div>
      }
    </>
  )
}