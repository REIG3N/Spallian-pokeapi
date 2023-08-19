export default function QuizzSection({ 
  Show,
  quizz,
  SetQuizz,
  round,
  pokemonSprites,
  result,
}) {


  return (
    <>
      <div className="quizzHeader">
        <button onClick={(e) => { Show(quizz, SetQuizz) }} className="returnButton">Return</button>
        <h2 className="text">PokéQuizz</h2>
        <p>({round}/5)</p>
      </div>
      <div className="imageDiv">
        <img src={pokemonSprites} style={{ width: '250px', height: '250px', mixBlendMode: "multiply", filter: result ? 'none' : 'brightness(0)' }} />
      </div>
    </>
  )
}