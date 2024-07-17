import Delione from "./Delione";

const HobiuParduotuve = () => {
  const delione1 = {
    pavadinimas: "Didžioji Kinų Siena",
    detales: 1000,
    plotis: 70,
    aukstis: 38,
  };
  const delione2 = {
    pavadinimas: "Mona Lisa",
    detales: 500,
    plotis: 40,
    aukstis: 65,
  };
  const delione3 = {
    pavadinimas: "Žvaigždėta naktis",
    detales: 1500,
    plotis: 68,
    aukstis: 42,
  };
  return (
    <div>
      <h2>Delionės</h2>
      <Delione delione={delione1} />
      <Delione delione={delione2} />
      <Delione delione={delione3} />
    </div>
  );
};

export default HobiuParduotuve;
