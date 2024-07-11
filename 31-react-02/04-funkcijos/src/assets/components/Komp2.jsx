const Komp2 = () => {
  let skaicius1 = 14;
  let skaicius2 = 54;
  const didesnis = () => {
    if (skaicius1 > skaicius2) {
      return `${skaicius1} yra didesnis uz ${skaicius2}`;
    } else if (skaicius2 > skaicius1) {
      return `${skaicius2} yra didesnis uz ${skaicius1}`;
    } else {
      return `${skaicius1} ir ${skaicius2} lygus`;
    }
  };

  function mazesnis() {
    if (skaicius1 < skaicius2) {
      return `${skaicius1} yra mazesnis uz ${skaicius2}`;
    } else if (skaicius2 < skaicius1) {
      return `${skaicius2} yra mazesnis uz ${skaicius1}`;
    } else {
      return `${skaicius1} ir ${skaicius2} lygus`;
    }
  }

  return (
    <>
      <h2>Didesnis / mazesnis skaicius</h2>
      <p>
        Turimi skaiciai: {skaicius1} ir {skaicius2}
      </p>
      <p>{didesnis()}</p>
      <p>{mazesnis()}</p>
    </>
  );
};

export default Komp2;
