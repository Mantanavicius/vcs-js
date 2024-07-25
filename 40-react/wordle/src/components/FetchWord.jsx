import { useState, useEffect } from "react";
import axios from "axios";
import Wordle from "./Wordle";

const FetchWord = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "https://wordle-today.p.rapidapi.com/today",
        headers: {
          "x-rapidapi-key":
            "16ab5ce59dmsheae0abbbd8fbdafp18c00djsn819dc06e569b",
          "x-rapidapi-host": "wordle-today.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        setSolution(response.data.today);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return <div>{solution && <Wordle solution={solution} />}</div>;
};

export default FetchWord;
