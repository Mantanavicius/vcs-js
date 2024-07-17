import { useRef } from "react";

const KnygosIvedimas = (props) => {
  const pavadinimasRef = useRef();
  const kainaRef = useRef();
  const metaiRef = useRef();
  const formHandler = (e) => {
    e.preventDefault();
    props.naujaKnyga({
      pavadinimas: pavadinimasRef.current.value,
      kaina: kainaRef.current.valueAsNumber,
      metai: metaiRef.current.valueAsNumber,
    });
    pavadinimasRef.current.value = "";
    kainaRef.current.value = "";
    metaiRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={formHandler}>
        <div>
          <label htmlFor="pavadinimas">Pavadinimas: </label>
          <input
            type="text"
            id="pavadinimas"
            ref={pavadinimasRef}
          />
        </div>
        <div>
          <label htmlFor="kaina">Kaina: </label>
          <input
            type="number"
            id="kaina"
            ref={kainaRef}
          />
        </div>
        <div>
          <label htmlFor="metai">Metai: </label>
          <input
            type="number"
            id="metai"
            ref={metaiRef}
          />
        </div>
        <div>
          <button>Įvesti</button>
        </div>
      </form>
    </div>
  );
};

export default KnygosIvedimas;
