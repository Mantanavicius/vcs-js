import Automobilis from "./Automobilis";

const Pardevejas = () => {
  const auto = {
    marke: "Opel",
    modelis: "Astra",
    metai: 2007,
    rida: 220890,
    kaina: 2500,
  };
  return (
    <div>
      <h2>Auto Pardavėjas</h2>
      <Automobilis auto={auto} />
    </div>
  );
};

export default Pardevejas;
