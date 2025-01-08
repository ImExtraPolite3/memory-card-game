import { useEffect, useState } from 'react';

function Image({ characterId, imgSource, onClick, characterName }) {
  return (
    <div id={characterId} onClick={onClick}>
      <img src={imgSource} alt="" />
      <p>{characterName}</p>
    </div>
  );
}

export default function GetCharacters({ onClick, num }) {
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
        .map((_, index) => {
          return (
            <Image
              key={callApi[index].id}
              characterId={callApi[index].id}
              imgSource={callApi[index].image}
              onClick={onClick}
              characterName={callApi[index].name}
            />
          );
        })}
    </>
  );
}
