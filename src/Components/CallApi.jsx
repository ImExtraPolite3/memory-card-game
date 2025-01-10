import { useEffect, useState } from 'react';

function Image({ characterId, imgSource, onClick, characterName }) {
  return (
    <button id={characterId} onClick={onClick} value={characterName}>
      <img src={imgSource} alt={characterName} />
      <p>{characterName}</p>
    </button>
  );
}

export default function GetCharacters({ onClick }) {
  const [callApi, setCallApi] = useState([]);

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then((response) => response.json())
      .then((json) => setCallApi(json))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      {callApi
        .filter((api) => api.image !== '')
        .map((image) => ({ image, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ image }) => {
          return (
            <Image
              key={image.id}
              characterId={image.id}
              imgSource={image.image}
              onClick={onClick}
              characterName={image.name}
            />
          );
        })}
    </>
  );
}
