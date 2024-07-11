// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite šalių masyvą, kuriame būtų 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. sostinė,
// 3. gyventojų skaičius

// TODO: atvaizduokite visas šalis norimu formatu

const Komp8 = () => {
  let salys = [
    {
      pavadinimas: "Japonija",
      sostine: "Tokijas",
      gyventojuSkaicius: 125100000,
    },
    { pavadinimas: "Lietuva", sostine: "Vilnius", gyventojuSkaicius: 2832000 },
    { pavadinimas: "Lenkija", sostine: "Varsuva", gyventojuSkaicius: 36820000 },
  ];
  return (
    <div>
      Salys:
      <ul>
        {salys.map((salis, i) => {
          return (
            <li key={i}>
              {salis.pavadinimas}, turi populiacija: {salis.gyventojuSkaicius}{" "}
              ir jos sostine yra {salis.sostine}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Komp8;
