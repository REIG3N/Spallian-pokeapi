import { useState } from "react";
import pokemonDB from "../data/pokemon.json";
import '../styles/endquizz.css';

export default function EndQuizz({
  score,
  pokemonsToGuess,
  ReturnToTitleScreen,
  typeImages,
}) {
  const [pokedexPage, SetPokedexPage] = useState(false);
  const [selectedPokemon, SetSelectedPokemon] = useState(null);

  const OpenPokedexPage = (name) => {
    const pokemon = pokemonDB.find(p => p.name === name);
    SetSelectedPokemon(pokemon ?? null);
    SetPokedexPage(true);
  };

  const ClosePokedexPage = () => {
    SetPokedexPage(false);
    SetSelectedPokemon(null);
  };

  return (
    <>
      <div className="endQuizz" style={{ display: pokedexPage ? 'none' : 'block' }}>
        <h3>Vous avez obtenu {score} sur 5 réponses correctes !</h3>
        <button onClick={ReturnToTitleScreen} className='Button'>RETOUR MENU</button>
        <h4>Liste des pokémons du quiz :</h4>

        {pokemonsToGuess && pokemonsToGuess.map(pokemon => (
          <div className="pokemonToGuessLi" key={pokemon.id}>
            <p className="pokemonToGuess">{pokemon.name}</p>
            <button onClick={() => OpenPokedexPage(pokemon.name)} className="pokedexButton">Pokedex</button>
          </div>
        ))}
      </div>

      {pokedexPage && selectedPokemon &&
        <div>
          <button onClick={ClosePokedexPage} className="pokedexButton">Close</button>

          <div className="pokedexContainer">
            <div className="imageDiv">
              <img
                src={selectedPokemon.sprite}
                className="pokemonSprite"
                alt={selectedPokemon.name}
              />
            </div>

            <div>
              <div className="pokedexTitle">
                <p className="pokedexText">{selectedPokemon.name}</p>
                <p>{selectedPokemon.category}</p>
              </div>

              <div className="pokedexInfos">
                <p className="pokedexText">Description</p>
                <div className="pokedexInfosDiv">
                  <div className="pokedexDesc">
                    <p>{selectedPokemon.height}</p>
                    <p>{selectedPokemon.weight}</p>
                  </div>
                  <div className="pokedexTypes">
                    <img className="Img" src={typeImages[selectedPokemon.types[0]]} alt={selectedPokemon.types[0]} />
                    {selectedPokemon.types[1] &&
                      <img className="Img" src={typeImages[selectedPokemon.types[1]]} alt={selectedPokemon.types[1]} />
                    }
                  </div>
                </div>
              </div>

              <div className="pokedexTalents">
                <p className="pokedexText">Talents</p>
                {selectedPokemon.talents.map((t, i) => <p key={i}>{t}</p>)}
              </div>
            </div>

            <div className="pokedexStats">
              <p className="pokedexText">Statistiques</p>

              {[
                ['HP',      selectedPokemon.stats?.hp],
                ['Atk',     selectedPokemon.stats?.atk],
                ['Def',     selectedPokemon.stats?.def],
                ['SpeAtk',  selectedPokemon.stats?.spe_atk],
                ['SpeDef',  selectedPokemon.stats?.spe_def],
                ['Vitesse', selectedPokemon.stats?.vit],
              ].map(([label, val]) => (
                <div className="pokedexStatDiv" key={label}>
                  <div className="pokedexStatInfos">
                    <p className="pokedexStat">{label}:</p>
                    <p>{val}</p>
                  </div>
                  <div className="pokedexStatBarContainer">
                    <div className="statBar">
                      <div className="statValue" style={{ width: val }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </>
  );
}
