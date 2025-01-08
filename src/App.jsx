import { useState } from 'react';
import GetCharacters from './Components/CallApi';

function App() {
  const [trackCharacter, setTrack] = useState([]);
  const [clickImage, setClick] = useState('');
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleClick = (e) => {
    setClick(e.target.textContent);

    setTrack((prevChar) => [...prevChar, e.target.textContent]);

    setScore((prevScore) => prevScore + 1);

    setBestScore((prevBest) => {
      if (prevBest === score) {
        return prevBest + 1;
      } else {
        return prevBest;
      }
    });

    trackCharacter.forEach((char) => {
      if (char === e.target.textContent) {
        setScore(0);
        setTrack([]);
        setBestScore((prevBest) => prevBest - 1);
      }
    });
  };

  return (
    <>
      <div>{`Current Score: ${score}`}</div>
      <div>{`Best Score: ${bestScore}`}</div>

      <GetCharacters onClick={handleClick} />
    </>
  );
}

export default App;
