import Salis from "./Salis";

const Pasaulis = () => {
  const salys = [
    { pavadinimas: "Lietuva", sostine: "Vilnius", zemynas: "Europa" },
    { pavadinimas: "Egiptas", sostine: "Kairas", zemynas: "Afrika" },
    {
      pavadinimas: "Brazilija",
      sostine: "Rio de Janero",
      zemynas: "Pietų Amerika",
    },
    { pavadinimas: "Japonija", sostine: "Tokijas", zemynas: "Azija" },
  ];
  return (
    <div>
      <h2>Pasaulio Info</h2>
      <div>
        {salys.map((salis, i) => (
          <Salis
            key={i}
            salis={salis}
          />
        ))}
      </div>
    </div>
  );
};

export default Pasaulis;
