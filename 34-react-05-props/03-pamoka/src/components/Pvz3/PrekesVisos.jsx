const PrekesVisos = ({ data }) => {
  return (
    <div>
      <h3>Suvestos prekės</h3>
      {data && (
        <div className="products-list">
          {data.map((preke, index) => {
            return (
              <div
                key={index}
                className="product">
                <p>{preke.pavadinimas}</p>
                <p>Jos yra: {preke.kiekis} vnt.</p>
                <p>Kainuoja: {preke.kaina} €.</p>
              </div>
            );
          })}
        </div>
      )}
      {data?.length === 0 && <p>Prekių kol kas nėra</p>}
    </div>
  );
};

export default PrekesVisos;
