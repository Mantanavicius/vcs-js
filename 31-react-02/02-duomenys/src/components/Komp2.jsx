const Komp2 = () => {
  let automobilis = {
    marke: "Audi",
    modelis: "A6",
    metai: 2015,
    kaina: 15000,
    rida: 200000,
  };
  return (
    <div className="auto-blokas">
      <h2>
        Automobilis {automobilis.marke} {automobilis.modelis}
      </h2>
      <ul>
        <li>Metai: {automobilis.metai}</li>
        <li>Kaina: {automobilis.kaina}</li>
        <li>Rida: {automobilis.rida}</li>
      </ul>
    </div>
  );
};

export default Komp2;
