import { useRef } from "react";

const ImoneIvedimas = (props) => {
  const vardasRef = useRef();
  const pavardeRef = useRef();
  const pareigosRef = useRef();
  const algaRef = useRef();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const naujasDarbuotojas = {
      vardas: vardasRef.current.value,
      pavarde: pavardeRef.current.value,
      pareigos: pareigosRef.current.value,
      alga: algaRef.current.valueAsNumber,
    };
    props.naujasDarbuotojas(naujasDarbuotojas);
    vardasRef.current.value = "";
    pavardeRef.current.value = "";
    pareigosRef.current.value = "";
    algaRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label htmlFor="vardas">Vardas: </label>
          <input
            type="text"
            id="vardas"
            ref={vardasRef}
          />
        </div>
        <div>
          <label htmlFor="pavarde">Pavarde: </label>
          <input
            type="text"
            id="pavarde"
            ref={pavardeRef}
          />
        </div>
        <div>
          <label htmlFor="pareigos">Pareigos: </label>
          <input
            type="text"
            id="pareigos"
            ref={pareigosRef}
          />
        </div>
        <div>
          <label htmlFor="alga">Alga: </label>
          <input
            type="number"
            id="alga"
            ref={algaRef}
          />
        </div>
        <button>Nusamdyti naują darbuotoją</button>
      </form>
    </div>
  );
};

export default ImoneIvedimas;
