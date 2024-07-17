import { useState } from "react";
import CounterMygtukai from "./CounterMygtukai";

const CounterTev = () => {
  const [skaicius, setSkaicius] = useState(0);
  const getSkaicius = (num) => {
    setSkaicius(skaicius+num);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Paspaudimų skaičius: {skaicius}</p>
      <CounterMygtukai skaicius={getSkaicius} />
    </div>
  );
};

export default CounterTev;
