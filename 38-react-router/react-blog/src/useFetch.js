import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isKraunasi, setIsKraunasi] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Nepavyko gauti duomenų.");
        }
        return res.json();
      })

      .then((data) => {
        setData(data);
        setIsKraunasi(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsKraunasi(false);
      });
  }, [url]);

  return { data, isKraunasi, error };
};

export default useFetch;
