import axios from "axios";
import { useState, useEffect } from "react";

const Komp3 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("komp3");

    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Komp3</h2>
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

export default Komp3;
