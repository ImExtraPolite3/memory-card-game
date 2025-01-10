import { useState } from 'react';
import GetCharacters from './Components/CallApi';

function App() {
  const [trackCharacter, setTrack] = useState([]);
  const [clickImage, setClick] = useState('');
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleClick = (e) => {
    const value = e.currentTarget.value;

    setClick(value);
    setTrack((prevChar) => [...prevChar, value]);
    setScore((prevScore) => prevScore + 1);
    setBestScore((prevBest) => (prevBest === score ? prevBest + 1 : prevBest));

    trackCharacter.forEach((char) => {
      if (char === value) {
        setScore(0);
        setTrack([]);
        setBestScore((prevBest) => prevBest - 1);
      }
    });
  };

  return (
    <>
      {console.log(clickImage)}
      {console.log(trackCharacter)}
      <div>
        <h1>Harry Potter Memory Game</h1>
      </div>
      <div>{`Current Score: ${score}`}</div>
      <div>{`Best Score: ${bestScore}`}</div>
      <div className="gameboard">
        <GetCharacters onClick={handleClick} />
      </div>
    </>
  );
}

export default App;
