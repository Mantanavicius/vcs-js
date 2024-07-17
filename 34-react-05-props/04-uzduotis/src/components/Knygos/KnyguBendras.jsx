import { useState } from "react";
import KnygosIvedimas from "./KnygosIvedimas";
import KnygosSpausdinimas from "./KnygosSpausdinimas";

const KnyguBendras = () => {
  const [knygos, setKnygos] = useState([
    { pavadinimas: "Alchemikas", kaina: 15, metai: 1988 },
    { pavadinimas: "Veronika ryžtasi mirti", kaina: 19, metai: 1998 },
    { pavadinimas: "Mažasis princas", kaina: 6.99, metai: 1943 },
  ]);
  const naujaKnygaHandler = (naujaKnyga) => {
    setKnygos([...knygos, naujaKnyga]);
  };
  return (
    <div>
        <h2>Knygos</h2>
      <KnygosIvedimas naujaKnyga={naujaKnygaHandler} />
      <KnygosSpausdinimas knygos={knygos} />
      {knygos.length > 0 && (
        <button onClick={() => setKnygos([])}>Išvalyti</button>
      )}
    </div>
  );
};

export default KnyguBendras;
