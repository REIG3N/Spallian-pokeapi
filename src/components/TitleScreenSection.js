import titleImg from "../assets/image/title.png"
import MenuScreenSection from "./MenuScreenSection.js"
import { useState, useEffect } from "react";

export default function TitleScreenSection({
  SetQuizz,
  SetRound,
  SetEndQuizz,
  SetScore,
  SetResult,
  CallAPI,
  SetCallAPI,
  SetPokemonsToGuess,
  select,
  SetSelect,
  NewPokemon,

}) {

  const Select = () => {
    SetSelect(true)
    SetRound(1)
    SetEndQuizz(false)
    SetScore(0)
    SetResult(false)
    SetCallAPI(!CallAPI)
    SetPokemonsToGuess([])
  }

  return (
    <>
      <div style={{ display: select ? 'none' : 'block' }}>
        <div className="titleScreen" >
          <img src={titleImg} className="titleImg" />
        </div>
        <button onClick={Select} className='Button'>SELECT</button>
      </div>
      <div style={{ display: select ? 'block' : 'none' }}>
        <MenuScreenSection
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
    </>
  )
}