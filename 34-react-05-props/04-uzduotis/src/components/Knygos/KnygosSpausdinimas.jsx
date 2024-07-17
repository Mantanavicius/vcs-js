const KnygosSpausdinimas = ({ knygos }) => {
  return (
    <div>
      <h4>Turimos knygos:</h4>
      {knygos.length > 0 ? (
        <div>
          {knygos.map((knyga, i) => (
            <div key={i}>
              <h4>
                {knyga.pavadinimas} ({knyga.metai})
              </h4>
              <p>Kaina: {knyga.kaina} €</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Šiuo metu nėra įvestų knygų</p>
      )}
    </div>
  );
};

export default KnygosSpausdinimas;
