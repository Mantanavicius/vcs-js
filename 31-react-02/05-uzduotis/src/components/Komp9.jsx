// TODO: prijunkite šį komponentą prie App.jsx

// TODO: susikurkite mokymų/kursų masyvą, kuriame būtų bent 3 objektai,
// kiekvienas objektas turėtų po 3 raktus:
// 1. pavadinimas,
// 2. trukmė,
// 3. kaina

// TODO: atvaizduokite visus mokymus/kursus norimu formatu

const Komp9 = () => {
  const mokymai = [
    { pavadinimas: "JS-fullstack", trukme: "3 men", kaina: 4000 },
    { pavadinimas: "Duomenu mokslas", trukme: "1.5 men", kaina: 2500 },
    { pavadinimas: "JAVA", trukme: "3 men", kaina: 3500 },
  ];
  return (
    <div>
      Musu siulomi mokymai:
      <ol>
        {mokymai.map((mok, i) => {
          return (
            <li key={i}>
              Programa: {mok.pavadinimas}
              <br />
              Trukme: {mok.trukme}
              <br />
              Kaina: {mok.kaina}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Komp9;
