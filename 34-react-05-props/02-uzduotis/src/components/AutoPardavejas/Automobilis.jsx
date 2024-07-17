const Automobilis = ({ auto }) => {
  return (
    <div>
      <h3>
        {auto.marke} {auto.modelis} ({auto.metai})
      </h3>
      <p>Rida: {auto.rida} km</p>
      <p>Kaina: {auto.kaina} €</p>
    </div>
  );
};

export default Automobilis;
