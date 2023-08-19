export default function EndQuizz({ score, Show, quizz, SetQuizz }) {

  return (
    <div className="endQuizz">
      <h3>You got {score} out of 5 correct answers !</h3>
      <button onClick={(e) => { Show(quizz, SetQuizz) }} className='Button'>RESTART</button>
    </div>
  )
}