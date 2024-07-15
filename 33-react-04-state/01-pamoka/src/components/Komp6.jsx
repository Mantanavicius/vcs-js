import { useState } from "react";

const Komp6 = () => {
  const [zodis, setZodis] = useState("");
  const zodisHandler = (e) => {
    setZodis(e.target.value);
  };
  return (
    <div>
      <h2>Zodzio ilgis</h2>
      <label htmlFor="vardasInput">Zodis:</label>
      <br />
      <input
        type="text"
        id="vardasInput"
        onInput={zodisHandler}
      />
      <p>Ivestas zodis: {zodis}</p>
      <p>Simboliu kiekis: {zodis.length}</p>
    </div>
  );
};

export default Komp6;
