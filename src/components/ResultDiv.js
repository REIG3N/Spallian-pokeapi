
const ResultDiv = ({
  resultDiv,
  SetResultDiv,
  pokemonName,
  pokemonType1,
  pokemonType2,
  Show,
  correct,  typeImages,

}) => {


  return (
    <>
      <div
        onClick={(e) => { Show(resultDiv, SetResultDiv) }}
        className='resultButton'>
        <div style={{ display: "flex", flexDirection: 'row', textAlign: "center", alignItems: 'center' }}><p style={{ paddingRight: '20px' }}>It's</p>
          <p style={{ color: correct ? 'green' : 'red', }}>{pokemonName}</p>
        </div>
        <div>
          <img className="Img" src={typeImages[pokemonType1]} />
          <img className="Img" src={typeImages[pokemonType2]} />
        </div>
      </div>
    </>
  )
}
export default ResultDiv;