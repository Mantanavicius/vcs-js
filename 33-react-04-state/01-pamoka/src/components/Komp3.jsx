import { useState } from "react";

const Komp3 = () => {
  const [skaicius, setSkaicius] = useState(0);
  const addOne = () => {
    setSkaicius(skaicius + 1);
  };
  const addFive = () => {
    setSkaicius(skaicius + 5);
  };
  const setZero = () => {
    setSkaicius(0);
  };
  const subtractFive = () => {
    setSkaicius(skaicius - 5);
  };
  const subtractOne = () => {
    setSkaicius(skaicius - 1);
  };
  return (
    <div>
      <h2>Skaiciu keitinejimas</h2>
      <button onClick={addFive}>+5</button>
      <button onClick={addOne}>+1</button>
      <button onClick={setZero}>0</button>
      <button onClick={subtractOne}>-1</button>
      <button onClick={subtractFive}>-5</button>
      <p>Dabartine reiksme: {skaicius}</p>
    </div>
  );
};

export default Komp3;
