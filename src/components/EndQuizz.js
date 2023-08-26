import { useState, useEffect } from "react";
import ResultDiv from "./ResultDiv.js"
import axios from "axios";

export default function EndQuizz({
  score,
  pokemonsToGuess,
  ReturnToTitleScreen,
  GenPoke,
  SetGenPoke,
}) {

  const [pokedexPage, SetPokedexPage] = useState(false);

  const [pokedexName, SetPokedexName] = useState(null);
  const [pokedexId, SetPokedexId] = useState(null);
  const [pokedexHeight, SetPokedexHeight] = useState(null);
  const [pokedexWeight, SetPokedexWeight] = useState(null);

  const [pokedexType1, SetPokedexType1] = useState(null);
  const [pokedexType2, SetPokedexType2] = useState(null);

  const [pokedexSprite, SetPokedexSprite] = useState(null);

  const [pokedexStatsAtk, SetPokedexStatsAtk] = useState(null);
  const [pokedexStatsDef, SetPokedexStatsDef] = useState(null);
  const [pokedexStatsHP, SetPokedexStatsHP] = useState(null);
  const [pokedexStatsSpe_Atk, SetPokedexStatsSpe_Atk] = useState(null);
  const [pokedexStatsSpe_Def, SetPokedexStatsSpe_Def] = useState(null);
  const [pokedexStatsVit, SetPokedexStatsVit] = useState(null);

  const [pokedexTalent1, SetPokedexTalent1] = useState(null);
  const [pokedexTalent2, SetPokedexTalent2] = useState(null);
  const [pokedexTalent3, SetPokedexTalent3] = useState(null);



  const OpenPokedexPage = (SelectedPokemonName) => {
      SetPokedexPage(true)
      SetPokedexName(SelectedPokemonName)
      console.log(SelectedPokemonName)
    } 

    useEffect(() => {
      axios.get(`https://api-pokemon-fr.vercel.app/api/v1/pokemon/${pokedexName}`)
        .then((response) => {
          console.log(response)
      
          const name = response.data.name.fr;
          SetPokedexName(name)
          console.log(pokedexName)

          const id = response.data.id;
          SetPokedexId(id);
          console.log(pokedexId)

          const weight = response.data.weight;
          SetPokedexWeight(weight);
          console.log(pokedexWeight)

          const height = response.data.height;
          SetPokedexHeight(height);
          console.log(pokedexHeight)
  
          const type1 = response.data.types[0].name;
          SetPokedexType1(type1);
          console.log(pokedexType1)
    
          const type2 = response.data.types[1]?.name;
          SetPokedexType2(type2)
          console.log(pokedexType2)
    
          const sprite = response.data.sprites.regular;
          SetPokedexSprite(sprite);
          console.log(pokedexSprite)



          const statsAtk = response.data.stats.atk
          SetPokedexStatsAtk(pokedexStatsAtk)
          console.log(pokedexStatsAtk)


          const statsDef = response.data.stats.def
          SetPokedexStatsDef(statsDef)
          console.log(pokedexStatsDef)

          const statsHP = response.data.stats.hp
          SetPokedexStatsHP(statsHP)
          console.log(pokedexStatsHP)

          const statsSpe_Atk = response.data.stats.spe_atk
          SetPokedexStatsSpe_Atk(statsSpe_Atk)
          console.log( pokedexStatsSpe_Atk)

          const statsSpe_Def = response.data.stats.spe_def
          SetPokedexStatsSpe_Def(statsSpe_Def)
          console.log(pokedexStatsSpe_Def)

          const statsVit = response.data.stats.vit
          SetPokedexStatsVit(statsVit)
          console.log(pokedexStatsVit)

          const talent1 = response.data.talents[0].name
          SetPokedexTalent1(talent1)
          console.log(pokedexTalent1)

          const talent2 = response.data.talents[1]?.name
          SetPokedexTalent2(talent2)
          console.log(pokedexTalent2)

          const talent3 = response.data.talents[2]?.name
          SetPokedexTalent3(talent3)
          console.log(pokedexTalent3)

        }).catch(error => { console.error('Erreur Axios :', error); })
    },[pokedexName])
  
    const ClosePokedexPage = () => {
      SetPokedexPage(false)
      SetPokedexHeight(null)
      SetPokedexWeight(null)
      SetPokedexId(null)
      SetPokedexName(null)
      SetPokedexSprite(null)
      SetPokedexStatsAtk(null)
      SetPokedexStatsDef(null)
      SetPokedexStatsHP(null)
      SetPokedexStatsSpe_Atk(null)
      SetPokedexStatsSpe_Def(null)
      SetPokedexStatsVit(null)
      SetPokedexTalent1(null)
      SetPokedexTalent2(null)
      SetPokedexTalent3(null)

    }

  return (
    <>
      <div className="endQuizz" style={{ display: pokedexPage ? 'none' : 'block' }}>
        <h3>You got {score} out of 5 correct answers !</h3>
        <button onClick={ReturnToTitleScreen} className='Button'>GO TO MENU</button>
        <h4>List of pokemons in the quizz :</h4>

        {pokemonsToGuess && pokemonsToGuess.map(pokemon => {
          return (
            <div className="pokemonToGuessLi">
              <p  key={pokemon.id} className="pokemonToGuess">{pokemon.name}</p>
              <button onClick={(SelectedPokemonName) => OpenPokedexPage(pokemon.name)} className="PokedexButton">Pokedex</button> 
            </div>
          );
        })}
        
        
      </div>
      {pokedexPage &&
        <div>
          <button onClick={ClosePokedexPage} className="PokedexButton">Close</button>
          <div className="">Page pokedex du pokemon</div>
          {/* <img className="" src={pokedexSprite} alt="pokemonSprites" /> */}

          <p className="">{pokedexId}</p>
          <p className="">{pokedexName}</p>

          <p className="">{pokedexType1}</p>
          <p className="">{pokedexType2}</p>

          <p className="">{pokedexHeight}</p>
          <p className="">{pokedexWeight}</p>


          <p className="">{pokedexTalent1}</p>
          <p className="">{pokedexTalent2}</p>
          <p className="">{pokedexTalent3}</p>


          <p className="">{pokedexStatsAtk}</p>
          <p className="">{pokedexStatsDef}</p>
          <p className="">{pokedexStatsHP}</p>
          <p className="">{pokedexStatsSpe_Atk}</p>
          <p className="">{pokedexStatsSpe_Def}</p>
          <p className="">{pokedexStatsVit}</p>

        </div>
      }
    </>
  )
}