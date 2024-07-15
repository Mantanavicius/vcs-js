import { useState } from "react";

const TrysKepyklos = () => {
  const [kiekis, setKiekis] = useState(100);
  const [pirma, setPirma] = useState(20);
  const [antra, setAntra] = useState(40);
  const [trecia, setTrecia] = useState(50);
  const arSpes = () => {
    if (kiekis <= pirma + antra + trecia) {
      return "Užsakymą įgyvendinti spės";
    } else {
      return `Užsakymo įvykdyti nepavyks, trūks dar ${
        kiekis - pirma - antra - trecia
      } vnt.`;
    }
  };
  return (
    <div>
      <h2>Trys kepyklos</h2>
      <label htmlFor="dienosUzsakymai">Užsakymo kiekis: </label>
      <input
        type="number"
        id="dienosUzsakymai"
        onChange={(e) => setKiekis(e.target.valueAsNumber)}
        value={kiekis}
      />
      <br />
      <label htmlFor="pirmaKepykla">
        Kiek užsakymų gali įgyvendinti pirma kepykla:{" "}
      </label>
      <input
        type="number"
        id="pirmaKepykla"
        onChange={(e) => setPirma(e.target.valueAsNumber)}
        value={pirma}
      />
      <br />
      <label htmlFor="antraKepykla">
        Kiek užsakymų gali įgyvendinti antra kepykla:{" "}
      </label>
      <input
        type="number"
        id="antraKepykla"
        onChange={(e) => setAntra(e.target.valueAsNumber)}
        value={antra}
      />
      <br />
      <label htmlFor="treciaKepykla">
        Kiek užsakymų gali įgyvendinti trečia kepykla:{" "}
      </label>
      <input
        type="number"
        id="treciaKepykla"
        onChange={(e) => setTrecia(e.target.valueAsNumber)}
        value={trecia}
      />
      <p>
        <strong>Ar užsakymas bus įvykdytas?</strong>
      </p>
      <p>{arSpes()}</p>
    </div>
  );
};

export default TrysKepyklos;
