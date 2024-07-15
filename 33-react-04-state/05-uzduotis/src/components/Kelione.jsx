import { useRef } from "react";
import { useState } from "react";

const Kelione = () => {
  const [kilometrai, setKilometrai] = useState("");
  const [sanaudos, setSanaudos] = useState("");
  const [kaina, setKaina] = useState("");
  const kilometraiInputRef = useRef();
  const sanaudosInputRef = useRef();
  const kainaInputRef = useRef();
  const inputDataHandler = (e) => {
    e.preventDefault();
    setKilometrai(kilometraiInputRef.current.valueAsNumber);
    setSanaudos(sanaudosInputRef.current.valueAsNumber);
    setKaina(kainaInputRef.current.valueAsNumber);
    kilometraiInputRef.current.value = "";
    sanaudosInputRef.current.value = "";
    kainaInputRef.current.value = "";
  };
  const totalSanaudos = () => (kilometrai / 100) * sanaudos;
  const totalKaina = () => totalSanaudos() * kaina;
  return (
    <div>
      <h2>Kelionė</h2>
      <form onSubmit={inputDataHandler}>
        <div>
          <label htmlFor="kilometrai">Iš viso teks nuvažiuoti: </label>
          <input
            type="number"
            id="kilometrai"
            ref={kilometraiInputRef}
          />
        </div>
        <div>
          <label htmlFor="sanaudos">Vidutinės kuro sąnaudos (L/100km): </label>
          <input
            type="number"
            id="sanaudos"
            step="0.01"
            ref={sanaudosInputRef}
          />
        </div>
        <div>
          <label htmlFor="kaina">Kuro kaina už litrą: </label>
          <input
            type="number"
            step="0.01"
            id="kaina"
            ref={kainaInputRef}
          />
        </div>
        <button type="submit">Įvesti</button>
      </form>
      {kilometrai && sanaudos && kaina && (
        <div>
          <p>
            <strong>Duoti duomenys:</strong>
          </p>
          <p>Kelionės atsumas: {kilometrai} km</p>
          <p>Vidutinės kuro sąnaudos: {sanaudos} l</p>
          <p>Kuro kaina: {kaina} €</p>
        </div>
      )}
      {kilometrai && sanaudos && kaina && (
        <div>
          <p>
            <strong>Iš viso bus sunaudota kuro:</strong>
          </p>
          <p>{totalSanaudos()} litrai(-ų)</p>
        </div>
      )}
      {kilometrai && sanaudos && kaina && (
        <div>
          <p>
            <strong>Kuro kaina iš viso:</strong>
          </p>
          <p>{totalKaina()} €</p>
        </div>
      )}
    </div>
  );
};

export default Kelione;
