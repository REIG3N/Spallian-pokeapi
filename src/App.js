import { useState, useEffect } from "react";
import axios from "axios";
import downArrow from "./assets/image/downArrow.png"

const App = () => {
  const [quizz, SetQuizz] = useState(false);
  const [reload, SetReload] = useState(true);


  const [pokemonName, SetPokemonName] = useState('');
  const [pokemonSprites, SetPokemonSprites] = useState('')
  const [pokemonTypes, SetPokemonTypes] = useState([]);
  const [pokemonType1, SetPokemonType1] = useState([]);
  const [pokemonType2, SetPokemonType2] = useState([]);
  ;
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
        console.log(response.data.name)
        const name = response.data.name;
        console.log(name)
        SetPokemonName(name)
        const types = response.data.types.map(type => type.type.name); console.log(types[0]); console.log(types[1])
        SetPokemonTypes(types)
        const type1 = response.data.types[0].type.name;
        console.log(type1)
        SetPokemonType1(type1)
        const type2 = response.data.types[1]?.type.name;
        console.log(type2)
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
    <div className="container">
      <div className="titleScreen" style={{ display: quizz ? 'none' : 'block' }}>
        <h1>PokéQuizz</h1>
        <button onClick={(e) => { Show(quizz, SetQuizz) }}>Start the quizz</button>
      </div>

      <div className="quizzDiv" style={{ display: quizz ? 'block' : 'none' }}>
        <button onClick={(e) => { Show(quizz, SetQuizz) }}>go back</button>


        <div>
          <img src={pokemonSprites} style={{ width: '250px', height: '250px', mixBlendMode: "multiply", filter: result ? 'none' : 'brightness(0)' }} />
        </div>

        <div>Who's that pokémon ?</div>
        <input
          value={anwser}
          onChange={(e) => { SetAnwser(e.target.value) }}
        />

        <button onClick={Comparaison} style={{ display: result ? 'none' : 'block' }} >Answer</button>
        {result &&
          <>
            <div >
              <button
                onClick={(e) => { Show(resultDiv, SetResultDiv) }}
                className='resultButton' style={{ color: correct ? 'green' : 'red'}}>
                <img src={downArrow} className="downArrow" />
                It's {pokemonName}
                <img src={downArrow} className="downArrow" />
              </button>
              <div style={{ display: resultDiv ? 'flex' : 'none' }} className="resultDiv">
              <p>{pokemonType1} {pokemonType2}</p>
              <p>{pokemonAbilities}</p>
              </div>
            </div>




            <button onClick={Next} >Next</button>

          </>
        }


      </div>
    </div>
  );
}

export default App;