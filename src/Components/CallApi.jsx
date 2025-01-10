import { useEffect, useState } from 'react';

function Image({ characterId, imgSource, onClick, characterName }) {
  return (
    <div id={characterId} onClick={onClick}>
      <img src={imgSource} alt="" />
      <p>{characterName}</p>
    </div>
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
