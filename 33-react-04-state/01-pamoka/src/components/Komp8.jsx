import { useState } from "react";

const Komp8 = () => {
  const [name, setName] = useState("Jonas");
  const [age, setAge] = useState(32);
  return (
    <>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setAge(age + 1)}>Increment age</button>
      <p>Hello, {name}. You are {age} years young</p>
    </>
  );
};

export default Komp8;
