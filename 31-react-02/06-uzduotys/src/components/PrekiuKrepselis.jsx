const PrekiuKrepselis = () => {
  const prekes = [
    { id: 1, pavadinimas: "kolonėlė", kaina: 65, kiekis: 31, nuolaida: 15 },
    { id: 2, pavadinimas: "monitorius", kaina: 120, kiekis: 45, nuolaida: 10 },
    { id: 3, pavadinimas: "pelė", kaina: 30, kiekis: 87, nuolaida: 25 },
    { id: 4, pavadinimas: "klaviatūra", kaina: 48, kiekis: 50, nuolaida: 12.5 },
    { id: 5, pavadinimas: "ausinės", kaina: 40, kiekis: 74, nuolaida: 20 },
  ];
  const tableItems = (arr) => {
    return (
      <table border="5">
        <thead>
          <tr>
            <td>ID</td>
            <td>Pavadinimas</td>
            <td>Kaina</td>
            <td>Kiekis</td>
            <td>Nuolaida</td>
          </tr>
        </thead>
        <tbody>
          {arr.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.pavadinimas}</td>
                <td>{item.kaina} €</td>
                <td>{item.kiekis}</td>
                <td>{item.nuolaida} %</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

  const bendraNuolaida = (arr) =>
    arr.reduce((sum, item) => sum + item.nuolaida, 0);

  const krepselioKaina = (arr) => {
    return arr
      .map((item) => item.kaina * item.kiekis * (1 - item.nuolaida / 100))
      .reduce((sum, num) => sum + num, 0);
  };

  const priceLimit = (price) => {
    let overpriced = prekes.filter((item) => item.kaina > price);
    return tableItems(overpriced);
  };
  return (
    <>
      <h2>Prekių krepšelis</h2>
      {tableItems(prekes)}
      <p>Nuolaidų suma: {bendraNuolaida(prekes)} %</p>
      <p>
        Visų prekių krepšelio kaina su nuolaidomis: {krepselioKaina(prekes)} €
      </p>
      <p>Prekės brangesnės nei 60 €</p>
      {priceLimit(60)}
    </>
  );
};

export default PrekiuKrepselis;
