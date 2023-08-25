import titleImg from "../assets/image/title.png"
import MenuScreenSection from "./MenuScreenSection.js"
import { useState, useEffect } from "react";

export default function TitleScreenSection({
  Show,
  quizz,
  SetQuizz,
  // select,
  // SetSelect,
  SetRound,
  SetEndQuizz,
  SetScore,
  SetResult,
  SetReload,
  reload,
  SetPokemonsToGuess,
  
}) {

  const [select, SetSelect] = useState(false);


  const Select = () => {
    // Show(select, SetSelect)
    SetSelect(true)
    console.log("-----------select-------------")
    console.log(select)

    // SetRound(1)
    // SetEndQuizz(false)
    // SetScore(0)
    // SetResult(false)
    // SetReload(!reload)
    // SetPokemonsToGuess([])
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
    </>
  )
}