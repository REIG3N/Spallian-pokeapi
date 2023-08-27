import '../styles/questionsection.css';


export default function QuestionSection({
  result,
  anwser,
  SetAnwser,
  SetResult,
  pokemonName,
  SetCorrect,
  SetScore,
  score,
}) {
  
  const Enter = () => {
    SetResult(true)
    SetAnwser('')
    if (anwser === pokemonName) {
      console.log('WIN')
      SetCorrect(true)
      SetScore(score + 1)
    } else {
      console.log('LOSE')
      SetCorrect(false)
    }
  }



  return (
    <div className="questionSection"  style={{ display: result ? 'none' : 'flex' }}>
      <div>
        <h3 >Quelle est ce pokémon ?</h3>
        <input className="anwserInput" value={anwser} onChange={(e) => { SetAnwser(e.target.value) }} />
      </div>
      <button onClick={Enter} className="Button">ENTRER</button>
    </div>
  )
}