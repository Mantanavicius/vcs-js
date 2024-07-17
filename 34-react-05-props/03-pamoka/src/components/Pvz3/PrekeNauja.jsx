import { useRef } from "react";

const PrekeNauja = (props) => {
  const pavadinimasRef = useRef();
  const kiekisRef = useRef();
  const kainaRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    let naujaPreke = {
      pavadinimas: pavadinimasRef.current.value,
      kiekis: kiekisRef.current.valueAsNumber,
      kaina: kainaRef.current.valueAsNumber,
    };

    props.pridejimas(naujaPreke);

    pavadinimasRef.current.value = "";
    kiekisRef.current.value = "";
    kainaRef.current.value = "";
  };
  return (
    <div>
      <h3>Pridėti prekę</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="pavadinimas">Pavadinimas:</label>
          <input
            type="text"
            id="pavadinimas"
            ref={pavadinimasRef}
          />
        </div>
        <div>
          <label htmlFor="kiekis">Kiekis:</label>
          <input
            type="number"
            id="kiekis"
            ref={kiekisRef}
          />
        </div>
        <div>
          <label htmlFor="kaina">Kaina:</label>
          <input
            type="number"
            id="kaina"
            ref={kainaRef}
          />
        </div>
        <div>
          <button type="submit">Pridėti</button>
        </div>
      </form>
    </div>
  );
};

export default PrekeNauja;
