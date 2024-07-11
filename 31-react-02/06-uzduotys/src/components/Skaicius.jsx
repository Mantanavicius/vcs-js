const Skaicius = () => {
  let skaicius = 41;
  const arLyginis = () => (skaicius % 2 === 0 ? "Taip" : "Ne");
  const arTeigiamas = () =>
    skaicius > 0 ? "Taip" : skaicius < 0 ? "Ne" : "Lygus 0";
  return (
    <>
      <h2>Skaičius: {skaicius}</h2>
      <p>
        Ar {skaicius} yra lyginis? {arLyginis()}
      </p>
      <p>
        Ar {skaicius} yra teigiamas? {arTeigiamas()}
      </p>
    </>
  );
};

export default Skaicius;
