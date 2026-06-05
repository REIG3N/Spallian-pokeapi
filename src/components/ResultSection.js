import { useState } from "react";
import '../styles/resultsection.css';

const ResultSection = ({
  Show,
  resultDiv,
  SetResultDiv,
  correct,
  pokemonName,
  pokemonType1,
  pokemonType2,
  SetResult,
  SetAnwser,
  SetRound,
  round,
  SetEndQuizz,
  pokemonsToGuess,
  SetPokemonsToGuess,
  NewPokemon,
  currentGenPoke,
  typeImages,
}) => {

  const Next = (gen) => {
    const PokemonToRegister = {
      id: round,
      name: pokemonName,
      type1: pokemonType1,
      type2: pokemonType2,
    };
    SetPokemonsToGuess([...pokemonsToGuess, PokemonToRegister]);
    SetResult(false);
    SetResultDiv(false);
    SetAnwser('');
    if (round === 5) {
      SetRound(1);
      SetEndQuizz(true);
    } else {
      SetRound(round + 1);
      NewPokemon(gen);
    }
  };

  return (
    <>
      <div onClick={() => Show(resultDiv, SetResultDiv)} className='resultDiv'>
        <div className="resultText">
          <p className="resultP">C'est</p>
          <p style={{ color: correct ? 'green' : 'red' }}>{pokemonName}</p>
        </div>
        <div>
          <img className="Img" src={typeImages[pokemonType1]} alt={pokemonType1} />
          {pokemonType2 &&
            <img className="Img" src={typeImages[pokemonType2]} alt={pokemonType2} />
          }
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {['Gen1','Gen2','Gen3','Gen4','Gen5','Gen6','Gen7','Gen8','Gen9','AllGen'].map(gen => (
          <button
            key={gen}
            onClick={() => Next(gen)}
            className="Button"
            style={{ display: currentGenPoke === gen ? 'block' : 'none' }}
          >
            NEXT
          </button>
        ))}
      </div>
    </>
  );
};

export default ResultSection;
