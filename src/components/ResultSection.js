import downArrow from "../assets/image/downArrow.png"
import UpArrow from "../assets/image/UpArrow.png"

const ResultSection = (
  { Show,
    resultDiv,
    SetResultDiv,
    correct,
    pokemonName,
    pokemonType1,
    pokemonType2,
    SetResult,
    SetReload,
    reload,
    SetAnwser,
    SetRound,
    round,
    SetEndQuizz,
  }) => {

  const typeImages = {
    Eau: require("../assets/image/water.png"),
    Normal: require("../assets/image/normal.png"),
    Feu: require("../assets/image/fire.png"),
    Électrik: require("../assets/image/electric.png"),
    Plante: require("../assets/image/grass.png"),
    Ténèbres: require("../assets/image/dark.png"),
    Combat: require("../assets/image/fighting.png"),
    Psy: require("../assets/image/psychic.png"),
    Poison: require("../assets/image/poison.png"),
    Acier: require("../assets/image/steel.png"),
    Fée: require("../assets/image/fairy.png"),
    Dragon: require("../assets/image/dragon.png"),
    Glace: require("../assets/image/ice.png"),
    Sol: require("../assets/image/ground.png"),
    Insect: require("../assets/image/bug.png"),
    Spectre: require("../assets/image/ghost.png"),
    Roche: require("../assets/image/rock.png"),
    Vol: require("../assets/image/flying.png"),
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

  return (
    <>
      <div>
        <button
          onClick={(e) => { Show(resultDiv, SetResultDiv) }}
          className='resultButton'>
          {/* <img src={resultDiv ? UpArrow : downArrow} className="downArrow" /> */}
          <div style={{display: "flex",  flexDirection: 'row', textAlign :"center",alignItems:'center'}}><p style={{paddingRight: '20px'}}>It's</p>
            <p style={{ color: correct ? 'green' : 'red',}}>{pokemonName}</p>
          </div>
          <div>
            <img className="Img" src={typeImages[pokemonType1]} />
            <img className="Img" src={typeImages[pokemonType2]} />
          </div>
        </button>
      </div>
      <button onClick={Next} className="Button">NEXT</button>
    </>
  )






}
export default ResultSection;