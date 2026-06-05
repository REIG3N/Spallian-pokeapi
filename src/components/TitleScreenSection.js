import titleImg from "../assets/image/title.png"
import MenuScreenSection from "./MenuScreenSection.js"

export default function TitleScreenSection({
  SetQuizz,
  SetRound,
  SetEndQuizz,
  SetScore,
  SetResult,
  SetPokemonsToGuess,
  select,
  SetSelect,
  NewPokemon,
}) {

  const Select = () => {
    SetSelect(true);
    SetRound(1);
    SetEndQuizz(false);
    SetScore(0);
    SetResult(false);
    SetPokemonsToGuess([]);
  };

  return (
    <>
      <div style={{ display: select ? 'none' : 'block' }}>
        <div className="titleScreen">
          <img src={titleImg} className="titleImg" alt="title" />
        </div>
        <button onClick={Select} className='Button'>SELECT</button>
      </div>
      <div style={{ display: select ? 'block' : 'none' }}>
        <MenuScreenSection
          SetQuizz={SetQuizz}
          SetRound={SetRound}
          SetEndQuizz={SetEndQuizz}
          SetScore={SetScore}
          SetResult={SetResult}
          SetPokemonsToGuess={SetPokemonsToGuess}
          NewPokemon={NewPokemon}
        />
      </div>
    </>
  );
}
