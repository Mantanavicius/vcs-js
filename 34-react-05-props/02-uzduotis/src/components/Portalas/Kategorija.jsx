import Naujiena from "./Naujiena";

const Kategorija = () => {
  const naujienos = [
    {
      pavadinimas: "5 būdai lavinti jūsų katės protą",
      perziuros: 18548,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quia, autem sed labore quam alias perferendis praesentium illum obcaecati consequuntur.",
    },
    {
      pavadinimas: "Kodėl šlapi šunys purtosi?",
      perziuros: 146,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quia, autem sed labore quam alias perferendis praesentium illum obcaecati consequuntur.",
    },
    {
      pavadinimas: "Automatizuotos šeryklės. Ar ateitis jau čia?",
      perziuros: 1248,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quia, autem sed labore quam alias perferendis praesentium illum obcaecati consequuntur.",
    },
  ];
  return (
    <div>
      <h2>Portalas</h2>
      {naujienos.map((n, i) => (
        <Naujiena
          key={i}
          naujiena={n}
        />
      ))}
    </div>
  );
};

export default Kategorija;
