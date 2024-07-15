import { useState } from "react";

const Zuikis = () => {
  const [arPersoko, setArPersoko] = useState(false);
  const persokoHandler = () => (arPersoko ? "Taip" : "Ne");
  const kitasHandler = () => {
    alert("zuikis bando peršokti griovį");
    Math.random() >= 0.5 ? setArPersoko(true) : setArPersoko(false);
  };
  const padedamHandler = () => setArPersoko(true);
  return (
    <div>
      <h2>Zukis</h2>
      <p>Ar zuikis peršoko griovį - {persokoHandler()}</p>
      <button onClick={kitasHandler}>
        Leidžiam zuikiui šokti per kitą griovį
      </button>
      <button onClick={padedamHandler}>Padedam zuikiui peršokti kitą griovį</button>
    </div>
  );
};

export default Zuikis;
