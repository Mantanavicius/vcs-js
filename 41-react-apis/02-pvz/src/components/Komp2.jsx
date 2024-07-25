import { useEffect } from "react";
import { useState } from "react";

const Komp2 = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    console.log("komp2");

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);

  useEffect(() => {
    let newUrl = "https://jsonplaceholder.typicode.com/todos";
    switch (filter) {
      case "completed":
        newUrl += "?completed=true";
        break;
      case "not-completed":
        newUrl += "?completed=false";
        break;
    }
    fetch(newUrl)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [filter]);

  return (
    <div>
      <h2>Komp2</h2>
      <button onClick={() => setFilter("all")}>Rodyti viską</button>
      <button onClick={() => setFilter("completed")}>
        Rodyti tik atliktas
      </button>
      <button onClick={() => setFilter("not-completed")}>
        Rodyti tik neatliktas
      </button>
      <p>Rezultatų: {data ? data.length : "Kol kas neužsikrovė"}</p>
      {data.map((item, i) => {
        return (
          <div
            key={i}
            style={{ border: "1px solid white" }}>
            <h3>{item.title}</h3>
            <p>{item.completed ? "Atlikta" : "Neatlikta"}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Komp2;
