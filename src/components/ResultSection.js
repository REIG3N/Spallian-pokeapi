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
    CallAPI,
    SetCallAPI,
    SetAnwser,
    SetRound,
    round,
    SetEndQuizz,
    pokeID,
    pokemonsToGuess,
    SetPokemonsToGuess,
    NewPokemon,
    currentGenPoke,
  }) => {




  const Next = (Gen) => {
    console.log(pokeID)
    const PokemonToRegister = {
      id: round,
      name: pokemonName,
      type1: pokemonType1,
      type2: pokemonType2,
    }
    SetPokemonsToGuess([...pokemonsToGuess, PokemonToRegister])
    console.table(PokemonToRegister)
    SetResult(false)
    SetResultDiv(false)
    SetAnwser('')
    SetRound(round + 1)
    if (round === 5) {
      console.log("----END OF THE QUIZZ----")
      SetRound(1)
      SetEndQuizz(true)
    }
    else {
      NewPokemon(Gen)
      console.log(Gen)
      SetCallAPI(!CallAPI)
    }
  }

  return (
    <>
      <ResultDiv
        resultDiv={resultDiv}
        SetResultDiv={SetResultDiv}
        pokemonName={pokemonName}
        pokemonType1={pokemonType1}
        pokemonType2={pokemonType2}
        Show={Show}
        correct={correct}
      />
      <div style={{ display: "flex", justifyContent: "center"}}>
        <button onClick={() => Next("Gen1")} className="Button" style={{ display: currentGenPoke === "Gen1" ? 'block' : 'none' }}>NEXT</button>
        <button onClick={() => Next("Gen2")} className="Button" style={{ display: currentGenPoke === "Gen2" ? 'block' : 'none' }}>NEXT</button>
        <button onClick={() => Next("Gen3")} className="Button" style={{ display: currentGenPoke === "Gen3" ? 'block' : 'none' }}>NEXT</button>
        <button onClick={() => Next("Gen4")} className="Button" style={{ display: currentGenPoke === "Gen4" ? 'block' : 'none' }}>NEXT</button>
        <button onClick={() => Next("Gen5")} className="Button" style={{ display: currentGenPoke === "Gen5" ? 'block' : 'none' }}>NEXT</button>
        <button onClick={() => Next("Gen6")} className="Button" style={{ display: currentGenPoke === "Gen6" ? 'block' : 'none' }}>NEXT</button>
        <button onClick={() => Next("Gen7")} className="Button" style={{ display: currentGenPoke === "Gen7" ? 'block' : 'none' }}>NEXT</button>
        <button onClick={() => Next("Gen8")} className="Button" style={{ display: currentGenPoke === "Gen8" ? 'block' : 'none' }}>NEXT</button>
        <button onClick={() => Next("Gen9")} className="Button" style={{ display: currentGenPoke === "Gen9" ? 'block' : 'none' }}>NEXT</button>
        <button onClick={() => Next("AllGen")} className="Button" style={{ display: currentGenPoke === "AllGen" ? 'block' : 'none' }}>NEXT</button>
      </div>
    </>
  )
}
export default ResultSection;