import { useState } from 'react';
import GetCharacters from './Components/CallApi';

function App() {
  const [trackCharacter, setTrack] = useState([]);
  const [score, setScore] = useState(0);
  const [clickImage, setClick] = useState('');

  const handleClick = (e) => {
    setTrack((prevChar) => [...prevChar, e.target.textContent]);
    setClick(e.target.textContent);

    trackCharacter.forEach((char) => {
      if (char === clickImage) {
        // setScore((prevScore) => prevScore + 1);
        // setTrack((prevChar) => [...prevChar, clickImage]);
        setTrack([]);

        // setScore(0);
      }
    });

    setClick(e.target.textContent);
  };

  return (
    <>
      {console.log(trackCharacter)}
      {console.log(score)}
      <GetCharacters onClick={handleClick} />
    </>
  );
}

export default App;
