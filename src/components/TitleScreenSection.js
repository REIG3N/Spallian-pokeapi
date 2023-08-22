import titleImg from "../assets/image/title.png"

export default function TitleScreenSection({
  Show,
  quizz,
  SetQuizz,
  SetRound,
  SetEndQuizz,
  SetScore,
  SetResult,
  SetReload,
  reload,
  SetPokemonsToGuess,
}) {

  const Start = () => {
    Show(quizz, SetQuizz)
    SetRound(1)
    SetEndQuizz(false)
    SetScore(0)
    SetResult(false)
    SetReload(!reload)
    SetPokemonsToGuess([])

  }
  return (
    <>
      <div  className="titleScreen">
        <img src={titleImg} className="titleImg" />
      </div>
      <button onClick={Start} className='Button'>START</button></>
  )
}