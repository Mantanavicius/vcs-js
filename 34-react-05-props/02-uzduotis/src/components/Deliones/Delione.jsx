const Delione = ({ delione }) => {
  const delionesLygis = () =>
    delione.detales > 1000
      ? "Sunki"
      : delione.detales > 500
      ? "Vidutinė"
      : "Lengva";
  return (
    <div>
      <h3>{delione.pavadinimas}</h3>
      <p>
        Matmenys: {delione.aukstis}x{delione.plotis} cm
      </p>
      <p>
        Detalių kiekis: {delione.detales} ({delionesLygis()})
      </p>
    </div>
  );
};

export default Delione;
