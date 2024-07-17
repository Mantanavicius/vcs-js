const Salis = (props) => {
  const salis = props.salis;
  return (
    <div>
      <h3>{salis.pavadinimas}</h3>
      <p>Šalies sostinė: {salis.sostine}</p>
      <p>
        Kontinentas, kuriame ji yra: {salis.zemynas}
        <br />
        {salis.zemynas === "Europa" ? "*Jėga*" : ""}
      </p>
    </div>
  );
};

export default Salis;
