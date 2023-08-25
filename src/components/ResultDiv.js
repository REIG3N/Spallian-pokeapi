// import water from "../assets/image/water.png"
// import normal from "../assets/image/normal.png"
// import fire from "../assets/image/fire.png"
// import electric from "../assets/image/electric.png"
// import grass from "../assets/image/grass.png"
// import dark from "../assets/image/dark.png"
// import fighting from "../assets/image/fighting.png"
// import psychic from "../assets/image/psychic.png"
// import poison from "../assets/image/poison.png"
// import rock from "../assets/image/rock.png"
// import ice from "../assets/image/ice.png"
// import steel from "../assets/image/steel.png" 
// import bug from "../assets/image/bug.png"
// import flying from "../assets/image/flying.png"
// import ground from "../assets/image/ground.png"
// import dragon from "../assets/image/dragon.png"
// import fairy from "../assets/image/fairy.png"
// import ghost from "../assets/image/ghost.png"

const ResultDiv = ({
  resultDiv,
  SetResultDiv,
  pokemonName,
  pokemonType1,
  pokemonType2,
  Show,
  correct,  
  // typeImages,
}) => {
  const typeImages = {
    water: require("../assets/image/water.png"),
    normal: require("../assets/image/normal.png"),
    fire: require("../assets/image/fire.png"),
    electric: require("../assets/image/electric.png"),
    grass: require("../assets/image/grass.png"),
    Ténèbres: require("../assets/image/dark.png"),
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