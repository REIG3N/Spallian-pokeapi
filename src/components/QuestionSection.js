export default function QuestionSection({
  result,
  anwser,
  SetAnwser,
  SetResult,
  pokemonName,
  SetCorrect,
  SetScore,
  score
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
    <>
      <div className="questionSection" style={{ display: result ? 'none' : 'flex' }}>
        <h3 className="text">Who's that pokémon ?</h3>
        <input className="anwserInput" value={anwser} onChange={(e) => { SetAnwser(e.target.value) }} />
        <button onClick={Enter} className="Button">ENTER</button>
      </div>
    </>
  )
}