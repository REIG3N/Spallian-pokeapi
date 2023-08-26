import { useState } from "react";


export default function QuizzSection({ 
  ReturnToTitleScreen,
  round,
  pokemonSprites,
  result,
}) {
    const [isLoaded, setIsLoaded] = useState(false);
  
    const handleImageLoad = () => {
      setIsLoaded(false);
      setIsLoaded(true);
    };
  
    
  return (
    <>
      <div className="quizzHeader">
        <button onClick={ReturnToTitleScreen} className="returnButton">Return</button>
        <h3 >PokéQuizz</h3>
        <p>({round}/5)</p>
      </div>
      <div className="imageDiv">
      {!isLoaded && <p>Chargement en cours...</p>}
        <img 
        src={pokemonSprites} 
        style={{ filter: result ? 'none' : 'brightness(0)' , display: isLoaded ? 'flex' : 'none' }} 
        className="pokemonSprite"
        onLoad={handleImageLoad}
        alt="pokemonSprites"
        />
      </div>
    </>
  )
}