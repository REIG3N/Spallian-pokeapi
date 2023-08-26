import { useState, useEffect } from "react";
import ResultDiv from "./ResultDiv.js"

export default function EndQuizz({
  score,
  pokemonsToGuess,
  ReturnToTitleScreen,
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



  return (
    <>
      <div className="endQuizz">
        <h3>You got {score} out of 5 correct answers !</h3>
        <button onClick={ReturnToTitleScreen} className='Button'>GO TO MENU</button>
        <h4>List of pokemons in the quizz :</h4>

        {pokemonsToGuess && pokemonsToGuess.map(pokemon => {
          return (
            <div className="pokemonToGuessLi">
              <p OnClick={() => { OpenPokedexPage() }} key={pokemon.id} className="pokemonToGuess">{pokemon.name}</p>
              <button OnClick={() => {OpenPokedexPage()}} className="PokedexButton">Pokedex</button> 
            </div>
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