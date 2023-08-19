import downArrow from "../assets/image/downArrow.png"
import UpArrow from "../assets/image/UpArrow.png"

const ResultSection = (
  {Show, 
  resultDiv, 
  SetResultDiv,
  correct,
  pokemonName,
  pokemonType1,
  pokemonType2,
  pokemonAbilities,
  SetResult,
  SetReload,
  reload,
  SetAnwser,
  SetRound,
  round,
  SetEndQuizz,
  }) =>{

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

  const Next = () => {
    SetReload(!reload)
    SetResult(false)
    SetResultDiv(false)
    SetAnwser('')
    SetRound(round + 1)
    if (round === 5) {
      console.log("----END OF THE QUIZZ----")
      SetRound(1)
      SetEndQuizz(true)
    }
  }

  return(
    <>
    <div>
      <button
        onClick={(e) => { Show(resultDiv, SetResultDiv) }}
        className='resultButton' style={{ color: correct ? 'green' : 'red' }}>
        <img src={resultDiv ? UpArrow : downArrow} className="downArrow" />
        It's {pokemonName}
        <img src={resultDiv ? UpArrow : downArrow} className="downArrow" />
      </button>
      <div style={{ display: resultDiv ? 'flex' : 'none' }} className="resultDiv">
        <img className="Img" src={typeImages[pokemonType1]} />
        <img className="Img" src={typeImages[pokemonType2]} />
        <p>{pokemonAbilities}</p>
      </div>
    </div>
    <button onClick={Next} className="Button">NEXT</button>
  </>
  )
  





}
export default ResultSection;