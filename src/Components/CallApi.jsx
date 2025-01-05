import { useEffect, useState } from 'react';

export default function CallApi() {
  const [callApi, setCallApi] = useState(null);

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters/students')
      .then((response) => response.json())
      .then((json) => setCallApi(json))
      .catch((error) => console.log(error));
  });

  return <div>{callApi}</div>;
}
