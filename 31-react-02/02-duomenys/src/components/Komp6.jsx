const Komp6 = () => {
  let prekes = [
    { id: 1, pavadinimas: "Tusinukas", kaina: 2.5, kiekis: 283 },
    { id: 2, pavadinimas: "Flomasteris", kaina: 3, kiekis: 73 },
    { id: 3, pavadinimas: "Sasiuvinys", kaina: 1.5, kiekis: 403 },
    { id: 4, pavadinimas: "Obuoliai", kaina: 2.2, kiekis: 800 },
    { id: 5, pavadinimas: "Kriauses", kaina: 2.1, kiekis: 70 },
  ];
  return (
    <div className="prekiu-wrapper">
      <h2>Prekes</h2>
      <div className="prekiu-list">
        {prekes.length > 0 ? (
          prekes.map((preke) => {
            return (
              <div
                className="prekes-blokas"
                key={preke.id}>
                <h3>Prekes pavadinimas: {preke.pavadinimas}</h3>
                <p>Preke kainuoja: {preke.kaina} €</p>
                <p>Jos turime: {preke.kiekis} vnt.</p>
              </div>
            );
          })
        ) : (
          <p>Prekiu nera</p>
        )}
      </div>
    </div>
  );
};

export default Komp6;
