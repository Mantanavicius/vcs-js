import { useState } from "react";

const Zodis = () => {
  const [zodis, setZodis] = useState("");
  const pomidorasHandler = () => setZodis("pomidoras");
  const agurkasHandler = () => setZodis("agurkas");
  return (
    <div>
      <h2>Žodis</h2>
      <p>Šiuo metu žodis yra: {zodis}</p>
      <button onClick={pomidorasHandler}>Pakeisti į pomidorą</button>
      <button onClick={agurkasHandler}>Pakeisti į agurką</button>
    </div>
  );
};

export default Zodis;
