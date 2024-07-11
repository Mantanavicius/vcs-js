import "./Komp8.css";

const Komp8 = () => {
  let preke = {
    kodas: "BAK364",
    pavadinimas: "Tusinukas",
    kaina: 2.34,
    savikaina: 1.5,
    nuotrauka: "https://via.placeholder.com/200",
  };

  // šiame komponente jau turite prekės objektą
  // jį atvaizduokite return dalyje,
  // susikurkite visas reikiamas žymas, kad tą informaciją
  // būtų galima susidėti kažkaip tvarkingai ir aiškiai

  // taip pat, atlikite kažkiek stiliavimo, tam reikės
  // susikurti css failą ir jį prijungti prie šio komponento
  // ir atlikti stiliavims (pvz, blokelio spalva, tarpai, ...)

  return (
  <div className="product-wrapper">
    <div className="info-wrapper">
      <div className="product-info">Prekės kodas: {preke.kodas}</div>
      <div className="product-info">Prekės pavadinimas: {preke.pavadinimas}</div>
      <div className="product-info">Kaina: {preke.kaina} €</div>
      <div className="product-info">Savikaina: {preke.savikaina} €</div>
    </div>
    <img src={preke.nuotrauka} alt="" />
  </div>
  );
};

export default Komp8;
