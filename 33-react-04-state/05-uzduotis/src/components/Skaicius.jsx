import { useRef } from "react";
import { useState } from "react";

const Skaicius = () => {
  const [skaicius, setSkaicius] = useState("");
  const skaiciusInputRef = useRef();

  const skaiciusInputHandler = (e) => {
    e.preventDefault();
    setSkaicius(skaiciusInputRef.current.valueAsNumber);
    skaiciusInputRef.current.value = "";
  };
  const isEven = () => (skaicius % 2 === 0 ? "Lyginis" : "Nelyginis");
  return (
    <div>
      <h2>Skaičius</h2>
      <form onSubmit={skaiciusInputHandler}>
        <label htmlFor="skaiciusInput">Įveskite skaičių: </label>
        <input
          type="number"
          id="skaiciusInput"
          ref={skaiciusInputRef}
        />
        <button type="submit">Įvesti</button>
      </form>
      {skaicius && (
        <p>
          <strong>Įvestas skaičius: </strong>
          {skaicius}
        </p>
      )}
      {skaicius && (
        <p>
          <strong>Skaičius yra: </strong>
          {isEven()}
        </p>
      )}
    </div>
  );
};

export default Skaicius;
