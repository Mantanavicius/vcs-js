import { useRef } from "react";

const ZodziuIvedimas = (props) => {
  const zodisRef = useRef();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (zodisRef.current.value === "") return;
    props.naujasZodis(zodisRef.current.value);
    zodisRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <label htmlFor="zodis">Įveskite žodį </label>
        <input
          type="text"
          id="zodis"
          ref={zodisRef}
        />
        <button>Įvesti</button>
      </form>
    </div>
  );
};

export default ZodziuIvedimas;
