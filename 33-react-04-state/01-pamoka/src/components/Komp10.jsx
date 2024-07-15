import { useState } from "react";

const Komp10 = () => {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const addNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    const newNumbers = [...numbers, randomNumber];
    setNumbers(newNumbers);
  };

  return (
    <div>
      <h2>Sarasas:</h2>
      <ul>
        {numbers.map((number, i) => (
          <li key={i}>{number}</li>
        ))}
      </ul>
      <button onClick={addNumber}>Add number</button>
    </div>
  );
};

export default Komp10;
