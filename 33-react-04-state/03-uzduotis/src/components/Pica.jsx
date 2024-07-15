/*
	Sukursime komponenta kur leisime vartotojui pasirinkti kokius
	produktus nori ant picos.

	1. Sukurkite komponente Ketvirtas 5 laukus kurie priimtu checkbox
		Su ingriedientais, sūris, kumpis, ananasai, saliamis, alyvuogės
	2. Kiekvienam checkboxui parašykit funkciją ir state(būseną)
	3. Išvęskite galutinį rezultatą paragrafe kokios picos norite
	4. Rezultatą išspausdinti paragrafe, paslėpdami/parodymami
		norimus ingridientus.
*/

import { useState } from "react";

const Ketvirtas = () => {
  const [suris, setSuris] = useState(false);
  const [kumpis, setKumpis] = useState(false);
  const [ananasai, setAnanasai] = useState(false);
  const [saliamis, setSaliamis] = useState(false);
  const [alyvuoges, setAlyvuoges] = useState(false);

  const ingredientai = [
    suris ? "Sūris" : "",
    kumpis ? "Kumpis" : "",
    ananasai ? "Ananasai" : "",
    saliamis ? "Saliamis" : "",
    alyvuoges ? "Alyvuoges" : "",
  ];
  return (
    <div>
      <h2>Pica</h2>
      <label htmlFor="suris">Sūris </label>
      <input
        type="checkbox"
        id="suris"
        checked={suris}
        onClick={() => setSuris(!suris)}
      />
      <br />
      <label htmlFor="kumpis">Kumpis </label>
      <input
        type="checkbox"
        id="kumpis"
        checked={kumpis}
        onClick={() => setKumpis(!kumpis)}
      />
      <br />
      <label htmlFor="ananasai">Ananasai </label>
      <input
        type="checkbox"
        id="ananasai"
        checked={ananasai}
        onClick={() => setAnanasai(!ananasai)}
      />
      <br />
      <label htmlFor="saliamis">Saliamis </label>
      <input
        type="checkbox"
        id="saliamis"
        checked={saliamis}
        onClick={() => setSaliamis(!saliamis)}
      />
      <br />
      <label htmlFor="alyvuoges">Alyvuogės </label>
      <input
        type="checkbox"
        id="alyvuoges"
        checked={alyvuoges}
        onClick={() => setAlyvuoges(!alyvuoges)}
      />
      <br />
      <p>
        <strong>Mano picoje turi būti: </strong>
        <ul>
          {ingredientai.map((ingredientas, i) =>
            ingredientas ? <li key={i}>{ingredientas}</li> : ""
          )}
        </ul>
      </p>
    </div>
  );
};

export default Ketvirtas;
