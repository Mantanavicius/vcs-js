const Komp5 = () => {
  const mygtukasHandler = (event) => {
    console.log(event.target);
    alert("Paspaudei: " + event.target.textContent + " mygtuka.");
  };
  return (
    <div>
      <h2>Komp5</h2>
      <button onClick={mygtukasHandler}>Pirmas</button>
      <button onClick={mygtukasHandler}>Antras</button>
    </div>
  );
};

export default Komp5;
