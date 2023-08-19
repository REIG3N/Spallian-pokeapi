import { useState, useEffect } from "react";
import axios from "axios";
import downArrow from "./assets/image/downArrow.png"
import titleScreen from "./assets/image/title.png"

const App = () => {
  const [quizz, SetQuizz] = useState(false);
  const [reload, SetReload] = useState(true);


  const [pokemonName, SetPokemonName] = useState('');
  const [pokemonSprites, SetPokemonSprites] = useState('')
  const [pokemonType1, SetPokemonType1] = useState("");
  const [pokemonType2, SetPokemonType2] = useState([]);
  const [pokemonAbilities, SetPokemonAbilities] = useState([]);

  const [anwser, SetAnwser] = useState('');
  const [correct, SetCorrect] = useState(true);
  const [result, SetResult] = useState(false);
  const [resultDiv, SetResultDiv] = useState(false);
  const [round, SetRound] = useState(1);
  const [score, SetScore] = useState(0);
  const [endQuizz, SetEndQuizz] = useState(false);

  const Show = (stateToChange, SetStateToChange) => {
    !stateToChange ? SetStateToChange(!stateToChange) : SetStateToChange(!stateToChange)
  }

  useEffect(() => {
    const randpoke = Math.floor(Math.random() * 1009) + 1;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randpoke}`)
      .then((response) => {
        console.log(response)
        const name = response.data.name;
        console.log(name)
        SetPokemonName(name)
        const type1 = response.data.types[0].type.name;
        SetPokemonType1(type1)
        const type2 = response.data.types[1]?.type.name;
        SetPokemonType2(type2)
        const sprites = response.data.sprites.front_default
        SetPokemonSprites(sprites)
        const abilities = response.data.abilities.map(ability => ability.ability.name);
        SetPokemonAbilities(abilities)
      }
      )
  }, [reload])

  const Start = () => {
    Show(quizz, SetQuizz)
    SetRound(1)
    SetEndQuizz(false)
    SetScore(0)
    SetResult(false)

  }

  const Comparaison = () => {
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
    <div className="appContainer" >
      <div className="menuScreen" style={{ display: quizz ? 'none' : 'block' }}>
        <div>
          <img src={titleScreen} className="titleScreen" />

        </div>
        <button onClick={Start} className='Button' >Start the quizz</button>
      </div>

      <div className="quizzDiv" style={{ display: quizz ? 'block' : 'none' }}>
        <div className="quizzContainer"  >
          <div style={{ display: endQuizz ? 'none' : 'block' }}>
            <div className="quizzHeader">
              <button onClick={(e) => { Show(quizz, SetQuizz) }} className="returnButton">Return</button>
              <h2 className="text">PokéQuizz</h2>
              <p>({round}/5)</p>
            </div>
            <div className="imageDiv">
              <img src={pokemonSprites} style={{ width: '250px', height: '250px', mixBlendMode: "multiply", filter: result ? 'none' : 'brightness(0)' }} />
            </div>
          </div>


          <div className="FormDiv" style={{ display: endQuizz ? 'none' : 'block' }}>
            <div className="questionSection" style={{ display: result ? 'none' : 'flex' }}>
              <h3 className="text">Who's that pokémon ?</h3>
              <input className="anwserInput" value={anwser} onChange={(e) => { SetAnwser(e.target.value) }} />
              <button onClick={Comparaison} className="Button">Answer</button>
            </div>
            <div className="resultSection">
              {result && !endQuizz &&
                <>
                  <div >
                    <button
                      onClick={(e) => { Show(resultDiv, SetResultDiv) }}
                      className='resultButton' style={{ color: correct ? 'green' : 'red' }}>
                      <img src={downArrow} className="downArrow" />
                      It's {pokemonName}
                      <img src={downArrow} className="downArrow" />
                    </button>
                    <div style={{ display: resultDiv ? 'flex' : 'none' }} className="resultDiv">
                      <p>{pokemonType1} {pokemonType2}</p>
                      <p>{pokemonAbilities}</p>
                    </div>
                  </div>
                  <button onClick={Next} className="Button">Next</button>
                </>
              }
            </div>
          </div>
          {endQuizz && !result &&
            <div className="endQuizz">
              <h3 className="text">"You got {score} out of 5 correct answers !</h3>
              <button onClick={(e) => { Show(quizz, SetQuizz) }} className='Button' >Try again</button>

            </div>
          }
        </div>

      </div>




    </div>
  );
}

export default App;