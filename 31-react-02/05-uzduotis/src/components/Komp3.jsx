// TODO: prijunkite šį komponentą prie App.jsx

const Komp3 = () => {
  let preke = {
    pavadinimas: "Šokoladas",
    kaina: 2.5,
    kiekis: 10,
  };

  return (
    // TODO: į šio komponento div įstatykite
    // prekės pavadinimą, kainą ir kiekį
    <div>
      Prekė: {preke.pavadinimas}, {preke.kaina}€, {preke.kiekis}vnt.
    </div>
  );
};

export default Komp3;
