import { useState } from "react";

const Vistos = () => {
  const dienosUzsakymai = 450;
  const [kiausiniai, setKiausiniai] = useState(50);
  const arSpes = () => {
    if (kiausiniai >= dienosUzsakymai) {
      return `Viskas gerai, užsakymas bus įvykdytas. Dienos kiaušinių perteklius: ${
        kiausiniai - dienosUzsakymai
      }`;
    } else {
      return `Užsakymo įvykdyti nepavyks. Kiaušinių trūkumas: ${
      (kiausiniai - dienosUzsakymai)*-1
      }`;
    }
  };
  return (
    <>
      <h2>Vištos</h2>
      <label htmlFor="kiausiniuKiekis">
        Kiek kiaušinių buvo padėta per šiandien:{" "}
      </label>
      <input
        type="number"
        id="kiausiniuKiekis"
        value={kiausiniai}
        onChange={(e) => setKiausiniai(e.target.value)}
      />
      <p>Dienos užsakymo kiekis: {dienosUzsakymai}</p>
      <p>
        <strong>Ar spėsime įvykdyti užsakyma?</strong>
      </p>
      <p>{arSpes()}</p>
    </>
  );
};

export default Vistos;
