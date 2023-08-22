import { useState, } from "react";
import EndQuizz from "./EndQuizz.js"
import ResultDiv from "./ResultDiv.js"

const ResultSection = (
  { Show,
    resultDiv,
    SetResultDiv,
    correct,
    pokemonName,
    pokemonType1,
    pokemonType2,
    SetResult,
    SetReload,
    reload,
    SetAnwser,
    SetRound,
    round,
    SetEndQuizz,
    pokeID,
    pokemonsToGuess,
    SetPokemonsToGuess,
    typeImages
  }) => {



  const PokemonRegistering = (PokemonToRegister) => {
    const SelectedListCopy = [...pokemonsToGuess];
    SelectedListCopy.push(PokemonToRegister);
    SetPokemonsToGuess(SelectedListCopy);
  }


  const Next = () => {
    console.log(pokeID)
    const PokemonToRegister = {
      id: round,
      name: pokemonName,
      type1: pokemonType1,
      type2: pokemonType2,
    }
    PokemonRegistering(PokemonToRegister)
    SetPokemonsToGuess([...pokemonsToGuess, PokemonToRegister])
    console.log(PokemonToRegister)
    console.log(pokemonsToGuess)
    SetReload(!reload)
    SetResult(false)
    SetResultDiv(false)
    SetAnwser('')
    SetRound(round + 1)
    if (round === 5) {
      console.log("----END OF THE QUIZZ----")
      SetRound(1)
      SetEndQuizz(true)

    }
  }

  return (
    <>
      <ResultDiv
      resultDiv={resultDiv}
      SetResultDiv={SetResultDiv}
      typeImages={typeImages}
      pokemonName={pokemonName}
      pokemonType1={pokemonType1}
      pokemonType2={pokemonType2}
      Show={Show}
      correct={correct}

      />
      <button onClick={Next} className="Button">NEXT</button>

    </>
  )
}
export default ResultSection;