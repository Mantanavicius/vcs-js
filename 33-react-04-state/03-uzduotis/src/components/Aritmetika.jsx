/*
	1. Sukurkite komponente Aritmetika 2 laukus kurie priimtų skaičių
	2. Sukurkite keturis mygtukus su pavadinimais sudetis, atimtis
		daugyba, dalyba.
	3. Kiekvienam mygtukui sukurkite atitinkamą funkciją kuri
		gražintu tų dviejų skaičių sumą. T.y. jei mygtukas vadinas
		sudėtis, tai abiejų skaičių sumą, jei daugybą tai sudaugintą
		abiejų skaičių sumą, ir t.t.
	4. Rezultatą išspausdinti paragrafe.
*/

import { useState } from "react";

const Aritmetika = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState("");
  const rezultatas = (type) => {
    switch (type) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        if (b !== 0) {
          setResult(a / b);
        } else {
          setResult("Dalyba iš 0 negalima");
        }
    }
  };
  return (
    <div>
      <h2>Aritmetika</h2>
      <label htmlFor="sk1">Pirmasis skaičius: </label>
      <input
        type="number"
        id="sk1"
        value={a}
        onChange={(e) => setA(e.target.valueAsNumber)}
      />
      <br />
      <label htmlFor="sk2">Antrasis skaičius: </label>
      <input
        type="number"
        id="sk2"
        value={b}
        onChange={(e) => setB(e.target.valueAsNumber)}
      />
      <br />
      <br />
      <button onClick={() => rezultatas("+")}>Sudėtis</button>
      <button onClick={() => rezultatas("-")}>Atimtis</button>
      <button onClick={() => rezultatas("*")}>Daugyba</button>
      <button onClick={() => rezultatas("/")}>Dalyba</button>
      <p>
        <strong>REZULTATAS:</strong> {result}
      </p>
    </div>
  );
};

export default Aritmetika;
