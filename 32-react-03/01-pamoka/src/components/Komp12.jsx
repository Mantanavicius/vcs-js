const Komp12 = () => {
  let zodis = "azuolas";
  const inputHandler = (e) => {
    let ivestasZodis = e.target.value;
    if (zodis === ivestasZodis) {
      alert("Sveikinu, atspėjai žodį");
    } else {
      alert("bandyk dar kartą");
    }
  };
  return (
    <div>
      <h2>Komp12</h2>
      <input
        type="text"
        onChange={inputHandler}
      />
    </div>
  );
};

export default Komp12;
