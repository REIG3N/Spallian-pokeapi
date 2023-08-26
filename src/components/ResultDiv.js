const ResultDiv = ({
  resultDiv,
  SetResultDiv,
  pokemonName,
  pokemonType1,
  pokemonType2,
  Show,
  correct,  
}) => {
  const typeImages = {
    Eau: require("../assets/image/water.png"),
    Normal: require("../assets/image/normal.png"),
    Feu: require("../assets/image/fire.png"),
    Electric: require("../assets/image/electric.png"),
    Plante: require("../assets/image/grass.png"),
    Ténébres: require("../assets/image/dark.png"),
    Combat: require("../assets/image/fighting.png"),
    Psy: require("../assets/image/psychic.png"),
    Poison: require("../assets/image/poison.png"),
    Acier: require("../assets/image/steel.png"),
    Fée: require("../assets/image/fairy.png"),
    Dragon: require("../assets/image/dragon.png"),
    Glace: require("../assets/image/ice.png"),
    Sol: require("../assets/image/ground.png"),
    Insecte: require("../assets/image/bug.png"),
    Spectre: require("../assets/image/ghost.png"),
    Roche: require("../assets/image/rock.png"),
    Vol: require("../assets/image/flying.png"),
  };

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
          <img className="Img" style={{ display: pokemonType2 ? 'block' : 'none' }} src={typeImages[pokemonType2]} />
        </div>
      </div>
    </>
  )
}
export default ResultDiv;