import { useRef } from "react";
import { useState } from "react";

const Komp1 = () => {
  const [salis, setSalis] = useState("");

  const salisInputRef = useRef();

  const ivestiSalisHandler = () => {
    setSalis(salisInputRef.current.value);
  };
  return (
    <div>
      <h2>Mėgstamiausia šalis</h2>
      <div>
        <label htmlFor="salis">Įveskite šalį:</label>
        <input
          type="text"
          id="salis"
          ref={salisInputRef}
        />
        <button onClick={ivestiSalisHandler}>Įvesti</button>
      </div>
      <p>Jūs įvedėte: {salis}</p>
    </div>
  );
};

export default Komp1;
