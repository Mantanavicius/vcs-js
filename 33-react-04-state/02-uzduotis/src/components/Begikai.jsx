import { useState } from "react";

const Begikai = () => {
  const [pirmas, setPirmas] = useState(0);
  const [antras, setAntras] = useState(0);
  const greitesnisBegikas = () => {
    if (pirmas < antras) {
      return "Pirmas begikas buvo greitesnis";
    } else if (pirmas > antras) {
      return "Antras begikas buvo greitesnis";
    } else {
      return "Abu begikai buvo vienodo greičio";
    }
  };

  return (
    <>
      <h2>Begikai</h2>
      <label htmlFor="pirmasBegikas">
        Pirmas begikas nubėgo 100 m per (s):{" "}
      </label>
      <input
        type="number"
        id="pirmasBegikas"
        onChange={(e) => setPirmas(e.target.value)}
      />
      <br />
      <label htmlFor="pirmasBegikas">
        Antras begikas nubėgo 100 m per (s):{" "}
      </label>
      <input
        type="number"
        id="pirmasBegikas"
        onChange={(e) => setAntras(e.target.value)}
      />
      <p>
        <strong>Kuris buvo greitesnis?</strong>
      </p>
      <p>{greitesnisBegikas()}</p>
    </>
  );
};

export default Begikai;
