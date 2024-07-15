const Komp8 = () => {
  let slaptasSk = Math.floor(Math.random() * 3 + 1);
  const speti1skHandler = () => {
    alert(slaptasSk === 1 ? "Atspėjai" : "Neatspėjai");
  };
  const speti2skHandler = () => {
    alert(slaptasSk === 2 ? "Atspėjai" : "Neatspėjai");
  };
  const speti3skHandler = () => {
    alert(slaptasSk === 3 ? "Atspėjai" : "Neatspėjai");
  };
  return (
    <div>
      <h2>Komp8</h2>
      <button onClick={speti1skHandler}>Spejimas 1</button>
      <button onClick={speti2skHandler}>Spejimas 2</button>
      <button onClick={speti3skHandler}>Spejimas 3</button>
    </div>
  );
};

export default Komp8;
