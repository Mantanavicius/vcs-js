import { useState } from "react";
import { useRef } from "react";

const Komp2 = () => {
  const [pirmasZodis, setPirmasZodis] = useState("");
  const [antrasZodis, setAntrasZodis] = useState("");
  const pirmasZodisRef = useRef();
  const antrasZodisRef = useRef();
  const ivestiHandler = () => {
    const zodis1 = pirmasZodisRef.current.value;
    const zodis2 = antrasZodisRef.current.value;
    setPirmasZodis(zodis1);
    setAntrasZodis(zodis2);
    pirmasZodisRef.current.value = "";
    antrasZodisRef.current.value = "";
  };
  const daugiauARaidziu = () => {
    let pirmoAts = pirmasZodis
      .split("")
      .filter((raide) => raide === "a").length;
    let antroAts = antrasZodis
      .split("")
      .filter((raide) => raide === "a").length;
    if (pirmoAts > antroAts) {
      return pirmasZodis;
    } else if (pirmoAts < antroAts) {
      return antrasZodis;
    } else {
      return "abu lygūs";
    }
  };
  return (
    <div>
      <h2>Lyginti žodžius</h2>
      <div>
        <label htmlFor="pirmasZodis">Pirmas žodis: </label>
        <input
          type="text"
          id="pirmasZodis"
          ref={pirmasZodisRef}
        />
      </div>
      <div>
        <label htmlFor="antrasZodis">Antras žodis: </label>
        <input
          type="text"
          id="antrasZodis"
          ref={antrasZodisRef}
        />
      </div>
      <div>
        <button onClick={ivestiHandler}>Įvesti</button>
      </div>
      {pirmasZodis && antrasZodis && (
        <>
          <div>
            <p>Įvesti žodžiai:</p>
            <p>Pirmas: {pirmasZodis}</p>
            <p>Antras: {antrasZodis}</p>
          </div>
          <div>
            <p>Daugiau A raidžių yra žodyje: {daugiauARaidziu()}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Komp2;
