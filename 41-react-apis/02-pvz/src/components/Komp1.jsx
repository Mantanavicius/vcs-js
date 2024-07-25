import { useState, useEffect } from "react";

const Komp1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("komp1");

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, []);
  return (
    <div>
      <h2>Komp1</h2>
      {data.map((item, i) => {
        return (
          <div key={i} style={{ border: "1px solid white" }}>
            <h3>{item.title}</h3>
            <p>{item.completed? 'Atlikta' : 'Neatlikta'}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Komp1;
