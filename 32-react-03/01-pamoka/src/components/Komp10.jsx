const Komp10 = () => {
  const tekstoHandler = (event) => {
    let tekstas = event.target.value;
    if (tekstas.length > 5) {
      alert("Atsargiai tekstas didėja!: " + tekstas);
    }
  };
  return (
    <div>
      <h2>Komp10</h2>
      <input
        type="text"
        onInput={tekstoHandler}
      />
    </div>
  );
};

export default Komp10;
