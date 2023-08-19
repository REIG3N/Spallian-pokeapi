import titleScreen from "../assets/image/title.png"

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
}) {

  const Start = () => {
    Show(quizz, SetQuizz)
    SetRound(1)
    SetEndQuizz(false)
    SetScore(0)
    SetResult(false)
    SetReload(!reload)
  }
  return (
    <>
      <div>
        <img src={titleScreen} className="titleScreen" />
      </div>
      <button onClick={Start} className='Button'>START</button></>
  )
}