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
  const random = Math.floor(Math.random() * 25);

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
        .map(() => {
          return (
            <Image
              key={callApi[random].id}
              characterId={callApi[random].id}
              imgSource={callApi[random].image}
              onClick={onClick}
              characterName={callApi[random].name}
            />
          );
        })}
    </>
  );
}
