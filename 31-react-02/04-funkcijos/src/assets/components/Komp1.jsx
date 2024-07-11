const Komp1 = () => {
  let skaicius = 69;
  const arLyginis = () => {
    if (skaicius % 2 === 0) {
      return "Lyginis";
    } else {
      return "Nelyginis";
    }
  };
  return (
    <>
      <h2>Skaičiai ir skaičiavimai</h2>
      <p>{skaicius} yra {arLyginis()}</p>
    </>
  );
};

export default Komp1;
