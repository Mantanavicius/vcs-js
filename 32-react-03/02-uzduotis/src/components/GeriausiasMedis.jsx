const GeriausiasMedis = () => {
  const patikrinkMediHandler = (medis) => {
    switch (medis) {
      case "azuolas":
        alert("Išmintingas pasirinkimas");
        break;
      case "klevas":
        alert("Lapai geras pasirinkimas :)))");
        break;
      case "pusis":
        alert("Aukšta ir graži");
    }
  };

  return (
    <div>
      <h2>Geriausias Medis:</h2>
      <button onClick={() => patikrinkMediHandler("azuolas")}>Ąžuolas</button>
      <button onClick={() => patikrinkMediHandler("klevas")}>Klevas</button>
      <button onClick={() => patikrinkMediHandler("pusis")}>Pušis</button>
    </div>
  );
};

export default GeriausiasMedis;
