import { useState } from "react";
import { useRef } from "react";

const Temperaturos = () => {
  const [temperaturos, setTemperaturos] = useState([]);
  const temperaturaInputRef = useRef();
  const temperaturaInputHandler = (e) => {
    e.preventDefault();
    setTemperaturos([
      ...temperaturos,
      temperaturaInputRef.current.valueAsNumber,
    ]);
    temperaturaInputRef.current.value = "";
  };
  const dailyAvg = () =>
    (
      temperaturos.reduce((sum, num) => sum + num, 0) / temperaturos.length
    ).toFixed(2);
  const howManyTemps = () =>
    temperaturos.length > 0 ? temperaturos.length : "Nėra įvestos informacijos";
  const lowestTemp = () => Math.min(...temperaturos);
  const highestTemp = () => Math.max(...temperaturos);
  return (
    <div>
      <h2>Temperatūros</h2>
      <form onSubmit={temperaturaInputHandler}>
        <label htmlFor="temperatura">Įveskite temperatūrą: </label>
        <input
          type="number"
          step={0.01}
          id="temperatura"
          ref={temperaturaInputRef}
        />
        <div>
          <button type="submit">Įvesti</button>
        </div>
      </form>
      <br />
      {temperaturos.length > 0 && (
        <div>
          Temperatūros:
          <ul>
            {temperaturos.map((temp, i) => (
              <li key={i}>{temp}&deg;</li>
            ))}
          </ul>
        </div>
      )}
      {temperaturos.length > 0 && (
        <div>
          <p>
            <strong>Vidutinė dienos temperatūra:</strong> {dailyAvg()}&deg;
          </p>
        </div>
      )}
      <div>
        <p>
          <strong>Iš viso įvestų temperatūrų:</strong> {howManyTemps()}
        </p>
      </div>
      {temperaturos.length > 0 && (
        <div>
          <p>
            <strong>Žemiausia dienos temperatūra:</strong> {lowestTemp()}&deg;
          </p>
        </div>
      )}
      {temperaturos.length > 0 && (
        <div>
          <p>
            <strong>Aukščiausia dienos temperatūra:</strong> {highestTemp()}
            &deg;
          </p>
        </div>
      )}
      {temperaturos.length > 0 && (
        <div>
          <p>
            <strong>
              Skirtumas tarp aukščiausios ir žemiausios dienos temperatūros:
            </strong>{" "}
            {highestTemp() - lowestTemp()}&deg;
          </p>
        </div>
      )}
      {temperaturos.length > 0 && (
        <button onClick={() => setTemperaturos("")}>Išvalyti</button>
      )}
    </div>
  );
};

export default Temperaturos;
