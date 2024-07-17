const Preke = (props) => {
  return (
    <div>
      <h3>{props.pavadinimas}</h3>
      <p>
        Prekyboje turime: <strong>{props.kiekis} vnt.</strong>
      </p>
      <p>
        Kaina: <strong>{props.kaina} €</strong>
      </p>
    </div>
  );
};

export default Preke;
