import { useState } from 'react';
import GetCharacters from './Components/CallApi';

function App() {
  const [score, setScore] = useState(0);
  const [clickImage, setClick] = useState('');

  const handleClick = (e) => {
    setClick(e.target.textContent);

    if (clickImage === e.target.textContent) {
      setScore((prevNum) => prevNum + 1);
    }
  };

  return (
    <>
      <div>{score}</div>
      <GetCharacters onClick={handleClick} />
    </>
  );
}

export default App;
