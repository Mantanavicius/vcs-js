import { useRef } from "react";
import { useState } from "react";

const MedzioApdirbejas = () => {
  const [medziagos, setMedziagos] = useState("");
  const [valandos, setValandos] = useState("");
  const [uzdarbis, setUzdarbis] = useState("");
  const medziagosInputRef = useRef();
  const valandosInputRef = useRef();
  const uzdarbisInputRef = useRef();
  const formInputsHandler = (e) => {
    e.preventDefault();
    setMedziagos(medziagosInputRef.current.valueAsNumber);
    setValandos(valandosInputRef.current.valueAsNumber);
    setUzdarbis(uzdarbisInputRef.current.valueAsNumber);
    medziagosInputRef.current.value = "";
    valandosInputRef.current.value = "";
    uzdarbisInputRef.current.value = "";
  };
  const totalCost = () => valandos * uzdarbis + medziagos;
  const marketValue = () => totalCost() * 1.3;
  return (
    <div>
      <h2>Medžio Apdirbėjas</h2>
      <form onSubmit={formInputsHandler}>
        <div>
          <label htmlFor="medziagos">Medžiagų kaina: </label>
          <input
            type="number"
            id="medziagos"
            step={0.01}
            ref={medziagosInputRef}
          />
        </div>
        <div>
          <label htmlFor="valandos">
            Kiek valandų išdirbta prie projekto:{" "}
          </label>
          <input
            type="number"
            id="valandos"
            step={0.01}
            ref={valandosInputRef}
          />
        </div>
        <div>
          <label htmlFor="uzdarbis">Valandinis uždarbis: </label>
          <input
            type="number"
            id="uzdarbis"
            step={0.01}
            ref={uzdarbisInputRef}
          />
        </div>
        <div>
          <button type="submit">Įvesti</button>
        </div>
      </form>
      {medziagos && valandos && uzdarbis && (
        <div>
          <p>
            <strong>Duoti duomenys:</strong>
          </p>
          <p>Medžiagų kaina: {medziagos} €</p>
          <p>Išdirbta valandų: {valandos} h</p>
          <p>Valandinis uždarbis: {uzdarbis} €</p>
        </div>
      )}
      {medziagos && valandos && uzdarbis && (
        <div>
          <p>
            <strong>Projekto kaina iš viso:</strong>
          </p>
          <p>{totalCost()} €</p>
        </div>
      )}
      {medziagos && valandos && uzdarbis && (
        <div>
          <p>
            <strong>Projekto kaina pirkėjui:</strong>
          </p>
          <p>{marketValue()}€</p>
        </div>
      )}
    </div>
  );
};

export default MedzioApdirbejas;
