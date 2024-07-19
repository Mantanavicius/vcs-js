import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Output from "./components/Output";
import Slider from "./components/Slider";
import receptaiData from "./db/receptai.json";

function App() {
  const { receptai } = receptaiData;
  const [selectedId, setSelectedId] = useState(2);
  const [quantity, setQuantity] = useState(2);
  const selectHandler = (id) => {
    setSelectedId(id === selectedId ? null : id);
  };
  const quantityHandler = (newQuantity) => {
    setQuantity(newQuantity);
  }
  return (
    <>
      <main>
        <section className="receptai">
          <h2>Pasirinkite receptą:</h2>
          <div className="receptai-wrapper">
            {receptai.map((receptas) => (
              <Card
                onClick={() => selectHandler(receptas.id)}
                selected={selectedId === receptas.id}
                key={receptas.id}
                id={receptas.id}
                img={receptas.img}
                title={receptas.pavadinimas}
                description={receptas.description}
              />
            ))}
          </div>
        </section>
        <Slider quantity={quantityHandler} initialValue={quantity}/>
        <Output data={receptai[selectedId-1].ingredients} quantity={quantity}/>
      </main>
    </>
  );
}

export default App;
