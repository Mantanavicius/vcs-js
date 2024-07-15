import { useState } from "react";

const Komp7 = () => {
  const [pirmas, SetPirmas] = useState("");
  const [antras, SetAntras] = useState("");
  const pirmasHandler = (e) => {
    SetPirmas(e.target.value);
  };
  const antrasHandler = (e) => {
    SetAntras(e.target.value);
  };
  const ilgesnis = () => {
    if (pirmas.length > antras.length) {
      return pirmas;
    } else if (pirmas.length < antras.length) {
      return antras;
    } else {
      return "Abu zodziai yra vienodo ilgio";
    }
  };
  return (
    <div>
      <h2>Ilgnesnis zodis</h2>
      <div>
        <label htmlFor="pirmasInput">Pirmas:</label>
        <input
          type="text"
          id="pirmasInput"
          onChange={pirmasHandler}
        />
      </div>
      <div>
        <label htmlFor="antrasInput">Antras:</label>
        <input
          type="text"
          id="antrasInput"
          onChange={antrasHandler}
        />
      </div>
      <p>
        <strong>Įvesti žodžiai:</strong> &nbsp;{pirmas} ir {antras}
      </p>
      <p>
        <strong>Ilgesnis žodis:</strong> {ilgesnis()}
      </p>
    </div>
  );
};

export default Komp7;
