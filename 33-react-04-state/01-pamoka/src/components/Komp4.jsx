import { useState } from "react";

const Komp4 = () => {
  const [skaicius, setSkaicius] = useState(10);
  const changeNumberHandler = (change) => {
    if (change === 0) {
      setSkaicius(0);
    } else {
      setSkaicius(skaicius + change);
    }
  };
  return (
    <div>
      <h2>Skaiciu keitinejimas</h2>
      <button onClick={() => changeNumberHandler(-5)}>-5</button>
      <button onClick={() => changeNumberHandler(-1)}>-1</button>
      <button onClick={() => changeNumberHandler(0)}>0</button>
      <button onClick={() => changeNumberHandler(1)}>+1</button>
      <button onClick={() => changeNumberHandler(5)}>+5</button>
      <p>Dabartine reiksme: {skaicius}</p>
    </div>
  );
};

export default Komp4;
