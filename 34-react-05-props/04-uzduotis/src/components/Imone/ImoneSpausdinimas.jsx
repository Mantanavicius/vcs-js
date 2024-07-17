const ImoneSpausdinimas = ({ darbuotojai }) => {
  return (
    <div>
      <h3>Įmonės darbuotojai:</h3>
      {darbuotojai.length > 0 ? (
        darbuotojai.map((darbuotojas, index) => (
          <div key={index}>
            <h3>
              {darbuotojas.vardas} {darbuotojas.pavarde}
            </h3>
            <p>
              <strong>Pareigos: </strong> {darbuotojas.pareigos}
            </p>
            <p>
              <strong>Alga: </strong> {darbuotojas.alga} €
            </p>
          </div>
        ))
      ) : (
        <p>Šiuo metu įmonė neturi nei vieno darbuotojo</p>
      )}
    </div>
  );
};

export default ImoneSpausdinimas;
