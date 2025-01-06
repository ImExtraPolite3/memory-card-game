import { useEffect, useState } from 'react';

export default function CallApi() {
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
        .map((images, index) => {
          return <img key={index} src={images.image} alt="" />;
        })}
    </>
  );
}
