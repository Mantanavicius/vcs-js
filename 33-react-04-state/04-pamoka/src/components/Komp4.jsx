import { useState } from "react";
import { useRef } from "react";

const Komp4 = () => {
  const [automobiliai, setAutomobiliai] = useState([]);

  const markeRef = useRef();
  const modelisRef = useRef();
  const metaiRef = useRef();

  const newCarHandler = (e) => {
    e.preventDefault();
    let naujasAutomobilis = {
      marke: markeRef.current.value,
      modelis: modelisRef.current.value,
      metai: metaiRef.current.value,
    };
    setAutomobiliai([...automobiliai, naujasAutomobilis]);
    markeRef.current.value = "";
    modelisRef.current.value = "";
    metaiRef.current.value = "";
  };

  const naujausiasAutomobilis = () => {
    let naujausias = automobiliai[0];
    for (const auto of automobiliai) {
      if (auto.metai < naujausias.metai) {
        naujausias = auto;
      }
    }
    return naujausias;
  };
  return (
    <div>
      <h2>Automobiliai</h2>
      <form onSubmit={newCarHandler}>
        <div>
          <label htmlFor="marke">Markė:</label>
          <input
            ref={markeRef}
            type="text"
            id="marke"
          />
        </div>
        <div>
          <label htmlFor="modelis">Modelis:</label>
          <input
            ref={modelisRef}
            type="text"
            id="modelis"
          />
        </div>
        <div>
          <label htmlFor="metai">Metai:</label>
          <input
            ref={metaiRef}
            type="number"
            id="metai"
          />
        </div>
        <div>
          <button type="submit">Įvesti</button>
        </div>
      </form>
      {automobiliai.length > 0 && (
        <table border="1">
          <thead>
            <tr>
              <th>Markė</th>
              <th>Modelis</th>
              <th>Metai</th>
            </tr>
          </thead>
          <tbody>
            {automobiliai.map((auto, index) => {
              return (
                <tr key={index}>
                  <td>{auto.marke}</td>
                  <td>{auto.modelis}</td>
                  <td>{auto.metai}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      {automobiliai.length > 0 && (
        <div>
          Naujausias automobilis: {naujausiasAutomobilis().marke}{" "}
          {naujausiasAutomobilis().modelis} {naujausiasAutomobilis().metai}{" "}
        </div>
      )}
    </div>
  );
};

export default Komp4;
