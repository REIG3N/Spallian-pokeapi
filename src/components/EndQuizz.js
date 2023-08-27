import { useState, useEffect } from "react";
import axios from "axios";
import '../styles/endquizz.css';


export default function EndQuizz({
  score,
  pokemonsToGuess,
  ReturnToTitleScreen,
  typeImages,
}) {

  const [pokedexPage, SetPokedexPage] = useState(false);

  const [pokedexName, SetPokedexName] = useState(null);
  const [pokedexCategory, SetPokedexCategory] = useState(null);
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
        const weight = response.data.weight;
        SetPokedexWeight(weight);
        const height = response.data.height;
        SetPokedexHeight(height);
        const category = response.data.category;
        SetPokedexCategory(category);
        const type1 = response.data.types[0].name;
        SetPokedexType1(type1);
        const type2 = response.data.types[1]?.name;
        SetPokedexType2(type2)
        const sprite = response.data.sprites.regular;
        SetPokedexSprite(sprite);
        const statsAtk = response.data.stats.atk
        SetPokedexStatsAtk(statsAtk)
        const statsDef = response.data.stats.def
        SetPokedexStatsDef(statsDef)
        const statsHP = response.data.stats.hp
        SetPokedexStatsHP(statsHP)
        const statsSpe_Atk = response.data.stats.spe_atk
        SetPokedexStatsSpe_Atk(statsSpe_Atk)
        const statsSpe_Def = response.data.stats.spe_def
        SetPokedexStatsSpe_Def(statsSpe_Def)
        const statsVit = response.data.stats.vit
        SetPokedexStatsVit(statsVit)
        const talent1 = response.data.talents[0].name
        SetPokedexTalent1(talent1)
        const talent2 = response.data.talents[1]?.name
        SetPokedexTalent2(talent2)
        const talent3 = response.data.talents[2]?.name
        SetPokedexTalent3(talent3)
      }).catch(error => { console.error('Erreur Axios :', error); })
  }, [pokedexName])

  const ClosePokedexPage = () => {
    SetPokedexPage(false)
    SetPokedexHeight(null)
    SetPokedexWeight(null)
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
    SetPokedexCategory(null)

  }

  return (
    <>
      <div className="endQuizz" style={{ display: pokedexPage ? 'none' : 'block' }}>
        <h3>Vous avez obtenu {score} sur 5 réponses correctes !</h3>
        <button onClick={ReturnToTitleScreen} className='Button'>RETOUR MENU</button>
        <h4>Liste des pokémons du quiz :</h4>

        {pokemonsToGuess && pokemonsToGuess.map(pokemon => {
          return (
            <div className="pokemonToGuessLi">
              <p key={pokemon.id} className="pokemonToGuess">{pokemon.name}</p>
              <button onClick={(SelectedPokemonName) => OpenPokedexPage(pokemon.name)} className="pokedexButton">Pokedex</button>
            </div>
          );
        })}
      </div>

      {pokedexPage &&
        <div>
          <button onClick={ClosePokedexPage} className="pokedexButton">Close</button>

          <div className="pokedexContainer">
            <div className="imageDiv">
              <img
                src={pokedexSprite}
                className="pokemonSprite"
                alt="pokemonpokedexSpriteSprit"
              />
            </div>

            <div>
              <div className="pokedexTitle">
                <p className="pokedexText">{pokedexName}</p>
                <p className="">{pokedexCategory}</p>
              </div>


              <div className="pokedexInfos">
                <p className="pokedexText">Description</p>

                <div className="pokedexInfosDiv">
                  <div className="pokedexDesc">
                    <p className="">{pokedexHeight}</p>
                    <p className="">{pokedexWeight}</p>
                  </div>
                  <div className="pokedexTypes">
                    <img className="Img" src={typeImages[pokedexType1]} />
                    <img className="Img" style={{ display: pokedexType2 ? 'block' : 'none' }} src={typeImages[pokedexType2]} />
                  </div>
                </div>
              </div>

              <div className="pokedexTalents">
                <p className="pokedexText">Talents</p>

                <p className="">{pokedexTalent1}</p>
                <p className="">{pokedexTalent2}</p>
                <p className="">{pokedexTalent3}</p>
              </div>
            </div>

            <div className="pokedexStats" >
              <p className="pokedexText">Statistiques</p>

              <div className="pokedexStatDiv">
                <div className="pokedexStatInfos">
                  <p className="pokedexStat">HP:</p>
                  <p className="">{pokedexStatsHP}</p>
                </div>
                <div className="pokedexStatBarContainer">
                  <div className="statBar">
                    <div className="statValue" style={{ width: pokedexStatsHP }}></div>
                  </div>
                </div>
              </div>

              <div className="pokedexStatDiv">
                <div className="pokedexStatInfos">
                  <p className="pokedexStat">Atk:</p>
                  <p className="">{pokedexStatsAtk}</p>
                </div>
                <div className="pokedexStatBarContainer">
                  <div className="statBar">
                    <div className="statValue" style={{ width: pokedexStatsAtk }}></div>
                  </div>
                </div>
              </div>

              <div className="pokedexStatDiv">
                <div className="pokedexStatInfos">
                  <p className="pokedexStat">Def:</p>
                  <p className="">{pokedexStatsDef}</p>
                </div>
                <div className="pokedexStatBarContainer">
                  <div className="statBar">
                    <div className="statValue" style={{ width: pokedexStatsDef }}></div>
                  </div>
                </div>
              </div>

              <div className="pokedexStatDiv">
                <div className="pokedexStatInfos">
                  <p className="pokedexStat">SpeAtk:</p>
                  <p className="">{pokedexStatsSpe_Atk}</p>
                </div>
                <div className="pokedexStatBarContainer">
                  <div className="statBar">
                    <div className="statValue" style={{ width: pokedexStatsSpe_Atk }}></div>
                  </div>
                </div>
              </div>


              <div className="pokedexStatDiv">
                <div className="pokedexStatInfos">
                  <p className="pokedexStat">SpeDef:</p>
                  <p className="">{pokedexStatsSpe_Def}</p>
                </div>
                <div className="pokedexStatBarContainer">
                  <div className="statBar">
                    <div className="statValue" style={{ width: pokedexStatsSpe_Def }}></div>
                  </div>
                </div>
              </div>

              <div className="pokedexStatDiv">
                <div className="pokedexStatInfos">
                  <p className="pokedexStat">Vitesse: </p>
                  <p className=""> {pokedexStatsVit}</p>
                </div>
                <div className="pokedexStatBarContainer">
                  <div className="statBar">
                    <div className="statValue" style={{ width: pokedexStatsSpe_Def }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  )
}