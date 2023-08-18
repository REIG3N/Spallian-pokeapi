import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [quizz, SetQuizz] = useState(false);
  const [reload, SetReload] = useState(true);
  const [randpoke, SetRandPoke] = useState('');
  const [ pokemonName, SetPokemonName ] = useState('');

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
        const abilities = response.data.abilities.map(ability => ability.ability.name);
        console.log(abilities)
        const types = response.data.types.map(type => type.type.name);
        console.log(types)
        const sprites = response.data.sprites.front_default
        console.log(sprites)
      }
      )
  }, [reload])


  return (
    <div className="container">
      <div className="titleScreen" style={{ display: quizz ? 'none' : 'block' }}>
        <h1>PokéQuizz</h1>
        <button onClick={(e) => { Show(quizz, SetQuizz) }}>Start the quizz</button>
      </div>
      <div className="quizzDiv" style={{ display: quizz ? 'block' : 'none' }}>
        <button onClick={(e) => { Show(reload, SetReload) }}>random</button>
        <div>pokemon: {pokemonName}  </div>
        <button onClick={(e) => { Show(quizz, SetQuizz) }}>go back</button>
      </div>
    </div>
  );
}

export default App;