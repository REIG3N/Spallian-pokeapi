import { useState, useEffect } from "react";

export default function ({
  SetQuizz,
  SetRound,
  SetEndQuizz,
  SetScore,
  SetResult,
  CallAPI,
  SetCallAPI,
  SetPokemonsToGuess,
  NewPokemon,

}) {

  const Start = (Gen) => {
    NewPokemon(Gen)
    SetQuizz(true)
    SetRound(1)
    SetEndQuizz(false)
    SetScore(0)
    SetResult(false)
    SetCallAPI(!CallAPI)
    SetPokemonsToGuess([])
  }

  return (
    <div className="SelectScreen">
      <div className="SelectScreenTitle">Choose the generation of the quizz</div>
      <div className=" SelectScreenButtons">
        <button onClick={() => Start("Gen1")} className='Button'>GEN 1</button>
        <button onClick={() => Start("Gen2")} className='Button'>GEN 2</button>
        <button onClick={() => Start("Gen3")} className='Button'>GEN 3</button>
        <button onClick={() => Start("Gen4")} className='Button'>GEN 4</button>
        <button onClick={() => Start("Gen5")} className='Button'>GEN 5</button>
        <button onClick={() => Start("Gen6")} className='Button'>GEN 6</button>
        <button onClick={() => Start("Gen7")} className='Button'>GEN 7</button>
        <button onClick={() => Start("Gen8")} className='Button'>GEN 8</button>
        <button onClick={() => Start("Gen9")} className='Button'>GEN 9</button>
        <button onClick={() => Start("AllGen")} className='Button'>ALL</button>
      </div>

    </div>
  )
}