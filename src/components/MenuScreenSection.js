import { useState, useEffect } from "react";

export default function ({
  Show,
  quizz,
  SetQuizz,
  select,
  SetSelect,
  SetRound,
  SetEndQuizz,
  SetScore,
  SetResult,
  CallAPI,
  SetCallAPI,
  SetPokemonsToGuess,
  }) {

  // const [quizz, SetQuizz] = useState(false);

  // const [reload2, SetReload2] = useState(true);



  const Start = () => {
    // Show(quizz, SetQuizz)
    SetQuizz(true)
    SetRound(1)
    SetEndQuizz(false)
    SetScore(0)
    SetResult(false)
    // Show(CallAPI, SetCallAPI)
    SetCallAPI(!CallAPI)
    SetPokemonsToGuess([])
  }





  return (
    <>
      {/* <div style={{ display: select ? 'block' : 'none' }}> */}

      <button onClick={Start} className='Button'>GEN 1</button>
      {/* <button onClick={Start2} className='Button'>GEN 2</button> */}
      {/* <button onClick={Start} className='Button'>GEN 3</button>
      <button onClick={Start} className='Button'>GEN 4</button>
      <button onClick={Start} className='Button'>GEN 5</button>
      <button onClick={Start} className='Button'>GEN 6</button>
      <button onClick={Start} className='Button'>GEN 7</button>
      <button onClick={Start} className='Button'>GEN 8</button>
      <button onClick={Start} className='Button'>GEN 9</button>
      <button onClick={Start} className='Button'>ALL</button> */}
      
      {/* </div> */}

    </>
  )
}