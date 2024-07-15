const Komp9 = () => {
  let slaptasSk = Math.floor(Math.random() * 3 + 1);
  const spetiskHandler = (spejimas) => {
    alert(slaptasSk === spejimas ? "Atspėjai" : "Neatspėjai");
  };
  return (
    <div>
      <h2>Komp9</h2>
      <button onClick={() => spetiskHandler(1)}>Spejimas 1</button>
      <button onClick={() => spetiskHandler(2)}>Spejimas 2</button>
      <button onClick={() => spetiskHandler(3)}>Spejimas 3</button>
    </div>
  );
};

export default Komp9;
