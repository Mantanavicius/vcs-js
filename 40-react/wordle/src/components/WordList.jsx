import { useEffect, useState } from "react";
import Wordle from "./Wordle";

const WordList = () => {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/solutions")
      .then((res) => res.json())
      .then((json) => {
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);

  return (
    <div className="solution">{solution && <Wordle solution={solution} />}</div>
  );
};

export default WordList;
