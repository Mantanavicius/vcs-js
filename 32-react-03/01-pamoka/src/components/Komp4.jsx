const Komp4 = () => {
  const pirmasHandler = () => alert("pirmas");
  const antrasHandler = () => alert("antras");
  return (
    <div>
      <h2>Komp4</h2>
      <button onClick={pirmasHandler}>Pirmas</button>
      <button onClick={antrasHandler}>Antras</button>
      <button onClick={antrasHandler}>Trečias</button>
    </div>
  );
};

export default Komp4;
