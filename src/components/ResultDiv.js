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
    water: require("../assets/image/water.png"),
    normal: require("../assets/image/normal.png"),
    fire: require("../assets/image/fire.png"),
    electric: require("../assets/image/electric.png"),
    grass: require("../assets/image/grass.png"),
    dark: require("../assets/image/dark.png"),
    fighting: require("../assets/image/fighting.png"),
    psychic: require("../assets/image/psychic.png"),
    poison: require("../assets/image/poison.png"),
    steel: require("../assets/image/steel.png"),
    fairy: require("../assets/image/fairy.png"),
    dragon: require("../assets/image/dragon.png"),
    ice: require("../assets/image/ice.png"),
    ground: require("../assets/image/ground.png"),
    bug: require("../assets/image/bug.png"),
    ghost: require("../assets/image/ghost.png"),
    rock: require("../assets/image/rock.png"),
    flying: require("../assets/image/flying.png"),
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