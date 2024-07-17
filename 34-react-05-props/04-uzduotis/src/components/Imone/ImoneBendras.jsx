import { useState } from "react";
import ImoneIvedimas from "./ImoneIvedimas";
import ImoneSpausdinimas from "./ImoneSpausdinimas";

const ImoneBendras = () => {
  const [darbuotojai, setDarbuotojai] = useState([
    {
      vardas: "Jonas",
      pavarde: "Jonaitis",
      pareigos: "dizaineris",
      alga: 1500,
    },
    {
      vardas: "Petras",
      pavarde: "Petraitis",
      pareigos: "programuotojas",
      alga: 2000,
    },
    {
      vardas: "Antanas",
      pavarde: "Antanaitis",
      pareigos: "administratorius",
      alga: 1800,
    },
  ]);
  const naujasDarbuotojasHandler = (naujasDarbuotojas) => {
    setDarbuotojai([...darbuotojai, naujasDarbuotojas]);
  };
  return (
    <div>
      <h2>Įmonė</h2>
      <ImoneIvedimas naujasDarbuotojas={naujasDarbuotojasHandler} />
      <ImoneSpausdinimas darbuotojai={darbuotojai} />
      {darbuotojai.length > 0 && <button onClick={() => setDarbuotojai([])}>Atleisti visus darbuotojus</button>}
    </div>
  );
};

export default ImoneBendras;
