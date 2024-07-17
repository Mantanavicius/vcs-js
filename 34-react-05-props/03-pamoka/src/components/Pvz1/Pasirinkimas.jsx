import { useState } from "react";
import Mygtukai from "./Mygtukai";

const Pasirinkimas = () => {
  const [tekstas, setTekstas] = useState("kol kas nieko nepasirinkta");

  const apdorotiTekstoPasikeitima = (atejusiInfo) => setTekstas(atejusiInfo);
  return (
    <div>
      <h2>Pasirinkimas</h2>
      <Mygtukai tekstasPasikeite={apdorotiTekstoPasikeitima} />
      <p>Jūs pasirinkote: {tekstas}</p>
    </div>
  );
};

export default Pasirinkimas;
