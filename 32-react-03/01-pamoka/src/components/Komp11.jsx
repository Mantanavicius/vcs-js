const Komp11 = () => {
  const inputHandler = (event) => {
    let skaicius = event.target.valueAsNumber;
    console.log(skaicius);
    if (skaicius === 100) {
      alert("Sveikinu, pasiekei 100!");
    }
  };
  return (
    <div>
      <h2>Komp11</h2>
      <input
        type="number"
        onInput={inputHandler}
      />
    </div>
  );
};

export default Komp11;
