import { useState, } from "react";

export default function EndQuizz({
  score,
  Show,
  quizz,
  SetQuizz,
  pokemonsToGuess,
  SetPokemonsToGuess

}) {


  return (
    <>
      <div className="endQuizz">
        <h3>You got {score} out of 5 correct answers !</h3>
        <button onClick={(e) => { Show(quizz, SetQuizz) }} className='Button'>RESTART</button>
        <h4>Listes des Pokémons a deviné:</h4>
        <ul>
          {pokemonsToGuess && pokemonsToGuess.map(pokemon => {
            return (
              <li key={pokemon.id}>
                <div>{pokemon.name}</div>
                <div>{pokemon.type1}</div>
                <div>{pokemon.type2}</div>
              </li>
            );
          })}
        </ul>


      </div>
    </>
  )
}