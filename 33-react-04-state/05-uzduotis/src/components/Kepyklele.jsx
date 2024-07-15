import { useState } from "react";
import { useRef } from "react";

const Kepyklele = () => {
  const [darbuotojai, setDarbuotojai] = useState("");
  const [kepiniai, setKepiniai] = useState("");
  const [valandos, setValandos] = useState("");
  const [uzsakymai, setUzsakymai] = useState([]);
  const darbuotojaiInputRef = useRef();
  const kepiniaiInputRef = useRef();
  const valandosInputRef = useRef();
  const uzsakymaiInputRef = useRef();
  const orderSum = () => {
    return uzsakymai.reduce((sum, num) => sum + num, 0);
  };
  const bakeryOutput = () => {
    return darbuotojai * kepiniai * valandos;
  };
  const didCompleteOrders = () => (orderSum() < bakeryOutput() ? "Taip" : "Ne");
  return (
    <div>
      <h2>Kepyklėlė</h2>
      <form>
        <div>
          <label htmlFor="darbuotojai">Darbuotojų skaičius: </label>
          <input
            type="number"
            id="darbuotojai"
            ref={darbuotojaiInputRef}
            onChange={() =>
              setDarbuotojai(darbuotojaiInputRef.current.valueAsNumber)
            }
          />
        </div>
        <div>
          <label htmlFor="kepiniai">
            Vieno darbuotojo kepinių kiekis per valandą:{" "}
          </label>
          <input
            type="number"
            id="kepiniai"
            ref={kepiniaiInputRef}
            onChange={() => setKepiniai(kepiniaiInputRef.current.valueAsNumber)}
          />
        </div>
        <div>
          <label htmlFor="valandos">
            Darbuotojo darbo valandų kiekis per dieną:{" "}
          </label>
          <input
            type="number"
            id="valandos"
            ref={valandosInputRef}
            onChange={() => setValandos(valandosInputRef.current.valueAsNumber)}
          />
        </div>
      </form>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setUzsakymai([...uzsakymai, uzsakymaiInputRef.current.valueAsNumber]);
          uzsakymaiInputRef.current.value = "";
        }}>
        <label htmlFor="uzsakymai">
          <strong>Dienos užsakymo kiekis: </strong>
        </label>
        <input
          type="number"
          id="uzsakymai"
          ref={uzsakymaiInputRef}
        />
        <button type="submit">Įvesti</button>
      </form>
      {uzsakymai.length > 0 && (
        <div>
          <p>
            <strong>Bendra dienos užsakymų suma:</strong> {orderSum()}
          </p>
        </div>
      )}
      {darbuotojai && kepiniai && valandos && (
        <div>
          <p>
            <strong>Bendras kepyklos dienos pajėgumas:</strong> {bakeryOutput()}
          </p>
        </div>
      )}
      {darbuotojai && kepiniai && valandos && uzsakymai && (
        <div>
          <p>
            <strong>Ar kepykla spės įgyvendinti visus dienos užsakymus:</strong>{" "}
            {didCompleteOrders()}
          </p>
        </div>
      )}
    </div>
  );
};

export default Kepyklele;
