import { useState } from 'react';
import GetCharacters from './Components/CallApi';

function App() {
  const [trackCharacter, setTrack] = useState([]);
  const [clickImage, setClick] = useState('');
  const [score, setScore] = useState(0);

  const handleClick = (e) => {
    setClick(e.target.textContent);

    setTrack((prevChar) => [...prevChar, e.target.textContent]);

    trackCharacter.forEach((char) => {
      if (char !== e.target.textContent) {
        setScore((prevScore) => prevScore + 1);
      } else {
        setScore(0);
        setTrack([]);
      }
    });
  };

  return (
    <>
      {console.log(score)}
      {console.log(clickImage)}
      {console.log(trackCharacter)}
      <GetCharacters onClick={handleClick} />
    </>
  );
}

export default App;
