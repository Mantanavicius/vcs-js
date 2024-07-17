import { useState } from "react";
import ZodziuIvedimas from "./ZodziuIvedimas";

const ZodziuBendras = () => {
  const [zodziai, setZodziai] = useState([
    "Labas",
    "Krabas",
    "Saule",
    "Kiemas",
    "Kolonėlė",
  ]);
  const naujasZodisHandler = (naujasZodis) => {
    setZodziai([...zodziai, naujasZodis]);
  };
  const ilgiausiasZodis = () => {
    let ilgiausias = zodziai[0];
    for (let i = 1; i < zodziai.length; i++) {
      if (zodziai[i].length > ilgiausias.length) {
        ilgiausias = zodziai[i];
      }
    }
    return ilgiausias;
  };
  return (
    <div>
      <h2>Žodžiai</h2>
      <ZodziuIvedimas naujasZodis={naujasZodisHandler} />
      <h4>Įvesti žodžiai</h4>
      <ul>
        {zodziai.length > 0
          ? zodziai.map((zodis, i) => <li key={i}>{zodis}</li>)
          : "Deja, nėra įvestos informacijos"}
      </ul>
      {zodziai.length > 0 && (
        <div>
          <h4>Ilgiausias žodis: {ilgiausiasZodis()}</h4>
        </div>
      )}
    </div>
  );
};

export default ZodziuBendras;
