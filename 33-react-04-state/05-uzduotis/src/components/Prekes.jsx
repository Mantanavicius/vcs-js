import { useState } from "react";
import { useRef } from "react";

const Prekes = () => {
  const [prekes, setPrekes] = useState([]);
  const pavadinimasInputRef = useRef();
  const kainaInputRef = useRef();
  const kiekisInputRef = useRef();
  const formInputHandler = (e) => {
    e.preventDefault();
    const naujaPreke = {
      pavadinimas: pavadinimasInputRef.current.value,
      kaina: kainaInputRef.current.value,
      kiekis: kiekisInputRef.current.value,
    };
    setPrekes([naujaPreke, ...prekes]);
    pavadinimasInputRef.current.value = "";
    kainaInputRef.current.value = "";
    kiekisInputRef.current.value = "";
  };
  return (
    <div>
      <h2>Prekės</h2>
      <form onSubmit={formInputHandler}>
        <div>
          <label htmlFor="pavadinimas">Prekės pavadinimas:</label>
          <input
            type="text"
            id="pavadinimas"
            ref={pavadinimasInputRef}
            required
          />
        </div>
        <div>
          <label htmlFor="kaina">Prekės kaina:</label>
          <input
            type="text"
            id="kaina"
            ref={kainaInputRef}
            required
          />
        </div>
        <div>
          <label htmlFor="kiekis">Prekės kiekis:</label>
          <input
            type="text"
            id="kiekis"
            ref={kiekisInputRef}
            required
          />
        </div>
        <div>
          <button type="submit">Įvesti</button>
        </div>
      </form>
      {prekes.length > 0 ? (
        <div>
          {prekes.map((preke, i) => {
            return (
              <div key={i}>
                <p>
                  <strong>Prekės pavadinimas: </strong> {preke.pavadinimas}
                </p>
                <p>
                  <strong>Prekės kaina: </strong> {preke.kaina}
                </p>
                <p>
                  <strong>Prekės kiekis: </strong> {preke.kiekis}
                </p>
              </div>
            );
          })}
          <button onClick={() => setPrekes([])}>Išvalyti</button>
        </div>
      ) : (
        <p>Kol kas nėra įvestų prekių</p>
      )}
      {prekes.filter((preke) => preke.kiekis < 5).length > 0 && (
        <div>
          <p>
            <strong>Prekės su mažesniu nei 5 vnt. likučiu:</strong>
          </p>
          {prekes
            .filter((preke) => preke.kiekis < 5)
            .map((preke, i) => {
              return (
                <div key={i}>
                  <p>
                    <strong>Prekės pavadinimas: </strong> {preke.pavadinimas}
                  </p>
                  <p>
                    <strong>Prekės kaina: </strong> {preke.kaina}
                  </p>
                  <p>
                    <strong>Prekės kiekis: </strong> {preke.kiekis}
                  </p>
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Prekes;
