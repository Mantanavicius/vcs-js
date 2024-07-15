import { useState } from "react";

const Komp9 = () => {
  const [person, setPerson] = useState({ name: "Jonas", age: 30 });
  const changeName = () => {
    const updatedPerson = { ...person, name: "Petras" };
    setPerson(updatedPerson);
  };
  const changeAge = () => {
    const updatedPerson = { ...person, age: 35 };
    setPerson(updatedPerson);
  };
  return (
    <div>
      <h2>Asmens informacija:</h2>
      <p>Vardas: {person.name}</p>
      <p>Amžius: {person.age}</p>
      <button onClick={changeName}>Pakeisti vardą</button>
      <button onClick={changeAge}>Pakeisti amžių</button>
    </div>
  );
};

export default Komp9;
