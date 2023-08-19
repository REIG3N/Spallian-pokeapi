import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [quizz, SetQuizz] = useState(false);
  const [reload, SetReload] = useState(true);

  const [pokemonName, SetPokemonName] = useState('');
  const [pokemonTypes, SetPokemonTypes] = useState([]);
  const [pokemonSprites, SetPokemonSprites] = useState('');
  const [pokemonAbilities, SetPokemonAbilities] = useState([]);

  const [anwser, SetAnwser] = useState('');
  const [correct, SetCorrect] = useState(true);
  const [result, SetResult] = useState(false);

  const Show = (stateToChange, SetStateToChange) => {
    !stateToChange ? SetStateToChange(!stateToChange) : SetStateToChange(!stateToChange)
  }

  useEffect(() => {
    const randpoke = Math.floor(Math.random() * 1010) + 1;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${randpoke}`)
      .then((response) => {
        console.log(response)
        console.log(response.data.name)
        const name = response.data.name;
        console.log(name)
        SetPokemonName(response.data.name)
        const types = response.data.types.map(type => type.type.name); console.log(types)
        SetPokemonTypes(types)
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


        <div style={{display: 'flex' }}>
          <img src={pokemonSprites} style={{ width: '250px', height: '250px', mixBlendMode: "multiply", filter: result ? 'none' :'brightness(0)' }} />
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
              <p style={{ color: correct ? 'green' : 'red' }}>{pokemonName}</p>
              <div style={{ backgroundColor: 'lightblue' }}>
                <p>{pokemonTypes}</p>
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