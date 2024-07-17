const Modulis = ({ modulis }) => {
  return (
    <div>
      <h3>Modulis: {modulis.pavadinimas}</h3>
      <h5>Trukmė: {modulis.trukme} h</h5>
    </div>
  );
};

export default Modulis;
