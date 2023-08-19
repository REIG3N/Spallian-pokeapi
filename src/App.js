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

  const Comparaison = () => {
    SetResult(true)
    SetAnwser('')

    if (anwser === pokemonName) {
      console.log('WIN')
      SetCorrect(true)
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

  }



  return (
    <div className="appContainer" >
      <div className="menuScreen" style={{ display: quizz ? 'none' : 'block' }}>
        <div>
          <img src={titleScreen} className="titleScreen" />

        </div>
        <button onClick={(e) => { Show(quizz, SetQuizz) }} className='Button' >Start the quizz</button>
      </div>

      <div className="quizzDiv" style={{ display: quizz ? 'block' : 'none' }}>
        <div className="quizzContainer">
          <div>
            <div className="quizzHeader">
              <button onClick={(e) => { Show(quizz, SetQuizz) }} className="returnButton">Return</button>
              <h2>PokéQuizz</h2>
              <p>(5/5)</p>
            </div>
            <div className="imageDiv">
              <img src={pokemonSprites} style={{ width: '250px', height: '250px', mixBlendMode: "multiply", filter: result ? 'none' : 'brightness(0)' }} />
            </div>
          </div>


          <div className="FormDiv">
            <div className="questionSection" style={{ display: result ? 'none' : 'flex' }}>
              <h3 className="questionText">Who's that pokémon ?</h3>
              <input className="anwserInput" value={anwser} onChange={(e) => { SetAnwser(e.target.value) }} />
              <button onClick={Comparaison} className="Button">Answer</button>
            </div>
            <div className="resultSection">
              {result &&
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
        </div>

      </div>




    </div>
  );
}

export default App;