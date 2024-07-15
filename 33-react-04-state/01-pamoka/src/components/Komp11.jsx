import { useState } from "react";

const Komp11 = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Preke1", kaina: 10 },
    { id: 2, name: "Preke2", kaina: 20 },
    { id: 3, name: "Preke3", kaina: 30 },
  ]);
  const addItem = () => {
    const newItem = {
      id: items.length + 1,
      name: `Preke${items.length + 1}`,
      kaina: Math.floor(Math.random() * 100 + 1),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };
  return (
    <div>
      <h2>Objektu sarasas</h2>
      <ul>
        {items.map((item, i) => (
          <li key={i}>
            {item.name} - {item.kaina} €
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Pridėti prekę</button>
    </div>
  );
};

export default Komp11;
